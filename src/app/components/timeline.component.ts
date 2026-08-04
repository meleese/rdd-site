import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  computed,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CitationPopoutComponent } from './citation.component';

interface ConflictJsonRow {
  conflict: string;
  subConflicts?: string | null;
  yearSpan: string | number;

  refugeeReferences?: number;
  keywordMentions?: number;

  shareDisplay?: string;
  keywordProportion?: number;
}

interface TimelineConflict {
  id: string;

  conflict: string;
  subConflicts?: string | null;

  startYear: number;
  endYear: number;

  refugeeReferences: number;
  shareDisplay: string;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, CitationPopoutComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent implements OnInit, OnDestroy {
  readonly firstYear = 1914;
  readonly lastYear = 2025;

  readonly svgWidth = 1400;
  readonly labelWidth = 200;
  readonly chartRightPadding = 45;
  readonly rowHeight = 22;
  readonly barHeight = 5;
  readonly topPadding = 48;

  readonly conflicts = signal<TimelineConflict[]>([]);
  readonly selectedConflict = signal<TimelineConflict | null>(null);

  readonly currentYear = signal(this.firstYear);
  readonly isPlaying = signal(false);
  readonly maximumVisibleRows = 21;


  readonly timelineWidth =
    this.svgWidth - this.labelWidth - this.chartRightPadding;

readonly visibleConflicts = computed(() => {
  const year = this.currentYear();

  return this.conflicts().filter(
    conflict =>
      conflict.startYear <= year &&
      conflict.endYear >= year
  );
});

    readonly svgHeight = computed(() => {
    const rowCount = Math.max(
        this.maximumVisibleRows,
        this.visibleConflicts().length
    );

    return (
        this.topPadding +
        rowCount * this.rowHeight +
        40
    );
    });

  readonly decadeTicks = computed(() => {
    const ticks: number[] = [];

    for (let year = 1920; year <= 2020; year += 10) {
      ticks.push(year);
    }

    return ticks;
  });

  private animationFrameId: number | null = null;
  private lastAdvanceTime = 0;

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<ConflictJsonRow[]>('/conflict-data.json')
      .subscribe({
        next: rows => {
            const parsed = rows.map((row, index) => {
            const [startYear, endYear] = this.parseYearSpan(row.yearSpan);

            const refugeeReferences =
                row.refugeeReferences ??
                row.keywordMentions ??
                0;

            const shareDisplay =
                row.shareDisplay ??
                (
                row.keywordProportion != null
                    ? `${Math.round(row.keywordProportion * 100)}%`
                    : '—'
                );

            return {
                ...row,
                id: `conflict-${index}`,
                startYear,
                endYear,
                refugeeReferences,
                shareDisplay
            } as TimelineConflict;
            });

          this.conflicts.set([...parsed].reverse());
        },
        error: error => {
          console.error('Unable to load conflict timeline data.', error);
        }
      });
  }

  ngOnDestroy(): void {
    this.stop();
  }

  xPosition(year: number): number {
    const boundedYear = Math.max(
      this.firstYear,
      Math.min(this.lastYear, year)
    );

    const proportion =
      (boundedYear - this.firstYear) /
      (this.lastYear - this.firstYear);

    return this.labelWidth + proportion * this.timelineWidth;
  }

  barX(conflict: TimelineConflict): number {
    return this.xPosition(conflict.startYear);
  }
barWidth(conflict: TimelineConflict): number {
  const visibleEnd = Math.min(
    this.currentYear(),
    conflict.endYear
  );

  return Math.max(
    4,
    this.xPosition(visibleEnd) -
      this.xPosition(conflict.startYear)
  );
}


  rowY(index: number): number {
    return this.topPadding + index * this.rowHeight;
  }


  selectConflict(conflict: TimelineConflict): void {
    this.selectedConflict.set(conflict);
  }

  clearSelection(): void {
    this.selectedConflict.set(null);
  }

  togglePlayback(): void {
    if (this.isPlaying()) {
      this.stop();
    } else {
      this.play();
    }
  }

  play(): void {
    if (this.currentYear() >= this.lastYear) {
      this.currentYear.set(this.firstYear);
    }

    this.isPlaying.set(true);
    this.lastAdvanceTime = 0;

    this.animationFrameId = requestAnimationFrame(
      timestamp => this.animate(timestamp)
    );
  }

  stop(): void {
    this.isPlaying.set(false);

    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  reset(): void {
    this.stop();
    this.currentYear.set(this.firstYear);
    this.selectedConflict.set(null);
  }

  setYearFromInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.currentYear.set(Number(input.value));
  }


  formatNumber(value: number): string {
    return value.toLocaleString('en-US');
  }

  displayYears(conflict: TimelineConflict): string {
    if (conflict.startYear === conflict.endYear) {
      return `${conflict.startYear}`;
    }

    return `${conflict.startYear}–${conflict.endYear}`;
  }

    private animate(timestamp: number): void {
    if (!this.isPlaying()) {
        return;
    }

    if (
        this.lastAdvanceTime === 0 ||
        timestamp - this.lastAdvanceTime >= 180
    ) {
        const nextYear = this.currentYear() + 1;

        if (nextYear > this.lastYear) {
        this.stop();
        return;
        }

        this.currentYear.set(nextYear);
        this.lastAdvanceTime = timestamp;
    }

    this.animationFrameId = requestAnimationFrame(
        nextTimestamp => this.animate(nextTimestamp)
    );
    }

  private parseYearSpan(
    value: string | number
  ): [number, number] {
    if (typeof value === 'number') {
      return [value, value];
    }

    const normalized = value
      .trim()
      .replace(/[–—−]/g, '-')
      .replace(';', '');

    const parts = normalized.match(/\d{1,4}/g);

    if (!parts?.length) {
      throw new Error(`Invalid year span: ${value}`);
    }

    const start = Number(parts[0]);

    if (parts.length === 1) {
      return [start, start];
    }

    const rawEnd = parts[1];
    const end = this.expandShortYear(start, rawEnd);

    return [start, end];
  }

  private expandShortYear(
    startYear: number,
    rawEnd: string
  ): number {
    if (rawEnd.length === 4) {
      return Number(rawEnd);
    }

    const factor = 10 ** rawEnd.length;
    let endYear =
      Math.floor(startYear / factor) * factor +
      Number(rawEnd);

    if (endYear < startYear) {
      endYear += factor;
    }

    return endYear;
  }

  readonly activeCount = computed(() =>
  this.visibleConflicts().length
);

readonly completedCount = computed(() =>
  this.conflicts().filter(
    c => c.endYear < this.currentYear()
  ).length
);

readonly largestActiveConflict = computed(() => {
  const active = this.visibleConflicts();

  if (active.length === 0) return null;

  return [...active].sort(
    (a, b) => b.refugeeReferences - a.refugeeReferences
  )[0];
});

readonly newestConflict = computed(() => {
  const active = this.visibleConflicts();

  if (active.length === 0) return null;

  return [...active].sort(
    (a, b) => b.startYear - a.startYear
  )[0];
});
}