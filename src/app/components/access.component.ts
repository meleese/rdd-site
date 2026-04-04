import { Component } from '@angular/core';

@Component({
  selector: 'app-access',
  standalone: true,
  template: `
<div class="access-container">
  <div class="access-card">
    
    <p class="eyebrow">Data Access</p>

    <h1>Explore the Dataset</h1>

    <p class="description">
      Access the Refugee Discourse Database through our analytics platform.
      Search, filter, and analyze coverage across time, geography, and media sources.
    </p>

    <button (click)="openMetabase()">
      Launch Platform
    </button>
    

    <div class="meta">
      <div>
        <strong>6M+</strong>
        <span>Articles Indexed</span>
      </div>
      <div>
        <strong>1914–2024</strong>
        <span>Coverage Range</span>
      </div>
      <div>
        <strong>Global</strong>
        <span>Sources</span>
      </div>
    </div>

  </div>
</div>
  `,
  styles: [`
    button {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      background: #1976d2;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .container {
      max-width: 720px;
      text-align: center;
    }
    .access-container {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .access-card {
      background: rgba(255,255,255,0.4);
      backdrop-filter: blur(6px);

      padding: 3rem 2.5rem;
      border-radius: 8px;

      max-width: 700px;
      text-align: center;

      box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    }
    .eyebrow {
      font-size: 0.7rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--primary);
      margin-bottom: 0.75rem;
    }
      .eyebrow {
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--primary);
  margin-bottom: 0.75rem;
}
  button {
  padding: 0.75rem 1.8rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 4px;

  font-size: 0.9rem;
  cursor: pointer;
}
  button {
  padding: 0.75rem 1.8rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 4px;

  font-size: 0.9rem;
  cursor: pointer;
}
  `] 
})
export class AccessComponent {
  openMetabase() {
    window.open('https://your-metabase-url', '_blank');
  }
}