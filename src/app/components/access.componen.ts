
import {
  Component,
  AfterViewInit,
  OnDestroy,
  NgZone,
  ChangeDetectorRef,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs';

export type AppView =
  | 'home'
  | 'datasets'
  | 'about'
  | 'timeline'
  | 'access'
  | 'privacy';

type ReferralSource =
  | ''
  | 'Internet Search'
  | 'Flyer'
  | 'Academic Publication'
  | 'Conference or Presentation'
  | 'University or Course'
  | 'Colleague or Referral'
  | 'Social Media'
  | 'Other';

  declare global {
  interface Window {
    turnstile?: {
      render(
        container: string,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          'expired-callback': () => void;
          'error-callback': () => void;
        }
      ): string;

      remove(widgetId: string): void;
      reset(widgetId?: string): void;
    };
  }
}

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="access-page">
      <main class="research-access">
        <article>
          <header class="article-header">
            <p class="series-title">Refugee Discourse Database</p>
            <h1>Request Research Access</h1>
          </header>

          <section class="article-body">
            <div class="access-layout">

              <div class="access-intro">
                <h2>Explore the Database</h2>

                <p>
                  The Refugee Discourse Database is available only to approved researchers interested in historical
                  media coverage of refugees and forced migration. 
                </p>

                <p>
                  To request your account, please submit the form. 
                </p>

                <div class="access-note">
                  <p class="privacy-note">
                    Information submitted through this form is used to review access requests and administer researcher accounts. 
                    For more information, please see our
                    <a href="#" (click)="openPrivacy($event)">
                    Privacy policy.
                    </a>
                  </p>
                </div>
              </div>

              <div class="form-column">
                <h2>Access Request</h2>

                <form
                *ngIf="!submitted"
                #requestForm="ngForm"
                (ngSubmit)="submitRequest(requestForm)"
                novalidate
                >
                <div class="name-row">
                <div class="form-field">
                    <label for="firstName">First Name *</label>
                    <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    autocomplete="given-name"
                    [(ngModel)]="form.firstName"
                    placeholder="First name"
                    required
                    />
                </div>

                <div class="form-field">
                    <label for="lastName">Last Name *</label>
                    <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    autocomplete="family-name"
                    [(ngModel)]="form.lastName"
                    placeholder="Last name"
                    required
                    />
                </div>
                </div>

                  <div class="form-field">
                    <label for="email">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      [(ngModel)]="form.email"
                      required
                      email
                      maxlength="254"
                      autocomplete="email"
                      placeholder="name@university.edu"
                    />
                  </div>

                  <div class="form-field">
                    <label for="organization">
                      Organization / Affiliation *
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      [(ngModel)]="form.organization"
                      required
                      maxlength="200"
                      placeholder="University, company, or independent researcher"
                    />
                  </div>

                  <div class="form-field">
                    <label for="referralSource">
                      How did you hear about RDD? *
                    </label>
                    <select
                      id="referralSource"
                      name="referralSource"
                      [(ngModel)]="form.referralSource"
                      required
                    >
                      <option value="">Select an option</option>
                      <option *ngFor="let source of referralSources"
                              [value]="source">
                        {{ source }}
                      </option>
                    </select>
                  </div>

                  <div
                    class="form-field"
                    *ngIf="form.referralSource === 'Other'"
                  >
                    <label for="referralOther">
                      Please specify
                    </label>
                    <input
                      id="referralOther"
                      name="referralOther"
                      type="text"
                      [(ngModel)]="form.referralOther"
                      required=""
                      maxlength="200"
                      placeholder="How did you find us?"
                    />
                  </div>

                  <div class="turnstile-container">
                    <div id="access-turnstile"></div>
                  </div>

                  <p class="form-error" role="alert" *ngIf="errorMessage">
                    {{ errorMessage }}
                  </p>

                <button
                type="submit"
                class="submit-button"
                [disabled]="submitting"
                [class.form-incomplete]="requestForm.invalid || !turnstileToken"
                (click)="syncAutofill(); showValidationHint = true"
                >
                {{ submitting ? 'Submitting...' : 'Submit Access Request' }}
                <span aria-hidden="true">→</span>
                </button>

                <p
                class="validation-hint"
                *ngIf="showValidationHint && (requestForm.invalid || !turnstileToken)"
                role="status"
                >
                {{
                    requestForm.controls['email']?.hasError('email')
                    ? 'Please enter a valid email address.'
                    : requestForm.invalid
                        ? 'Please complete all required fields before submitting.'
                        : 'Please verify that you are human before submitting.'
                }}
                </p>
                </form>

                <div
                  class="success-message"
                  role="status"
                  *ngIf="submitted"
                >
                  <span class="success-symbol">✓</span>
                  <h3>Request Received</h3>
                  <p>
                    Thank you for your interest in the
                    Refugee Discourse Database.
                    Your request has been submitted.
                    We will contact you by email regarding access.
                  </p>
                </div>

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

    .access-page {
      width: 100%;
      min-height: calc(100vh - 90px);
      background: #ffffff;
    }

    .research-access {
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
    }

    .article-body {
      width: 100%;
      max-width: 1100px;
      margin: 2.5rem auto 0;
      text-align: left;
    }

    .access-layout {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 5rem;
      align-items: start;
    }

    .access-intro h2,
    .form-column h2 {
      margin: 0 0 1.5rem;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: clamp(1.7rem, 3vw, 2.2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.2;
    }

    .access-intro p {
      margin: 0 0 1.5rem;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 1.08rem;
      line-height: 1.8;
    }

    .access-note {
      margin-top: 3rem;
      padding: 1.5rem 0;
      border-top: 1px solid #bfc0bb;
    }

    .note-label {
      display: block;
      margin-bottom: 1rem;
      color: #59636b;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.14em;
    }

    .access-note p {
      font-size: 0.95rem;
      line-height: 1.7;
    }

    .form-description {
      margin: 0 0 2rem;
      color: #666;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.88rem;
    }

    .form-field {
      margin-bottom: 1.5rem;
    }

    .form-field label {
      display: block;
      margin-bottom: 0.6rem;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.83rem;
      font-weight: 600;
      color: #343434;
    }

    .form-field input,
    .form-field select {
      display: block;
      width: 100%;
      min-height: 48px;
      padding: 0.8rem 0.9rem;
      border: 1px solid #c9cdce;
      border-radius: 2px;
      background: #fff;
      color: #252525;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.92rem;
      box-sizing: border-box;
      transition: border-color 0.2s ease;
    }

    .form-field input:focus,
    .form-field select:focus {
      outline: 2px solid #334f6140;
      outline-offset: 1px;
      border-color: #334f61;
    }

    .form-field input::placeholder {
      color: #92989b;
    }

    .submit-button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-top: 2rem;
      padding: 1rem 1.25rem;
      border: 1px solid #334f61;
      background: #334f61;
      color: #fff;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.025em;
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .submit-button:hover:not(:disabled) {
      background: #193a50;
    }

    .submit-button:disabled {
      opacity: 0.55;
      cursor: not-allowed;
    }

    .privacy-note {
      margin-top: 1.25rem;
      color: #777;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.75rem;
      line-height: 1.6;
    }

    .privacy-note a {
    color: #334f61;
    text-decoration: underline;
    text-underline-offset: 3px;
    }

    .privacy-note a:hover {
    color: #193a50;
    }

    .form-error {
      color: #a12525;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.85rem;
    }

    .success-message {
      padding: 2rem 0;
      border-top: 1px solid #bfc0bb;
    }

    .success-symbol {
      color: #334f61;
      font-size: 2rem;
    }

    .success-message h3 {
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 1.7rem;
      font-weight: 400;
    }

    .success-message p {
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 1.05rem;
      line-height: 1.8;
    }

    .turnstile-container {
      margin: 1.5rem 0;
      min-height: 65px;
    }

    .name-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    }

    .name-row .form-field {
    min-width: 0;
    }

    @media (max-width: 600px) {
        .name-row {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 760px) {
      .access-page {
        min-height: calc(100svh - 75px);
      }

      .research-access {
        padding: 3rem 1.25rem 5rem;
      }

      .article-header {
        padding-bottom: 2.5rem;
      }

      .article-header h1 {
        font-size: clamp(2.4rem, 11vw, 3.25rem);
      }

      .access-layout {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }
    }
    .submit-button.form-incomplete {
  opacity: 0.55;
  cursor: not-allowed;
}

    .validation-hint {
    margin: 0.75rem 0 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    font-weight: 400;
    color: #b35353;
    line-height: 1.5;
    }
  `]
})
export class AccessComponent implements AfterViewInit, OnDestroy {
  form = {
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    referralSource: '' as ReferralSource,
    referralOther: ''
  };

  @Output() navigate = new EventEmitter<'privacy'>();

    openPrivacy(event: Event): void {
        event.preventDefault();
        this.navigate.emit('privacy');
        }

    @ViewChild('requestForm') requestForm?: NgForm;

    syncAutofill(): void {
    const fields = [
        'firstName',
        'lastName',
        'email',
        'organization'
    ] as const;

    for (const name of fields) {
        const input = document.getElementById(name) as HTMLInputElement | null;

        if (input && input.value !== this.form[name]) {
        this.form[name] = input.value;
        this.requestForm?.controls[name]?.setValue(input.value);
        }
    }
    }

  referralSources: Exclude<ReferralSource, ''>[] = [
    'Internet Search',
    'Flyer',
    'Academic Publication',
    'Conference or Presentation',
    'University or Course',
    'Colleague or Referral',
    'Social Media',
    'Other'
  ];

  submitting = false;
  submitted = false;
  showValidationHint = false;
  errorMessage = '';

constructor(
  private http: HttpClient,
  private ngZone: NgZone,
  private cdr: ChangeDetectorRef
) {}

  turnstileToken = '';
private turnstileWidgetId?: string;

ngAfterViewInit(): void {
  this.loadTurnstile();
}

ngOnDestroy(): void {
  if (this.turnstileWidgetId !== undefined) {
    window.turnstile?.remove(this.turnstileWidgetId);
  }
}

private loadTurnstile(): void {
  const renderWidget = () => {
    if (!window.turnstile) return;

    this.turnstileWidgetId = window.turnstile.render(
      '#access-turnstile',
      {
        sitekey: '0x4AAAAAAGCFlDIAznlXF7lZ',
        callback: (token: string) => {
        this.ngZone.run(() => {
            this.turnstileToken = token;
            this.showValidationHint = false;
            this.errorMessage = '';
            this.cdr.detectChanges();
        });
        },

        'expired-callback': () => {
        this.ngZone.run(() => {
            this.turnstileToken = '';
            this.showValidationHint = false;
            this.cdr.detectChanges();
        });
        },

        'error-callback': () => {
        this.ngZone.run(() => {
            this.turnstileToken = '';
            this.showValidationHint = false;
            this.cdr.detectChanges();
        });
        }
      }
    );
  };

  if (window.turnstile) {
    renderWidget();
    return;
  }

  const script = document.createElement('script');
  script.src =
    'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
  script.async = true;
  script.defer = true;
  script.onload = renderWidget;

  document.head.appendChild(script);
}

    submitRequest(form: { valid: boolean | null }): void {
    if (this.submitting) return;

    if (!form.valid || !this.turnstileToken) {
    this.showValidationHint = true;
    return;
    }

    this.showValidationHint = false;
    this.errorMessage = '';

    this.submitting = true;
    this.errorMessage = '';

    const payload = {
        ...this.form,
        turnstileToken: this.turnstileToken
    };

    this.http.post<{ success: boolean; message?: string }>(
        'https://rdd-access-request.meleese.workers.dev',
        payload
    ).pipe(
        finalize(() => {
        this.ngZone.run(() => {
            this.submitting = false;
            this.cdr.detectChanges();
        });
        })
    ).subscribe({
        next: (response) => {
        this.ngZone.run(() => {
            if (response.success) {
            this.submitted = true;
            this.errorMessage = '';
            } else {
            this.errorMessage = 'Unable to submit your request.';
            }

            this.cdr.detectChanges();
        });
        },

        error: (error) => {
        this.ngZone.run(() => {
            this.errorMessage =
            error.error?.error ||
            'Your request could not be submitted. Please try again.';

            this.turnstileToken = '';

            if (this.turnstileWidgetId !== undefined) {
            window.turnstile?.reset(this.turnstileWidgetId);
            }

            this.cdr.detectChanges();
        });
        }
    });
    }
}
