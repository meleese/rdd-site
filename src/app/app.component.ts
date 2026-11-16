import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar.component';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { AccessComponent } from './components/access.componen';
import { PrivacyComponent } from './components/privacy.coponent';

export type AppView =
  | 'home'
  | 'datasets'
  | 'overview'
  | 'timeline'
  | 'about'
  | 'access'
  | 'privacy';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  CommonModule,
  NavbarComponent,
  HomeComponent,
  AboutComponent,
  AccessComponent,
  PrivacyComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentView: AppView = 'home';
  animationState = '';

setActiveView(view: AppView): void {
  this.currentView = view;
}

setView(view: AppView): void {
  if (view === 'home') {
    const comingFromAbout = this.currentView === 'about' || this.currentView === 'access' || this.currentView === 'privacy';

    this.currentView = 'home';

    if (comingFromAbout) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.scrollToHome();
        });
      });

      return;
    }

    this.scrollToHome();
    return;
  }

  if (
    view === 'datasets' ||
    view === 'overview' ||
    view === 'timeline'
  ) {
    const comingFromAbout = this.currentView === 'about' || this.currentView === 'access' || this.currentView === 'privacy';

    if (comingFromAbout) {
      this.currentView = 'home';

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.currentView = view;
          this.scrollToSection(view);
        });
      });

      return;
    }

    this.currentView = view;
    this.scrollToSection(view);
    return;
  }

  this.currentView = view;

  requestAnimationFrame(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

private scrollToHome(): void {
  document
    .getElementById('home')
    ?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
}

private scrollToSection(
  sectionId: 'datasets' | 'overview' | 'timeline'
): void {
  document
    .getElementById(sectionId)
    ?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
}
}