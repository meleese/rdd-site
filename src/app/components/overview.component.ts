import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  standalone: true,
  template: `
<div class="datasets-page">
<main class="research-overview">
  <article>
    <header class="article-header">
      <p class="series-title">Overview</p>

      <h1>Refugee Discourse Database</h1>

      <p class="subtitle">
        Refugee global refugee press coverage from 1914–2025.
      </p>
    </header>

    <section class="abstract" aria-labelledby="abstract-heading">
      <h2 id="abstract-heading">About</h2>

      <p>
        The Refugee Discourse Database formed out of research conducted for the 
        book <i>Bad Refugees: Geopolitics, Stigma and Forced Migration</i> (Mandić, 2027).
      </p>

      <p>
      </p>
      <div class="article-meta">
      Available for Pre-Order:
        <b><a
          href="https://global.oup.com/academic/product/bad-refugees-9780197765982?q=mandic&lang=en&cc=us"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mandić, Danilo. <i>Bad Refugees: Geopolitics, Stigma, and Forced Migration.</i> Oxford University Press, 2027.
        </a></b>
      </div>
    </section>

    <section class="article-section" aria-labelledby="section-two-heading">
      <header class="section-header">
        <p class="section-number"></p>

        <div>
          <h2 id="section-two-heading">Conflict Timeline</h2>

          <p>
            A timeline of overlapping conflicts producing refugee episdoes across years, since 1914.
          </p>
        </div>
      </header>

      <figure class="figure figure-wide">
        <div class="figure-surface">
        <img
            src="assets/overview/refugee-episodes-timeline.png"
            alt="Timeline of verlapping conflicts across years, since 1914."
            class="figure-image"
        />
        </div>

        <figcaption>
          <span class="figure-number">Figure 2.</span>
          The timeline of overlapping conflicts across years, since 1914.        
          <span class="figure-credit">

        </span>
        </figcaption>
      </figure>

     <div class="article-body">
        <p>
          This timeline shows conflicts producing refugee episodes since 1914. 
          Increases in overlapping conflicts are observed in recent decades.
        </p>
      </div>
    </section>
    <section class="article-section" aria-labelledby="section-one-heading">
      <header class="section-header">
        <p class="section-number"></p>

        <div>
          <h2 id="section-one-heading">Op-Ed Article Volume by Country</h2>

          <p>
          </p>
        </div>
      </header>

      <figure class="figure figure-wide">
        <div class="figure-surface">
        <img
            src="assets/overview/op-ed-articles-country.jpeg"
            alt="The sum of articles by year from 1980 to 2024"
            class="figure-image"
        />
        </div>

        <figcaption>
          <span class="figure-number">Figure 1.</span>
          The sum of op-ed articles by year from 1980 to 2024.         
          <span class="figure-credit">
          Created by Meleese Bremer.
        </span>
        </figcaption>
      </figure>

      <div class="article-body">
        <p>
          This distribution shows the change in op-ed reporting concerning refugees by country since 1980. 
          Overall, volumes have increased dramatically and show unequal growth per country of origin.
        </p>
      </div>
    </section>

    <section class="article-section" aria-labelledby="section-two-heading">
      <header class="section-header">
        <p class="section-number"></p>

        <div>
          <h2 id="section-two-heading">Refugee Reference by Article, Mention & Publication</h2>
          <p>
            The count of articles, mentions and publications containing refugee references, since 1914.
          </p>
        </div>
      </header>

      <figure class="figure figure-wide">
        <div class="figure-surface">
        <img
            src="assets/overview/total-mentions.jpg"
            alt="The count of distinct articles, mentions and publications containing refugee references from 1914-2024."
            class="figure-image"
        />
        </div>

        <figcaption>
          <span class="figure-number">Figure 3.</span>
          The count of distinct articles, mentions and publications containing refugee references, 1914-2024.        
          <span class="figure-credit">
          Created By Meleese Bremer
        </span>
        </figcaption>
      </figure>

     <div class="article-body">
        <p>
          This chart shows the growth of refugee references by total distinct article count and total count of each mention. 
        </p>
      </div>
    </section>


      <nav class="research-links" aria-label="Research resources">
      <span>All original data sourced from ProQuest. See
        <a
          href="/METHODS%20APPENDIX.docx"
          target="_blank"
          rel="noopener noreferrer"
        >
        Methods
        </a></span>
      </nav>
  </article>
</main>
</div>
  ` ,
    styles: [`

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
  font-size: 4rem;
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
}

  `]
})
export class OverviewComponent {}