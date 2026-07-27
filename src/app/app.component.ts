import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { CommonModule } from '@angular/common';

type currentView = 'home' | 'timeline' | 'overview' | 'about' | 'datasets';
type AppView =
  | 'home'
  | 'datasets'
  | 'overview'
  | 'timeline'
  | 'about';

 type HomeSection = 'home' | 'datasets' | 'overview' | 'timeline';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  CommonModule,
  NavbarComponent,
  HomeComponent,
  AboutComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentView: currentView = 'home';
  animationState = '';

setView(view: AppView): void {
if (view === 'home') {

  if (this.currentView !== 'home') {
    this.currentView = 'home';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById('home')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });

    return;
  }

  document.getElementById('home')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });

  return;
}

  if (
    view === 'datasets' ||
    view === 'overview' ||
    view === 'timeline'
  ) {
    if (this.currentView !== 'home') {
      this.currentView = 'home';

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.scrollToSection(view);
        });
      });

      return;
    }

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