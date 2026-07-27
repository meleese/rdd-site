import { Component, EventEmitter, Output } from '@angular/core';
import { DatasetsComponent } from './datasets.component';
import { OverviewComponent } from './overview.component';
import { TimelineComponent } from './timeline.component';

export type AppView =
  | 'home'
  | 'datasets'
  | 'overview'
  | 'timeline'
  | 'about';

type HomeSection = 'home' | 'datasets' | 'overview' | 'timeline';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DatasetsComponent,
    OverviewComponent,
    TimelineComponent
  ],
  template: `
    <div class="home-page">
      <section
        id="home" class="hero-academic">
        <div class="hero-content">
          <h1>Refugee Discourse Database</h1>

          <p class="hero-p">
            <span aria-hidden="true">
              <i class="fa-solid fa-hexagon-nodes"></i>
            </span>
            A research-focused collection of refugee-related press coverage
          </p>

          <button
            type="button"
            class="scroll-cue"
            (click)="scrollToSection('datasets')"
            aria-label="Scroll to the data summaries"
          >
            Explore
            <span aria-hidden="true">↓</span>
          </button>
        </div>
      </section>
      <section
        id="datasets"
        class="home-section home-datasets"
      >
        <app-datasets></app-datasets>
      </section>
      <section
        id="overview"
        class="home-section home-overview"
      >
        <app-overview
          (navigate)="handleSectionNavigation($event)">
        </app-overview>
      </section>
      <section
        id="timeline"
        class="home-section home-timeline"
      >
        <app-timeline></app-timeline>
      </section>

    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      min-width: 0;
    }

    .home-page {
      width: 100%;
      min-width: 0;
    }

    .hero-academic {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: calc(100vh - 90px);
      box-sizing: border-box;
      padding: 4rem 2rem;
      scroll-margin-top: 90px;
    }

    .hero-content {
      width: 100%;
      max-width: 620px;
      text-align: center;
      color: #e8e6e3;
    }

    .hero-content h1 {
      margin: 0;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: clamp(2.8rem, 6vw, 5rem);
      font-weight: 400;
      line-height: 1.03;
      letter-spacing: -0.035em;
    }

    .hero-p {
      max-width: 520px;
      margin: 1.5rem auto 0;
      color: #b2b2b2;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 1.08rem;
      line-height: 1.7;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    }

    .hero-p span {
      margin-right: 0.35rem;
    }

    .scroll-cue {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 2.5rem;
      padding: 0;
      background: transparent;
      border: 0;
      color: #d7dde1;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-decoration: none;
      text-transform: uppercase;
      cursor: pointer;
    }

    .scroll-cue:hover,
    .scroll-cue:focus-visible {
      color: #ffffff;
    }

    .scroll-cue:focus-visible {
      outline: 1px solid #ffffff;
      outline-offset: 0.4rem;
    }

    .home-section {
      width: 100%;
      min-width: 0;
      scroll-margin-top: 90px;
      background: #ffffff;
    }

    @media (max-width: 700px) {
      .hero-academic {
        min-height: calc(100svh - 75px);
        padding: 3rem 1.25rem;
        scroll-margin-top: 75px;
      }

      .hero-content h1 {
        font-size: clamp(2.5rem, 13vw, 3.8rem);
      }

      .hero-p {
        font-size: 1rem;
      }

      .home-section {
        scroll-margin-top: 75px;
      }
    }
  `]
})
export class HomeComponent {
  @Output() navigate = new EventEmitter<AppView>();

  handleSectionNavigation(view: AppView): void {
    if (this.isHomeSection(view)) {
      this.scrollToSection(view);
      return;
    }

    this.navigate.emit(view);
  }

  scrollToSection(sectionId: HomeSection): void {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  }

  private isHomeSection(view: AppView): view is HomeSection {
    return (
      view === 'home' ||
      view === 'datasets' ||
      view === 'overview' ||
      view === 'timeline'
    );
  }
}