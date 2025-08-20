import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'cars', loadComponent: () => import('./pages/cars/cars.component').then(m => m.CarsComponent) },
  { path: 'car/:id', loadComponent: () => import('./pages/car-detail/car-detail.component').then(m => m.CarDetailComponent) },
  { path: '**', redirectTo: '/home' }
];
