import { Component, EventEmitter, Output } from '@angular/core';

export type AppView =
  | 'home'
  | 'datasets'
  | 'about'
  | 'timeline'
  | 'access'
  | 'privacy'
  | 'media';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [],
  template: `


<div class="media-page">
  <main class="research-media">
    <article>
      <header class="article-header">
        <p class="series-title">Refugee Discourse Database</p>
        <h1>Media & Outreach</h1>
      </header>

      <section class="article-body">
        <div class="media-profile-layout">

          <div class="media-description">
            <h2>Emina Dedić-Pađen</h2>

            <p class="profile-role">
            Publicist & Outreach Coordinator
            </p>

            <div class="profile-accent"></div>

            <p>
              Emina Dedić-Pađen is an English scholar and college faculty member with a robust portfolio 
              in higher education leadership and advocacy. A Harvard graduate and former student association 
              president, she combines exceptional communication expertise with a lifelong commitment to 
              educational advancement. In her role as Publicist and Outreach Coordinator, she connects media 
              networks and diverse audiences to essential academic and cultural projects.
            </p>

          </div>

          <div class="profile-photo">
            <img
              src="assets/media/emina.jpg"
              alt="Portrait of Emina Dedić-Pađen"
              loading="lazy"
            />
          </div>

        </div>

        <div class="media-contact">
          <div>
            <p class="contact-label">CONTACT</p>
            <a href="mailto:contact@badrefugeesbooktour.com">
              contact@badrefugeesbooktour.com
            </a>
          </div>
        </div>

      </section>
    </article>
  </main>
</div>

  `,
  styles: [`

:host {
  display: block;
  width: 100%;
  min-width: 0;
  min-height: 100%;
  background: #ffffff;
  color: #252525;
}

.media-page {
  width: 100%;
  min-height: calc(100vh - 90px);
  background: #ffffff;
}

.research-media {
  width: 100%;
  padding: 4rem 2rem 5rem;
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
  text-align: left;
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
  text-align: left;
}

.article-body {
  width: 100%;
  max-width: 1100px;
  margin: 2.5rem auto 0;
  text-align: left;
}

.article-body p {
  max-width: 820px;
  margin: 0 0 1.5rem;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.08rem;
  line-height: 1.8;
}

.article-body a {
  color: #334f61;
  font-weight: 600;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.2em;
}

.article-body a:hover {
  color: #193a50;
}


.section-title {
  margin: 0 0 2rem;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(1.7rem, 3vw, 2.2rem);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #252525;
  text-align: left;
}

.media-description {
  min-width: 0;
}


@media (max-width: 760px) {
  .media-page {
    min-height: calc(100svh - 75px);
  }

  .research-media {
    padding: 3rem 1rem 5rem;
  }

  .article-header {
    padding-bottom: 2.5rem;
  }

  .article-header h1 {
    font-size: clamp(2.4rem, 11vw, 3.25rem);
  }
}

.page-subtitle {
  margin: 1.5rem 0 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.15rem;
  line-height: 1.6;
  color: #59636b;
}

.media-profile-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 240px;
  align-items: start;
  gap: 4rem;
}

.media-description {
  min-width: 0;
}

.profile-label,
.contact-label {
  font-family: Arial, Helvetica, sans-serif !important;
  font-size: 0.72rem !important;
  font-weight: 600;
  letter-spacing: 0.13em;
  color: #59636b;
}

.media-description h2 {
  margin: 0 0 1.25rem;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(1.8rem, 3vw, 2.3rem);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.025em;
}

.profile-accent {
  width: 42px;
  height: 2px;
  margin: 0 0 1.75rem;
  background: #334f61;
}

.profile-photo {
  width: 100%;
}

.profile-photo img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 2px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.10);
}

.media-contact {
  margin-top: 0.5rem;
  padding: 1.5rem 0;
  border-top: 1px solid #dededb;
}

.media-contact .contact-label {
  margin: 0 0 0.6rem;
}

.media-contact a {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.05rem;
  font-weight: 400;
  color: #334f61;
  overflow-wrap: anywhere;
}

@media (max-width: 700px) {
  .media-profile-layout {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
    width: 100%;
  }

  .profile-photo {
    order: -1;
    width: 100%;
    max-width: 200px;
    align-self: center;
  }

  .media-description {
    width: 100%;
    min-width: 0;
  }

  .media-contact {
    margin-top: 2rem;
  }
}

.media-description .profile-role {
  margin: -0.5rem 0 1.5rem;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.05rem;
  font-style: italic;
  color: #59636b;
}

@media (max-width: 760px) {
    article,
    .article-header,
    .article-body {
        width: 100%;
        max-width: 100%;
        min-width: 0;
        box-sizing: border-box;
    }
}

  `],
})
export class MediaComponent {
  @Output() navigate = new EventEmitter<AppView>();

  goToTimeline(event: MouseEvent): void {
    event.preventDefault();
    this.navigate.emit('timeline');
  }
}