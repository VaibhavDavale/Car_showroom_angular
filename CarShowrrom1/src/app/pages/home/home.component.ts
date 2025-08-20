import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { CarGridComponent } from '../../components/car-grid/car-grid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, CarGridComponent],
  template: `
    <div class="home-page">
      <app-hero></app-hero>
      <app-car-grid></app-car-grid>
    </div>
  `,
  styles: [`
    .home-page {
      min-height: 100vh;
    }
  `]
})
export class HomeComponent {}
