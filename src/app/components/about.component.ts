import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
<div class="datasets-page">

    <h1>About</h1>

    <h2>Refugee Discourse Database</h2>

    <p class="description">
      The Refugee Discourse Database formed out of research conducted for the book <i>Bad Refugees: Geopolitics, Stigma and Forced Migration (Mandić).</i>
    </p>

  <h2>Data Sources</h2>

  <p class="description">
    Our data is sourced from a growing variety of providers of current and historical global media coverage.
  </p>
</div>
  ` ,
    styles: [`

.sources-section {
  font-family: Georgia, serif;
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

  `]
})
export class AboutComponent {}