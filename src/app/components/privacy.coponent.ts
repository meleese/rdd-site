
import { Component } from '@angular/core';
export type AppView =
  | 'home'
  | 'datasets'
  | 'about'
  | 'timeline'
  | 'access'
  | 'privacy'
  | 'media';
@Component({
  selector: 'app-privacy',
  standalone: true,
  template: `
    <div class="privacy-page">
      <main class="privacy-content">
        <article>
          <header class="article-header">
            <p class="series-title">Refugee Discourse Database</p>
            <h1>Privacy & Data Protection</h1>
          </header>

          <div class="article-body">
            <p class="intro">
              The Refugee Discourse Database (RDD) collects and processes limited personal information to 
              provide and administer access to its research platform.
            </p>

            <section>
              <h2>Information We Collect & Use</h2>
              <p>
                When requesting access, researchers provide their name, email address, institutional affiliation, 
                and referral information. RDD uses this information to evaluate requests, manage researcher accounts, 
                and communicate with applicants.
              </p>
              <p>
                The platform may also process technical information necessary for authentication, security, and operation.
              </p>
            </section>

            <section>
              <h2>Data Processing & Security</h2>
              <p>
                RDD uses third-party services, including Cloudflare and Metabase, to operate and secure the platform. 
                These services may process limited personal and technical information.
              </p>
              <p>
                Personal information is processed on the applicable lawful bases identified by RDD and retained only for 
                the periods necessary for its stated purposes, in accordance with applicable law.
              </p>
            </section>

            <section>
              <h2>Cookies</h2>
              <p>
                RDD may use cookies or similar technologies necessary for authentication and security.
              </p>
            </section>

            <section>
              <h2>Data Retention</h2>
              <p>
                Personal information is retained only as necessary to
                evaluate research access requests, administer
                accounts, and maintain platform security, subject
                to applicable legal requirements.
              </p>
            </section>

            <section>
              <h2>Your Privacy Rights</h2>
              <p>
                Depending on applicable laws, individuals may have 
                rights to access, correct, delete, restrict, or object 
                to the processing of their personal information.
              </p>
            </section>

            <section>
              <h2>Contact</h2>
              <p>
                Privacy-related inquiries and requests may be directed to:
              </p>
              <p>
                <a href="mailto:info@refugeediscoursedatabase.org">
                  info@refugeediscoursedatabase.org
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      min-height: 100%;
      background: #ffffff;
      color: #252525;
    }

    .privacy-page {
      width: 100%;
      min-height: calc(100vh - 90px);
      background: #ffffff;
    }

    .privacy-content {
      width: 100%;
      padding: 5rem 2rem 7rem;
      box-sizing: border-box;
    }

    article {
      width: 100%;
      max-width: 1160px;
      margin: 0 auto;
    }

    .article-header {
      width: 100%;
      max-width: 1100px;
      margin: 0 auto;
      padding-bottom: 3rem;
      border-bottom: 1px solid #bfc0bb;
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

    .article-header h1 {
      margin: 0;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: clamp(2.8rem, 5vw, 4rem);
      font-weight: 400;
      line-height: 1.05;
      letter-spacing: -0.035em;
    }

    .article-body {
      width: 100%;
      max-width: 1100px;
      margin: 2.5rem auto 0;
    }

    .article-body > .intro,
    .article-body > section {
      max-width: 760px;
    }

    .intro {
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 1.2rem;
      line-height: 1.8;
      margin: 0 0 3rem;
    }

    section {
      padding: 1.75rem 0;
      border-top: 1px solid #dededb;
    }

    section h2 {
      margin: 0 0 1.25rem;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 1.65rem;
      font-weight: 400;
      letter-spacing: -0.02em;
    }

    section p {
      margin: 0 0 1rem;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 1.05rem;
      line-height: 1.8;
      color: #414141;
    }

    section p:last-child {
      margin-bottom: 0;
    }

    a {
      color: #334f61;
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    a:hover {
      color: #193a50;
    }

    @media (max-width: 760px) {
      .privacy-page {
        min-height: calc(100svh - 75px);
      }

      .privacy-content {
        padding: 3rem 1.25rem 5rem;
      }

      .article-header {
        padding-bottom: 2.5rem;
      }

      .article-header h1 {
        font-size: clamp(2.4rem, 11vw, 3.25rem);
      }
    }
  `]
})
export class PrivacyComponent {}
