import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export const CONFLICT_DATA = [
  {
    "conflict": "World War I",
    "subConflicts": null,
    "yearSpan": "1914–1923",
    "refugeeReferences": 42227,
    "shareDisplay": "84%"
  },
  {
    "conflict": "Abyssinian War",
    "subConflicts": null,
    "yearSpan": "1935–1937",
    "refugeeReferences": 265,
    "shareDisplay": "2%"
  },
  {
    "conflict": "Spanish Civil War",
    "subConflicts": null,
    "yearSpan": "1936–1939",
    "refugeeReferences": 3151,
    "shareDisplay": "7%"
  },
  {
    "conflict": "World War II",
    "subConflicts": null,
    "yearSpan": "1933–1945",
    "refugeeReferences": 107006,
    "shareDisplay": "92%"
  },
  {
    "conflict": "China — Civil War",
    "subConflicts": null,
    "yearSpan": "1945–1949",
    "refugeeReferences": 2008,
    "shareDisplay": "4%"
  },
  {
    "conflict": "China — Cultural Revolution",
    "subConflicts": null,
    "yearSpan": "1967–1976",
    "refugeeReferences": 975,
    "shareDisplay": "1%"
  },
  {
    "conflict": "India–Pakistan Partition",
    "subConflicts": null,
    "yearSpan": "1947–1950",
    "refugeeReferences": 274,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Palestinian Exodus",
    "subConflicts": null,
    "yearSpan": "1948",
    "refugeeReferences": 354,
    "shareDisplay": "9%"
  },
  {
    "conflict": "Korean War",
    "subConflicts": null,
    "yearSpan": "1950–1953",
    "refugeeReferences": 1067,
    "shareDisplay": "4%"
  },
  {
    "conflict": "Algerian War",
    "subConflicts": null,
    "yearSpan": "1954–1962",
    "refugeeReferences": 994,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Soviet Invasion of Hungary",
    "subConflicts": null,
    "yearSpan": "1956",
    "refugeeReferences": 6004,
    "shareDisplay": "40%"
  },
  {
    "conflict": "Indochina Wars",
    "subConflicts": "Vietnamese: 7,071; Cambodian: 1,088; Laotian: 332",
    "yearSpan": "1956–1975",
    "refugeeReferences": 10914,
    "shareDisplay": "6%"
  },
  {
    "conflict": "Tibetan Exodus",
    "subConflicts": null,
    "yearSpan": "1958–1962",
    "refugeeReferences": 1928,
    "shareDisplay": "4%"
  },
  {
    "conflict": "Tibetan Exodus",
    "subConflicts": null,
    "yearSpan": "1986–1996",
    "refugeeReferences": 1496,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Pol Pot and Cambodian Civil War",
    "subConflicts": null,
    "yearSpan": "1975–1997",
    "refugeeReferences": 10942,
    "shareDisplay": "2%"
  },
  {
    "conflict": "Chad Wars",
    "subConflicts": null,
    "yearSpan": "1965–1979",
    "refugeeReferences": 3,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Chad Wars",
    "subConflicts": null,
    "yearSpan": "2005–2010",
    "refugeeReferences": 193,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Six-Day War",
    "subConflicts": null,
    "yearSpan": "1967",
    "refugeeReferences": 3530,
    "shareDisplay": "41%"
  },
  {
    "conflict": "Biafran War",
    "subConflicts": null,
    "yearSpan": "1967–1970",
    "refugeeReferences": 461,
    "shareDisplay": "2%"
  },
  {
    "conflict": "Soviet Invasion of Czechoslovakia",
    "subConflicts": null,
    "yearSpan": "1968",
    "refugeeReferences": 427,
    "shareDisplay": "8%"
  },
  {
    "conflict": "Bangladesh War",
    "subConflicts": null,
    "yearSpan": "1971",
    "refugeeReferences": 1154,
    "shareDisplay": "11%"
  },
  {
    "conflict": "Idi Amin Purges in Uganda",
    "subConflicts": null,
    "yearSpan": "1972",
    "refugeeReferences": 242,
    "shareDisplay": "4%"
  },
  {
    "conflict": "Chilean Coup",
    "subConflicts": null,
    "yearSpan": "1973",
    "refugeeReferences": 140,
    "shareDisplay": "3%"
  },
  {
    "conflict": "Cyprus War",
    "subConflicts": null,
    "yearSpan": "1974–1975",
    "refugeeReferences": 1072,
    "shareDisplay": "4%"
  },
  {
    "conflict": "Angolan War",
    "subConflicts": null,
    "yearSpan": "1975–2002",
    "refugeeReferences": 1169,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Mozambican War",
    "subConflicts": null,
    "yearSpan": "1976–1992",
    "refugeeReferences": 813,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Somali–Ethiopian War",
    "subConflicts": null,
    "yearSpan": "1977–1979",
    "refugeeReferences": 72,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Ethiopia–Eritrea War",
    "subConflicts": null,
    "yearSpan": "1978–1984",
    "refugeeReferences": 816,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Rhodesian War",
    "subConflicts": null,
    "yearSpan": "1964–1979",
    "refugeeReferences": 206,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Western Sahara War",
    "subConflicts": null,
    "yearSpan": "1975–1991",
    "refugeeReferences": 81,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Afghanistan — Soviet Occupation",
    "subConflicts": null,
    "yearSpan": "1979–1989",
    "refugeeReferences": 10991,
    "shareDisplay": "5%"
  },
  {
    "conflict": "Afghanistan — Civil War",
    "subConflicts": null,
    "yearSpan": "1992–1996",
    "refugeeReferences": 1261,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Afghanistan — U.S. Occupation",
    "subConflicts": null,
    "yearSpan": "2001–2021",
    "refugeeReferences": 145945,
    "shareDisplay": "7%"
  },
  {
    "conflict": "Central American Wars",
    "subConflicts": "Salvadoran: 4,970; Nicaraguan: 2,761; Guatemalan: 1,996; Honduran: 310; Panamanian: 125",
    "yearSpan": "1979–1992",
    "refugeeReferences": 11497,
    "shareDisplay": "4%"
  },
  {
    "conflict": "Sudan Wars",
    "subConflicts": "Including 623 Darfur",
    "yearSpan": "1980–2005",
    "refugeeReferences": 6701,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Sudan Wars",
    "subConflicts": "Including 6,566 post-2011 South Sudan and 1,431 Darfur",
    "yearSpan": "2011–2025",
    "refugeeReferences": 25438,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Cuba — Mariel Exodus",
    "subConflicts": null,
    "yearSpan": "1980",
    "refugeeReferences": 8419,
    "shareDisplay": "32%"
  },
  {
    "conflict": "Cuba — Post-COVID Exodus",
    "subConflicts": null,
    "yearSpan": "2022–2025",
    "refugeeReferences": 1140,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Lebanon Wars",
    "subConflicts": "Including 19,623 Palestinian and 5,335 concerning the 1982 Israeli invasion",
    "yearSpan": "1975–1990",
    "refugeeReferences": 24221,
    "shareDisplay": "9%"
  },
  {
    "conflict": "Lebanon War",
    "subConflicts": null,
    "yearSpan": "2006",
    "refugeeReferences": 3857,
    "shareDisplay": "7%"
  },
  {
    "conflict": "Lebanon War",
    "subConflicts": null,
    "yearSpan": "2024–2025",
    "refugeeReferences": 404,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Iran–Iraq War",
    "subConflicts": null,
    "yearSpan": "1980–1988",
    "refugeeReferences": 1884,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Sri Lankan War",
    "subConflicts": null,
    "yearSpan": "1983–2009",
    "refugeeReferences": 3196,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Palestinian Intifada",
    "subConflicts": null,
    "yearSpan": "1987–1993",
    "refugeeReferences": 19471,
    "shareDisplay": "9%"
  },
  {
    "conflict": "Palestinian Intifada",
    "subConflicts": null,
    "yearSpan": "2000–2005",
    "refugeeReferences": 47986,
    "shareDisplay": "14%"
  },
  {
    "conflict": "Uganda LRA Insurgency",
    "subConflicts": null,
    "yearSpan": "1987–2006",
    "refugeeReferences": 1705,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Liberian War",
    "subConflicts": null,
    "yearSpan": "1989–2003",
    "refugeeReferences": 2357,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Georgia Wars",
    "subConflicts": "South Ossetia and Abkhazia War",
    "yearSpan": "1989–1993",
    "refugeeReferences": 1286,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Georgia Wars",
    "subConflicts": "Second South Ossetia War",
    "yearSpan": "2008",
    "refugeeReferences": 623,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Kashmir Insurgency",
    "subConflicts": null,
    "yearSpan": "1990–1991",
    "refugeeReferences": 148,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Somali Wars",
    "subConflicts": null,
    "yearSpan": "1991–1994",
    "refugeeReferences": 2699,
    "shareDisplay": "2%"
  },
  {
    "conflict": "Somali Wars",
    "subConflicts": null,
    "yearSpan": "2009–2025",
    "refugeeReferences": 24373,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Nagorno-Karabakh War",
    "subConflicts": null,
    "yearSpan": "1988–1994",
    "refugeeReferences": 1732,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Nagorno-Karabakh War",
    "subConflicts": null,
    "yearSpan": "2020",
    "refugeeReferences": 725,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Sierra Leone War",
    "subConflicts": null,
    "yearSpan": "1991–2002",
    "refugeeReferences": 13660,
    "shareDisplay": "3%"
  },
  {
    "conflict": "Yugoslav Wars",
    "subConflicts": null,
    "yearSpan": "1991–1995",
    "refugeeReferences": 64793,
    "shareDisplay": "34%"
  },
  {
    "conflict": "Yugoslav Wars",
    "subConflicts": null,
    "yearSpan": "1999",
    "refugeeReferences": 25747,
    "shareDisplay": "30%"
  },
  {
    "conflict": "Chechen Wars",
    "subConflicts": null,
    "yearSpan": "1994–1996",
    "refugeeReferences": 1348,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Chechen Wars",
    "subConflicts": null,
    "yearSpan": "1999–2009",
    "refugeeReferences": 5606,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Haitian Exodus",
    "subConflicts": null,
    "yearSpan": "1980–1981",
    "refugeeReferences": 3939,
    "shareDisplay": "9%"
  },
  {
    "conflict": "Haitian Exodus",
    "subConflicts": null,
    "yearSpan": "1991–1994",
    "refugeeReferences": 19612,
    "shareDisplay": "12%"
  },
  {
    "conflict": "Haitian Exodus",
    "subConflicts": null,
    "yearSpan": "2004",
    "refugeeReferences": 745,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Haitian Exodus",
    "subConflicts": null,
    "yearSpan": "2021–2022",
    "refugeeReferences": 2232,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Rohingya Exodus",
    "subConflicts": null,
    "yearSpan": "1978",
    "refugeeReferences": 40,
    "shareDisplay": "2%"
  },
  {
    "conflict": "Rohingya Exodus",
    "subConflicts": null,
    "yearSpan": "1991–1992",
    "refugeeReferences": 1051,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Rohingya Exodus",
    "subConflicts": null,
    "yearSpan": "2017–2018",
    "refugeeReferences": 33908,
    "shareDisplay": "11%"
  },
  {
    "conflict": "Transnistria War",
    "subConflicts": null,
    "yearSpan": "1992",
    "refugeeReferences": 347,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Tajikistani Civil War",
    "subConflicts": null,
    "yearSpan": "1992–1997",
    "refugeeReferences": 2182,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Turkish–Kurdish Wars",
    "subConflicts": null,
    "yearSpan": "1993–1999",
    "refugeeReferences": 2516,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Turkish–Kurdish Wars",
    "subConflicts": null,
    "yearSpan": "2015–2019",
    "refugeeReferences": 5784,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Rwandan Civil War",
    "subConflicts": null,
    "yearSpan": "1990–1994",
    "refugeeReferences": 9684,
    "shareDisplay": "5%"
  },
  {
    "conflict": "Congo Wars",
    "subConflicts": null,
    "yearSpan": "1996–1997",
    "refugeeReferences": 8490,
    "shareDisplay": "13%"
  },
  {
    "conflict": "Congo Wars",
    "subConflicts": null,
    "yearSpan": "1998–2003",
    "refugeeReferences": 2390,
    "shareDisplay": "1%"
  },
  {
    "conflict": "East Timor",
    "subConflicts": null,
    "yearSpan": "1999–2002",
    "refugeeReferences": 2847,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Colombia/FARC Insurgency",
    "subConflicts": null,
    "yearSpan": "2000–2015",
    "refugeeReferences": 1333,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Ivory Coast Wars",
    "subConflicts": null,
    "yearSpan": "2002–2011",
    "refugeeReferences": 44,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Central African Republic Wars",
    "subConflicts": null,
    "yearSpan": "2004–2007",
    "refugeeReferences": 39,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Central African Republic Wars",
    "subConflicts": null,
    "yearSpan": "2012–2025",
    "refugeeReferences": 3876,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Iraq Wars",
    "subConflicts": "Including 9,622 Kurdish",
    "yearSpan": "1990–1991",
    "refugeeReferences": 13481,
    "shareDisplay": "20%"
  },
  {
    "conflict": "Iraq Wars",
    "subConflicts": null,
    "yearSpan": "2003–2011",
    "refugeeReferences": 52764,
    "shareDisplay": "10%"
  },
  {
    "conflict": "Gaza Wars",
    "subConflicts": null,
    "yearSpan": "2006",
    "refugeeReferences": 5321,
    "shareDisplay": "10%"
  },
  {
    "conflict": "Gaza Wars",
    "subConflicts": null,
    "yearSpan": "2008–2009",
    "refugeeReferences": 14656,
    "shareDisplay": "14%"
  },
  {
    "conflict": "Gaza Wars",
    "subConflicts": null,
    "yearSpan": "2012",
    "refugeeReferences": 7290,
    "shareDisplay": "9%"
  },
  {
    "conflict": "Gaza Wars",
    "subConflicts": null,
    "yearSpan": "2014",
    "refugeeReferences": 9534,
    "shareDisplay": "9%"
  },
  {
    "conflict": "Gaza Wars",
    "subConflicts": null,
    "yearSpan": "2024–2025",
    "refugeeReferences": 49474,
    "shareDisplay": "32%"
  },
  {
    "conflict": "Pakistan Insurgency",
    "subConflicts": null,
    "yearSpan": "2009",
    "refugeeReferences": 3302,
    "shareDisplay": "6%"
  },
  {
    "conflict": "Nigeria Boko Haram Insurgency",
    "subConflicts": null,
    "yearSpan": "2009–2025",
    "refugeeReferences": 7004,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Libyan War",
    "subConflicts": null,
    "yearSpan": "2011",
    "refugeeReferences": 1261,
    "shareDisplay": "2%"
  },
  {
    "conflict": "Syrian War",
    "subConflicts": null,
    "yearSpan": "2011–2025",
    "refugeeReferences": 358577,
    "shareDisplay": "19%"
  },
  {
    "conflict": "Azawad War",
    "subConflicts": null,
    "yearSpan": "2012–2025",
    "refugeeReferences": 2358,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Yemeni War",
    "subConflicts": null,
    "yearSpan": "2014–2025",
    "refugeeReferences": 2628,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Ukraine War",
    "subConflicts": "Including 80,739 since the 2022 full-scale invasion",
    "yearSpan": "2014–2025",
    "refugeeReferences": 85220,
    "shareDisplay": "5%"
  },
  {
    "conflict": "Burkina Faso War",
    "subConflicts": null,
    "yearSpan": "2015–2025",
    "refugeeReferences": 4342,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Venezuelan Exodus",
    "subConflicts": null,
    "yearSpan": "2015–2025",
    "refugeeReferences": 15887,
    "shareDisplay": "1%"
  },
  {
    "conflict": "Ambazonia War",
    "subConflicts": null,
    "yearSpan": "2016–2025",
    "refugeeReferences": 4069,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Uyghur Exodus",
    "subConflicts": null,
    "yearSpan": "2017–2025",
    "refugeeReferences": 761,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Tigray War",
    "subConflicts": null,
    "yearSpan": "2020–2025",
    "refugeeReferences": 3890,
    "shareDisplay": "<1%"
  },
  {
    "conflict": "Myanmar Civil War",
    "subConflicts": null,
    "yearSpan": "2021–2025",
    "refugeeReferences": 3335,
    "shareDisplay": "<1%"
  }
];

