import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitationPopoutComponent } from './citation.component';

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
      CitationPopoutComponent
    ],
  template: `
<div class="datasets-page">
  <main class="datasets-content">

    <header class="datasets-header">
      <p class="series-title">
        Data Summaries
      </p>
      <h1>Refugee Press Coverage by War</h1>
      <p class="datasets-subtitle">
        This data summarizes refugee-related coverage by refugee episode
        from 1914–2025, with aggregates measured by share of refugee keywords.
      </p>
      <app-citation-popout/>
    </header>
    <div class="main-column">
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
:host {
  display: block;
  width: 100%;
  min-width: 0;

  background: #ffffff;
  color: #252525;
}

.datasets-page {
  width: 100%;
  min-width: 0;
}

.datasets-content {
  width: min(1100px, calc(100% - 4rem));
  margin-inline: auto;
  padding: 5rem 0 7rem;
  box-sizing: border-box;
}
 .two-column {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
}

.main-column {
  width: 100%;
  max-width: none;
  margin: 0;
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
  grid-template-columns: 2.5fr 1fr 1fr 1.5fr;
  gap: 1rem;
  width: 100%;
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
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.datasets-header {
  width: 100%;
  margin: 0 0 4rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #bfc0bb;
  box-sizing: border-box;
}

.series-title {
  margin: 0 0 1rem;

  color: #59636b;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.datasets-header h1 {
  max-width: none;
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2.8rem, 5vw, 4rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.035em;
}

.datasets-subtitle {
  width: 100%;
  max-width: 900px;
  margin: 1.5rem 0 0;

  color: #505050;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.35rem;
  line-height: 1.55;
}
  
.section-number,
.case-label {
  margin: 0 0 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #59636b;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

:host {
  display: block;
  background: #ffffff;
  color: #252525;
}

.sources-section {
  font-family: Georgia, serif;
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

:host {
  display: block;
  background: #ffffff;
  color: #252525;
}

.research-overview {
  padding: 5rem 2rem 7rem;
}

article {
  max-width: 1160px;
  margin: 0 auto;
}

.article-header,
.abstract,
.article-body,
.method-note,
.conclusion {
  max-width: 790px;
  margin-right: auto;
  margin-left: auto;
}

.article-header {
  padding-bottom: 3.5rem;
  border-bottom: 1px solid #bfc0bb;
}

.series-title,
.section-number,
.case-label {
  margin: 0 0 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #59636b;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.article-header h1 {
  max-width: 820px;
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.03;
  letter-spacing: -0.035em;
}

.subtitle {
  max-width: 720px;
  margin: 1.5rem 0 0;
  font-family: Georgia, 'Times New Roman', serif;
  color: #505050;
  font-size: 1.35rem;
  line-height: 1.55;
}

.article-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #6c6c68;
  font-size: 0.82rem;
}

a {
  color: #334f61;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.2em;
}

p {
  max-width: 720px;
}

.abstract {
  padding: 3rem 0;
  border-bottom: 1px solid #cecec8;
}

.abstract h2 {
  margin: 0 0 1rem;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.abstract p,
.article-body p,
.method-note p,
.conclusion p {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.08rem;
  line-height: 1.8;
}

.abstract p:first-of-type::first-letter {
  float: left;
  margin: 0.08em 0.08em 0 0;
  font-size: 3.3em;
  line-height: 0.8;
}

.article-section {
  padding: 5rem 0;
  border-bottom: 1px solid #cecec8;
}

.section-header {
  display: grid;
  grid-template-columns: 42px minmax(0, 790px);
  gap: 1.25rem;
  max-width: 860px;
  margin: 0 auto 3rem;
}

.section-header h2 {
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2rem, 4vw, 3.15rem);
  font-weight: 400;
  line-height: 1.12;
}

.section-header p:not(.section-number) {
  max-width: 690px;
  margin: 1rem 0 0;
  color: #61615e;
  font-family: Georgia, 'Times New Roman', serif;
  line-height: 1.7;
}

.section-number {
  padding-top: 0.55rem;
}

.figure {
  margin: 3rem auto;
}

.figure-wide {
  max-width: 1100px;
}

.figure-surface {
  padding: 2rem;
  background: #f3f3f3;
  border: 1px solid #d2d1ca;
}

.figure-image {
    display: block;
    width: 100%;
    height: auto;

    object-fit: contain;
}

.chart-placeholder-tall {
  min-height: 720px;
}


  figcaption {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;

    max-width: 900px;
  margin: 1rem auto 0;
  color: #5d5d59;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 0.88rem;
  line-height: 1.55;
}

.figure-number {
  color: #292929;
  font-weight: 600;
}
  .figure-credit {
  margin-left: auto;
  white-space: nowrap;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.72rem;
  color: #b5b5b5;
  letter-spacing: 0.03em;
}

.article-body {
  margin-top: 2.5rem;
}

.case-study {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr);
  gap: 4rem;
  align-items: center;
  margin: 5rem 0;
}

.case-study-reversed {
  grid-template-columns: minmax(280px, 0.65fr) minmax(0, 1.35fr);
}

.case-study-reversed .documentary-figure {
  order: 2;
}

.documentary-figure {
  margin: 0;
}

.documentary-figure img {
  display: block;
  width: 100%;
  max-height: 620px;
  object-fit: cover;
}

.case-study-text {
  max-width: 420px;
}

.case-study-text h3 {
  margin: 0 0 1rem;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.85rem;
  font-weight: 400;
  line-height: 1.25;
}

.case-study-text p:not(.case-label) {
  color: #585854;
  font-family: Georgia, 'Times New Roman', serif;
  line-height: 1.75;
}

.method-note {
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding: 2rem 0 2rem 2rem;
  border-left: 2px solid #586d79;
}

.method-note h2 {
  margin: 0 0 0.8rem;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.conclusion {
  padding-top: 4rem;
}

.conclusion h2 {
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 2.3rem;
  font-weight: 400;
}

.research-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.86rem;
}

.datasets-page {
  width: 100%;
}

@media (max-width: 760px) {
  .research-overview {
    padding: 3rem 1.25rem 5rem;
  }

  .section-header {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .section-number {
    margin-bottom: 0.5rem;
  }

  .figure-surface {
    padding: 0.75rem;
  }

  .chart-placeholder,
  .chart-placeholder-tall {
    min-height: 340px;
  }

  .case-study,
  .case-study-reversed {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .case-study-reversed .documentary-figure {
    order: initial;
  }

  .article-section {
    padding: 3.5rem 0;
  }

.inline-link {
  display: inline;
  margin: 0;
  padding: 0;

  background: transparent;
  border: 0;

  color: #334f61;
  font: inherit;
  cursor: pointer;

  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.18em;
}

.inline-link:hover,
.inline-link:focus-visible {
  color: #193a50;
  text-decoration-thickness: 2px;
}
  .datasets-content {
  width: min(100% - 2rem, 1100px);
  padding: 3rem 0 5rem;
}

.datasets-header {
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
}

.datasets-subtitle {
  max-width: none;
}
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