import { Component, EventEmitter, Output, Input } from '@angular/core';

type AppView =
  | 'home'
  | 'datasets'
  | 'overview'
  | 'timeline';

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

    <button
      type="button"
      class="menu-toggle"
      aria-label="Toggle navigation menu"
      [attr.aria-expanded]="menuOpen"
      (click)="menuOpen = !menuOpen"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        @if (!menuOpen) {
          <path
            d="M4 7h16M4 12h16M4 17h16"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
          />
        } @else {
          <path
            d="M6 6l12 12M18 6L6 18"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
          />
        }
      </svg>
    </button>

    <div
      class="links"
      [class.mobile-open]="menuOpen"
    >
      <button
        [class.active]="currentView === 'home'"
        (click)="selectView('home')"
      >
        Home
      </button>

      <button
        [class.active]="currentView === 'datasets'"
        (click)="selectView('datasets')"
      >
        Data Summaries
      </button>

      <button
        [class.active]="currentView === 'overview'"
        (click)="selectView('overview')"
      >
        Visualizations
      </button>

      <button
        [class.active]="currentView === 'timeline'"
        (click)="selectView('timeline')"
      >
        Timeline
      </button>

      <button
        type="button"
        (click)="openLogin()"
      >
        Login
      </button>
    </div>
  </div>
</nav>
  `,
  styles: [`
:host {
  position: sticky;
  top: 0;
  z-index: 1000;
  display: block;
  width: 100%;
  flex-shrink: 0;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 3rem;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);
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

.mark span:nth-child(1) { height: 10px; }
.mark span:nth-child(2) { height: 18px; }
.mark span:nth-child(3) { height: 18px; }

.divider {
  width: 1px;
  height: 28px;
  background: rgba(0,0,0,0.15);
}

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
    border-bottom: 1px solid transparent;
    padding: 0 0 2px 0;

    font-size: 1rem;
    color: #666;

    cursor: pointer;
    transition:
      color 0.2s ease,
      border-color 0.2s ease;
  }

  .links button:hover,
  .links button.active {
    color: var(--primary);
    border-bottom-color: var(--primary);
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

  .menu-toggle {
  display: none;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 2.5rem;
  padding: 0;

  border: 1px solid #d8dee6;
  border-radius: 0.4rem;
  background: transparent;
  color: inherit;
  cursor: pointer;
}

.menu-toggle svg {
  width: 1.25rem;
  height: 1.25rem;
}

@media (max-width: 760px) {
  .nav-inner {
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }

  .logo {
    justify-self: start;
  }

  .menu-toggle {
    display: inline-flex;
    justify-self: center;

    margin: 0;
  }

  .links {
    display: none;

    position: absolute;
    z-index: 1000;
    top: calc(100% + 0.5rem);
    right: 0;

    width: min(15rem, calc(100vw - 2rem));
    padding: 0.5rem;

    flex-direction: column;
    align-items: stretch;
    gap: 0.15rem;

    border: 1px solid #d8dee6;
    border-radius: 0.55rem;
    background: #fff;
    box-shadow: 0 0.75rem 2rem rgb(15 23 42 / 14%);
  }

  .links.mobile-open {
    display: flex;
  }

  .links button {
    width: 100%;
    padding: 0.7rem 0.8rem;
    text-align: left;
  }
}
  `]
})
export class NavbarComponent {
  @Input() currentView!: 'home' | 'overview' | 'timeline' | 'about' | 'datasets';
  @Output() navigate = new EventEmitter<'home' | 'overview' | 'timeline' | 'about' | 'datasets'>();
  menuOpen = false;

  selectView(view: AppView): void {
    this.menuOpen = false;
    this.navigate.emit(view);
  }

  openLogin(): void {
    this.menuOpen = false;

    window.open(
      'https://research.refugeediscoursedatabase.org',
      '_blank',
      'noopener,noreferrer'
    );
  }
}