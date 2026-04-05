import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { CommonModule } from '@angular/common';
import { DatasetsComponent } from './components/datasets.component';

type currentView = 'home' | 'about' | 'datasets';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    DatasetsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentView: currentView = 'home';
  animationState = '';

  setView(view: currentView) {
    this.currentView = view;

    this.animationState = '';
    setTimeout(() => this.animationState = 'active', 0);
  }
}