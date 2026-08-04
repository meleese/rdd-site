import { Component, EventEmitter, Output } from '@angular/core';
import { CitationPopoutComponent } from './citation.component';

export type AppView =
  | 'home'
  | 'datasets'
  | 'overview'
  | 'timeline'
  | 'about';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    CitationPopoutComponent
  ],
  template: `
    <div class="datasets-page">
      <main class="research-overview">
        <article>
          <header class="article-header">
            <p class="series-title">Visualizations</p>
            <h1>Graphs on Refugee Press Coverage</h1>
            <p class="subtitle">
              Global refugee press coverage from 1914–2025.
            </p>
          </header>

          <section
            class="article-section"
            aria-labelledby="conflict-timeline-heading"
          >
            <header class="section-header">
              <h2 id="conflict-timeline-heading">
                Conflict Timeline
              </h2>

              <p>
                A timeline of overlapping conflicts producing refugee
                episodes across years since 1914. For an interactive
                version of this timeline, see
                <a
                  href="#timeline"
                  class="inline-link"
                  (click)="goToTimeline($event)"
                >
                  Timeline
                </a>.
              </p>
              <app-citation-popout />
            </header>

            <figure class="figure figure-wide">
              <div class="figure-surface">
                <img
                  src="assets/overview/refugee-episodes-timeline.png"
                  alt="Timeline of overlapping conflicts producing refugee episodes from 1914 through 2025."
                  class="figure-image"
                />
              </div>

              <figcaption>
                <span class="caption-description">
                  <span class="figure-number">Figure 2.</span>
                  The timeline of overlapping conflicts across years,
                  since 1914.
                </span>

              </figcaption>
            </figure>

            <div class="article-body">
              <p>
                This timeline shows conflicts producing refugee episodes
                since 1914. Increases in overlapping conflicts are
                observed in recent decades.
              </p>
            </div>
          </section>
          <section
            class="article-section"
            aria-labelledby="oped-volume-heading"
          >
            <header class="section-header">
              <h2 id="oped-volume-heading">
                Op-Ed Article Volume by Country
              </h2>
              <app-citation-popout />
            </header>

            <figure class="figure figure-wide">
              <div class="figure-surface">
                <img
                  src="assets/overview/op-ed-articles-country.jpeg"
                  alt="Stacked bar chart showing the number of op-ed articles by country from 1980 through 2024."
                  class="figure-image"
                />
              </div>

              <figcaption>
                <span class="caption-description">
                  <span class="figure-number">Figure 1.</span>
                  The sum of op-ed articles by year from 1980 to 2024.
                </span>

                <span class="figure-credit">
                  Created by Meleese Bremer
                </span>
              </figcaption>
            </figure>

            <div class="article-body">
              <p>
                This distribution shows the change in op-ed reporting
                concerning refugees by country since 1980. Overall,
                volumes have increased dramatically and show unequal
                growth by country of origin.
              </p>
            </div>
          </section>

          <section
            class="article-section"
            aria-labelledby="reference-totals-heading"
          >
            <header class="section-header">
              <h2 id="reference-totals-heading">
                Refugee References by Article, Mention and Publication
              </h2>

              <p>
                The count of articles, mentions and publications
                containing refugee references since 1914.
              </p>
              <app-citation-popout />
            </header>

            <figure class="figure figure-wide">
              <div class="figure-surface">
                <img
                  src="assets/overview/totals-2025.png"
                  alt="Chart showing counts of articles, mentions and publications containing refugee references since 1914."
                  class="figure-image"
                />
              </div>

              <figcaption>
                <span class="caption-description">
                  <span class="figure-number">Figure 3.</span>
                  The count of distinct articles, mentions and
                  publications containing refugee references,
                  1914–2024.
                </span>

                <span class="figure-credit">
                  Created by Meleese Bremer
                </span>
              </figcaption>
            </figure>

            <div class="article-body">
              <p>
                This chart shows the growth of refugee references by
                total distinct article count and the total count of
                individual mentions.
              </p>
            </div>
          </section>

          <footer class="research-links">
            <span>All original data sourced from ProQuest.</span>
          </footer>

        </article>
      </main>
    </div>
  `,
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

    .research-overview {
      width: 100%;
      padding: 5rem 2rem 7rem;
      box-sizing: border-box;
    }

    article {
      width: 100%;
      max-width: 1160px;
      margin: 0 auto;
    }

    /* Main page heading */

    .article-header {
      width: 100%;
      max-width: 1100px;
      margin: 0 auto;
      padding-bottom: 3rem;

      border-bottom: 1px solid #bfc0bb;
      box-sizing: border-box;
      text-align: left;
    }

    .series-title {
      margin: 0 0 1rem;

      color: #59636b;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-align: left;
      text-transform: uppercase;
    }

    .article-header h1 {
      max-width: none;
      margin: 0;

      font-family: Georgia, 'Times New Roman', serif;
      font-size: clamp(2.8rem, 5vw, 4rem);
      font-weight: 400;
      line-height: 1.05;
      letter-spacing: -0.035em;
      text-align: left;
    }

    .subtitle {
      max-width: 820px;
      margin: 1.5rem 0 0;

      color: #505050;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 1.35rem;
      line-height: 1.55;
      text-align: left;
    }

    /* Visualization sections */

    .article-section {
      padding: 5rem 0;
      border-bottom: 1px solid #cecec8;
    }

    .section-header {
      width: 100%;
      max-width: 1100px;
      margin: 0 auto 2.75rem;
    }

    .section-header h2 {
      max-width: 900px;
      margin: 0 auto;

      font-family: Georgia, 'Times New Roman', serif;
      font-size: clamp(2rem, 4vw, 3.15rem);
      font-weight: 400;
      line-height: 1.12;
      letter-spacing: -0.02em;
      text-align: center;
    }

    .section-header p {
      max-width: 760px;
      margin: 1rem auto 0;

      color: #61615e;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 1.08rem;
      line-height: 1.75;
      text-align: center;
    }

    /* Figures */

    .figure {
      width: 100%;
      max-width: 1100px;
      margin: 2.5rem auto 0;
    }

    .figure-wide {
      max-width: 1100px;
    }

    .figure-surface {
      width: 100%;
      padding: 2rem;

      background: #f3f3f3;
      border: 1px solid #d2d1ca;

      box-sizing: border-box;
    }

    .figure-image {
      display: block;
      width: 100%;
      height: auto;
      object-fit: contain;
    }

    figcaption {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 0.75rem 1.5rem;

      width: 100%;
      max-width: 1100px;
      margin: 1rem auto 0;

      color: #5d5d59;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 0.88rem;
      line-height: 1.55;
    }

    .caption-description {
      display: inline;
      max-width: 780px;
    }

    .figure-number {
      margin-right: 0.4rem;
      color: #292929;
      font-weight: 600;
    }

    .figure-credit {
      margin-left: auto;
      white-space: nowrap;

      color: #b5b5b5;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.72rem;
      letter-spacing: 0.03em;
    }

    /* Text below figures */

    .article-body {
      width: 100%;
      max-width: 1100px;
      margin: 2.5rem auto 0;
    }

    .article-body p {
      max-width: 760px;
      margin: 0;

      font-family: Georgia, 'Times New Roman', serif;
      font-size: 1.08rem;
      line-height: 1.8;
    }

    /* Links */

    a,
    .inline-link {
      color: #334f61;
      text-decoration-thickness: 1px;
      text-underline-offset: 0.2em;
    }

    .inline-link {
      display: inline;
      margin: 0;
      padding: 0;

      background: transparent;
      border: 0;
      font: inherit;
      cursor: pointer;
    }

    .inline-link:hover,
    .inline-link:focus-visible {
      color: #193a50;
      text-decoration-thickness: 2px;
    }

    /* Source note */

    .research-links {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;

      width: 100%;
      max-width: 1100px;
      margin: 2rem auto 0;

      color: #6c6c68;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.86rem;
    }

    @media (max-width: 760px) {
      .research-overview {
        padding: 3rem 1.25rem 5rem;
      }

      .article-header {
        padding-bottom: 2.5rem;
      }

      .article-header h1 {
        font-size: clamp(2.4rem, 11vw, 3.25rem);
      }

      .subtitle {
        font-size: 1.1rem;
      }

      .article-section {
        padding: 3.5rem 0;
      }

      .section-header {
        margin-bottom: 2rem;
      }

      .section-header h2 {
        font-size: clamp(2rem, 10vw, 2.75rem);
      }

      .figure {
        margin-top: 2rem;
      }

      .figure-surface {
        padding: 0.75rem;
      }

      figcaption {
        display: block;
      }

      .figure-credit {
        display: block;
        margin: 0.5rem 0 0;
        white-space: normal;
      }

      .article-body {
        margin-top: 2rem;
      }
    }
  `],
})
export class OverviewComponent {
  @Output() navigate = new EventEmitter<AppView>();

  goToTimeline(event: MouseEvent): void {
    event.preventDefault();
    this.navigate.emit('timeline');
  }
}