export interface ConflictData {
  conflict: string;
  subConflicts: string;
  yearSpan: string;
  refugeeReferences: number | null;
  shareDisplay: number | null;
}

@Component({
  selector: 'app-datasets',
  standalone: true,
    imports: [
      CommonModule,
    ],
  template: `
<div>


    <div class="main-column">

      <h1>Refugee Press Coverage by War</h1>
<div class="data-intro">
  <p class="lead">
    This data summarizes refugee-related coverage by refugee episode from 1914-2025 with aggregates measured by share of refugee keywords.
  </p>
</div>
<div class="data-row header">
  <div>War</div>
  <div>Years</div>
  <div>Refugee References</div>
  <div>Share of Total Refugee References</div>
</div>
<div class="data-row" *ngFor="let row of filteredRows">
  <div class="col col-conflict" data-label="War">
    <div class="conflict-name">{{ row.conflict }}</div>
    <div class="subtext">{{ row.subConflicts }}</div>
  </div>

  <div class="col" data-label="Years">
    {{ row.yearSpan }}
  </div>

  <div class="col" data-label="Refugee References">
    {{ formatNumber(row.refugeeReferences) }}
  </div>

  <div class="col" data-label="Coverage">
    {{ row.shareDisplay }}
  </div>
</div>
<div class="data-intro">
  <p class="meta">
    All original data sourced from ProQuest.
  </p>
</div>

</div>
  ` ,
    styles: [`
 .two-column {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
}

.main-column {
  max-width: 750px;
}

.side-column {
  font-size: 0.9rem;
  color: #555;
}

.data-table {
  margin-top: 2rem;
  border-top: 1px solid #ddd;
}

.data-row {
  display: grid;
  grid-template-columns: 2.5fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;
  align-items: center;
}

.data-row.header {
  font-size: 0.75rem;
  text-transform: uppercase;
  color: #777;
  letter-spacing: 1px;
  border-bottom: 1px solid #ddd;
}

.data-row strong {
  font-family: Georgia, serif;
  font-size: 1.1rem;
}

.sub {
  font-size: 0.8rem;
  color: #777;
}
  .conflict-name {
  font-weight: 600;
  color: #1a1a1a;
}

.subtext {
  font-size: 0.8rem;
  color: #777;
}
  
.col {
  font-size: 0.95rem;
}

.col-conflict {
  min-width: 250px;
}

.data-grid > div:not(:first-child) {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
  .data-grid {
  display: grid;
  grid-template-columns: 3fr 1.2fr 1fr 1.2fr 1fr;
  gap: 1.5rem;
  align-items: center;
}

.conflict-name {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 4px;
}

.subtext {
  font-size: 0.85rem;
  color: #666;
  line-height: 1.4;

  /* prevent huge overflow on mobile */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}


  `]
})
export class DatasetsComponent {
  rows = CONFLICT_DATA;
  get filteredRows() {
  return this.rows;
}
  public formatNumber(value: string | number | null): string {
  if (value == null || value === '') return '—';

  const num = typeof value === 'number' ? value : Number(value);

  return isNaN(num) ? '—' : num.toLocaleString();
}
}