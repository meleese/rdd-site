import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
  <div class="container">
<section class="hero-academic">
  <div class="hero-content">

    <h1>Refugee Discourse Database</h1>

    <p class="hero-p">
        <span><i class="fa-solid fa-hexagon-nodes"></i></span>

        A structured, research-focused collection of refugee-related media coverage since 1914.
    </p>

  </div>
</section>
  </div>
  `,
    styles: [`
    .container {
      max-width: 520px;
      text-align: center;
      justify-content: flex-start;
      color: #e8e6e3;
      padding: 20px 28px;
    }

.hero-subtitle {
  color: #c7d0d8;
  text-shadow: 0 1px 2px rgba(0,0,0,0.4);
}
  .hero-p {
  color: #b2b2b2;
  text-shadow: 0 1px 2px rgba(0,0,0,0.4);
}
  `]
})
export class HomeComponent {
  @Output() navigate = new EventEmitter<'access'>();

  goToAccess() {
    this.navigate.emit('access');
  }
}