import { Component } from '@angular/core';

@Component({
  selector: 'app-citation-popout',
  standalone: true,
  template: `
    <div class="citation-popout">
      <button
        type="button"
        class="citation-trigger"
        aria-label="Show citation"
        aria-haspopup="dialog"
        [attr.aria-expanded]="isOpen"
        (click)="toggle()"
      >
        <span aria-hidden="true">ⓘ</span>
        <span>Cite</span>
      </button>

      @if (isOpen) {
        <div
          class="citation-panel"
          role="dialog"
          aria-label="Citation"
        >
          <button
            type="button"
            class="close-button"
            aria-label="Close citation"
            (click)="close()"
          >
            ×
          </button>

          <div class="citation-heading">For Citation</div>

        <p>{{ citation }}</p>

        <div class="citation-actions">
        <button
            type="button"
            class="copy-button"
            (click)="copyCitation()"
            aria-label="Copy citation"
        >
            <svg
            class="copy-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            >
            <path
                fill="currentColor"
                d="M16 1H6a2 2 0 0 0-2 2v12h2V3h10V1zm3 4H10a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H10V7h9v14z"
            />
            </svg>

            <span>{{ copied ? 'Copied' : 'Copy' }}</span>
        </button>
      </div>

      </div>
      }
    </div>
  `,
styles: [`
:host {
  display: block;
  width: 100%;
  text-align: right;
}

.citation-popout {
    position: relative;
    display: inline-flex;
}

  .citation-trigger {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.2rem 0.45rem;
    border: 1px solid #d8dee6;
    border-radius: 999px;
    background: #f8fafc;
    color: #526276;
    font: inherit;
    font-size: 0.72rem;
    line-height: 1;
    cursor: pointer;
  }

  .citation-trigger:hover,
  .citation-trigger:focus-visible {
    background: #eef3f7;
    color: #243b53;
  }

  .citation-panel {
    position: absolute;
    z-index: 1000;
    top: calc(100% + 0.5rem);
    left: 0;
    width: 17rem;
    max-width: min(17rem, calc(100vw - 2rem));
    padding: 0.9rem;
    border: 1px solid #d8dee6;
    border-radius: 0.6rem;
    background: #fff;
    color: #243b53;
    box-shadow: 0 0.6rem 1.6rem rgb(15 23 42 / 14%);
  }

  .citation-panel::before {
    content: '';
    position: absolute;
    top: -0.35rem;
    left: 1rem;
    width: 0.65rem;
    height: 0.65rem;
    border-top: 1px solid #d8dee6;
    border-left: 1px solid #d8dee6;
    background: #fff;
    transform: rotate(45deg);
  }

  .citation-heading {
    margin-bottom: 0.5rem;
    padding-right: 1.5rem;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-align: left;
  }

  .citation-panel p {
    margin: 0 0 0.75rem;
    font-size: 0.82rem;
    line-height: 1.5;
    overflow-wrap: anywhere;
    text-align: left;
  }

  .citation-panel a {
    color: inherit;
    text-decoration: underline;
    text-underline-offset: 0.15em;
  }

  .citation-actions {
    display: flex;
    justify-content: center !important;
    width: 100%;
}

.copy-button {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0;

  padding: 0.38rem 0.65rem;
  border: 1px solid #b7c3d0;
  border-radius: 0.35rem;

  background: #f7f9fb;
  color: #243b53;

  font: inherit;
  font-size: 0.75rem;
  cursor: pointer;
}

.copy-icon {
  width: 0.85rem;
  height: 0.85rem;
  flex-shrink: 0;
}
  .copy-button:hover,
  .copy-button:focus-visible {
    background: #edf2f7;
  }

  .copied-message {
    font-size: 0.72rem;
    color: #526276;
  }

  .close-button {
    position: absolute;
    top: 0.5rem;
    right: 0.6rem;
    padding: 0;
    border: 0;
    background: transparent;
    color: #68788a;
    font-size: 1rem;
    line-height: 1;
    cursor: pointer;
  }

  @media (max-width: 640px) {
    .citation-panel {
      position: fixed;
      top: auto;
      right: 1rem;
      bottom: 1rem;
      left: 1rem;
      width: auto;
      max-width: none;
    }

    .citation-panel::before {
      display: none;
    }
  }
`]
})
export class CitationPopoutComponent {
  isOpen = false;
  copied = false;

  readonly citation =
    'Refugee Discourse Database. https://refugeediscoursedatabase.com';

  toggle(): void {
    this.isOpen = !this.isOpen;
    this.copied = false;
  }

  close(): void {
    this.isOpen = false;
  }

  async copyCitation(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.citation);
      this.showCopiedState();
    } catch {
      this.copyWithFallback();
    }
  }

  private copyWithFallback(): void {
    const textarea = document.createElement('textarea');

    textarea.value = this.citation;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';

    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    this.showCopiedState();
  }

  private showCopiedState(): void {
    this.copied = true;

    window.setTimeout(() => {
      this.copied = false;
    }, 2000);
  }
}