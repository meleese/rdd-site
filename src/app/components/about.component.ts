import { Component, EventEmitter, Output } from '@angular/core';

export type AppView =
  | 'home'
  | 'datasets'
  | 'about'
  | 'timeline'
  | 'about';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `

<div class="about-page">
  <main class="research-about">
    <article>
      <header class="article-header">
        <p class="series-title">Refugee Discourse Database</p>
        <h1>About the Database</h1>
      </header>


<section class="article-body">
    <h2
    id="research-origins-heading"
    class="section-title">
  </h2>
  <div class="about-book-layout">

    <div class="about-description">
      <p>
        The Refugee Discourse Database formed out of research
        conducted for the book
        <i>Bad Refugees: Geopolitics, Stigma and Forced Migration</i>
        (Mandić, 2027).
      </p>

      <p>
        Available for Pre-Order:
        <a
          href="https://global.oup.com/academic/product/bad-refugees-9780197765982?q=mandic&lang=en&cc=us"
          target="_blank"
          rel="noopener noreferrer">
          Mandić, Danilo.
          <i>Bad Refugees: Geopolitics, Stigma, and Forced Migration.</i>
          Oxford University Press, 2027.
        </a>
      </p>
    </div>

    <a
      class="book-cover-link"
      href="https://global.oup.com/academic/product/bad-refugees-9780197765982?q=mandic&lang=en&cc=us"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View Bad Refugees at Oxford University Press">

      <img
        src="assets/about/bad-refugees.jpg"
        alt="Cover of Bad Refugees by Danilo Mandić"
        class="book-cover"
        loading="lazy"
      />
    </a>

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

.about-page {
  width: 100%;
  min-height: calc(100vh - 90px);
  background: #ffffff;
}

.research-about {
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

.about-book-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 210px;
  align-items: start;
  gap: 4rem;
}

.about-description {
  min-width: 0;
}

.book-cover-link {
  display: block;
  width: 100%;
  transition: transform 0.2s ease;
}

.book-cover-link:hover {
  transform: translateY(-4px);
}

.book-cover {
  display: block;
  width: 100%;
  height: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.10);
}

@media (max-width: 700px) {
  .about-book-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .book-cover-link {
    width: 180px;
    max-width: 100%;
  }
}


@media (max-width: 760px) {
  .about-page {
    min-height: calc(100svh - 75px);
  }

  .research-about {
    padding: 3rem 1.25rem 5rem;
  }

  .article-header {
    padding-bottom: 2.5rem;
  }

  .article-header h1 {
    font-size: clamp(2.4rem, 11vw, 3.25rem);
  }
}

  `],
})
export class AboutComponent {
  @Output() navigate = new EventEmitter<AppView>();

  goToTimeline(event: MouseEvent): void {
    event.preventDefault();
    this.navigate.emit('timeline');
  }
}