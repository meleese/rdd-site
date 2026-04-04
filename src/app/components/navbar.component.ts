import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="nav">
      <div class="nav-inner">
      <div class="logo">
        <div class="mark">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="divider"></div>
        <div class="text">
          <span>Refugee</span>
          <span>Discourse</span>
          <span>Database</span>
        </div>
      </div>

        <div class="links">
          <button 
            [class.active]="currentView === 'home'"
            (click)="navigate.emit('home')">
            Home
          </button>

          <button 
            [class.active]="currentView === 'about'"
            (click)="navigate.emit('about')">
            About
          </button>

          <button 
            [class.active]="currentView === 'datasets'"
            (click)="navigate.emit('datasets')">
            Data Summaries
          </button>

          <a href="https://research.refugeediscoursedatabase.org" target="_blank" rel="noopener">
            Login
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 3rem;
    width: 100%;
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(6px);
    border-bottom: 1px solid rgba(0,0,0,0.06);

    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.02);
  }
  .nav-inner {
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

.logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

/* GRAPH MARK */
.mark {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 16px;
}

.mark span {
  width: 3px;
  background: var(--primary);
  display: block;
}

/* “RDD” encoded as data bars */
.mark span:nth-child(1) { height: 10px; }   /* R (lower) */
.mark span:nth-child(2) { height: 18px; }  /* D */
.mark span:nth-child(3) { height: 18px; }  /* D */

/* divider */
.divider {
  width: 1px;
  height: 28px;
  background: rgba(0,0,0,0.15);
}

/* stacked text */
.text {
  display: flex;
  flex-direction: column;
  line-height: 1.05;

  font-family: Georgia, serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.4px;

  color: var(--primary);
}
  .links {
    display: flex;
    align-items: center;
    gap: 1.8rem;

    flex-wrap: wrap;
    justify-content: center;
  }

.links button {
  background: none;
  border: none;
  padding: 0;

  font-size: 1rem;
  color: #666;

  cursor: pointer;
  transition: color 0.2s ease;
}

.links button.active {
  color: var(--primary);
  border-bottom: 1px solid var(--primary);
  padding-bottom: 2px;
}

  .links button:hover {
    color: var(--primary);
  }

  .links a {
  text-decoration: none;

  transition: color 0.2s ease;
  background: none;
  border: none;
  padding: 0;

  font-size: 1rem;
  color: #666;

  cursor: pointer;
  transition: color 0.2s ease;
}
.links a:hover {
  color: var(--primary);
}

  .cta {
    border: 1px solid #111;
    padding: 0.3rem 0.9rem;
    border-radius: 4px;
  }

  .cta:hover {
    background: var(--primary-soft);
  }

  button {
    transition: background 0.2s ease, transform 0.05s ease;
  }

  button:active {
    transform: translateY(1px);
  }
  `]
})
export class NavbarComponent {
  @Input() currentView!: 'home' | 'about' | 'datasets';
  @Output() navigate = new EventEmitter<'home' | 'about' | 'datasets'>();
}