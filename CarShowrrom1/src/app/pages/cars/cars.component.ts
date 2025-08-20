import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Car {
  id: number;
  name: string;
  brand: string;
  price: number;
  year: number;
  fuel: string;
  transmission: string;
  mileage: string;
  color: string;
  featured: boolean;
}

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="cars-page">
      <div class="page-header">
        <div class="container">
          <h1>Our Car Collection</h1>
          <p>Browse through our extensive collection of premium vehicles</p>
        </div>
      </div>

      <div class="container">
        <div class="search-filters">
          <div class="search-bar">
            <i class="fas fa-search"></i>
            <input 
              type="text" 
              placeholder="Search cars..." 
              [(ngModel)]="searchTerm"
              (input)="filterCars()">
          </div>
          
          <div class="filter-options">
            <select [(ngModel)]="selectedBrand" (change)="filterCars()">
              <option value="">All Brands</option>
              <option *ngFor="let brand of brands" [value]="brand">{{brand}}</option>
            </select>
            
            <select [(ngModel)]="selectedPriceRange" (change)="filterCars()">
              <option value="">All Prices</option>
              <option value="0-100000">Under $100k</option>
              <option value="100000-200000">$100k - $200k</option>
              <option value="200000-999999">Above $200k</option>
            </select>
          </div>
        </div>

        <div class="cars-grid grid grid-3">
          <div 
            *ngFor="let car of filteredCars" 
            class="car-card card"
            [routerLink]="['/car', car.id]">
            <div class="car-image">
              <div class="car-placeholder">
                <i class="fas fa-car"></i>
              </div>
              <div class="car-overlay">
                <button class="btn btn-primary">View Details</button>
              </div>
              <div class="car-badge" *ngIf="car.featured">
                <i class="fas fa-crown"></i>
                Premium
              </div>
            </div>
            
            <div class="car-details">
              <div class="car-header">
                <h3>{{car.name}}</h3>
                <span class="car-brand">{{car.brand}}</span>
              </div>
              
              <div class="car-specs">
                <div class="spec">
                  <i class="fas fa-calendar"></i>
                  <span>{{car.year}}</span>
                </div>
                <div class="spec">
                  <i class="fas fa-gas-pump"></i>
                  <span>{{car.fuel}}</span>
                </div>
                <div class="spec">
                  <i class="fas fa-cogs"></i>
                  <span>{{car.transmission}}</span>
                </div>
                <div class="spec">
                  <i class="fas fa-road"></i>
                  <span>{{car.mileage}}</span>
                </div>
              </div>
              
              <div class="car-footer">
                <div class="price">
                  <span class="currency">$</span>
                  <span class="amount">{{car.price | number}}</span>
                </div>
                <div class="car-color">
                  <div class="color-dot" [style.background-color]="car.color"></div>
                  <span>{{car.color}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div *ngIf="filteredCars.length === 0" class="no-results">
          <i class="fas fa-search"></i>
          <h3>No cars found</h3>
          <p>Try adjusting your search criteria</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .cars-page {
      min-height: 100vh;
      padding-bottom: 2rem;
    }

    .page-header {
      background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5));
      padding: 4rem 0;
      text-align: center;
      color: white;
    }

    .page-header h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .page-header p {
      font-size: 1.2rem;
      opacity: 0.9;
    }

    .search-filters {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 2rem;
      margin: 2rem 0;
      display: flex;
      gap: 2rem;
      align-items: center;
      flex-wrap: wrap;
    }

    .search-bar {
      flex: 1;
      position: relative;
      min-width: 300px;
    }

    .search-bar i {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      color: #666;
    }

    .search-bar input {
      width: 100%;
      padding: 12px 16px 12px 48px;
      border: 2px solid rgba(255,255,255,0.2);
      border-radius: 25px;
      background: rgba(255,255,255,0.9);
      font-size: 1rem;
      outline: none;
      transition: all 0.3s ease;
    }

    .search-bar input:focus {
      border-color: #4ecdc4;
      box-shadow: 0 0 0 3px rgba(78, 205, 196, 0.1);
    }

    .filter-options {
      display: flex;
      gap: 1rem;
    }

    .filter-options select {
      padding: 12px 16px;
      border: 2px solid rgba(255,255,255,0.2);
      border-radius: 8px;
      background: rgba(255,255,255,0.9);
      font-size: 1rem;
      outline: none;
      cursor: pointer;
    }

    .cars-grid {
      margin-top: 2rem;
    }

    .car-card {
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }

    .car-image {
      position: relative;
      height: 220px;
      background: linear-gradient(45deg, #f8f9fa, #e9ecef);
      border-radius: 12px;
      margin-bottom: 1rem;
      overflow: hidden;
    }

    .car-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      font-size: 5rem;
      color: #6c757d;
    }

    .car-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .car-card:hover .car-overlay {
      opacity: 1;
    }

    .car-badge {
      position: absolute;
      top: 12px;
      right: 12px;
      background: linear-gradient(45deg, #ffd700, #ffed4e);
      color: #333;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .car-header {
      margin-bottom: 1rem;
    }

    .car-header h3 {
      font-size: 1.4rem;
      font-weight: 600;
      color: #333;
      margin-bottom: 0.25rem;
    }

    .car-brand {
      color: #666;
      font-weight: 500;
      text-transform: uppercase;
      font-size: 0.9rem;
      letter-spacing: 1px;
    }

    .car-specs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
    }

    .spec {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.9rem;
      color: #666;
    }

    .spec i {
      color: #4ecdc4;
      width: 16px;
    }

    .car-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .price {
      display: flex;
      align-items: baseline;
      gap: 2px;
    }

    .currency {
      font-size: 1.2rem;
      color: #ff6b6b;
      font-weight: 600;
    }

    .amount {
      font-size: 1.8rem;
      font-weight: 700;
      color: #ff6b6b;
    }

    .car-color {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.9rem;
      color: #666;
    }

    .color-dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 2px solid #ddd;
    }

    .no-results {
      text-align: center;
      padding: 4rem 2rem;
      color: white;
    }

    .no-results i {
      font-size: 4rem;
      margin-bottom: 1rem;
      opacity: 0.5;
    }

    .no-results h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    @media (max-width: 768px) {
      .search-filters {
        flex-direction: column;
        align-items: stretch;
      }

      .search-bar {
        min-width: auto;
      }

      .filter-options {
        justify-content: center;
      }

      .car-specs {
        grid-template-columns: 1fr;
      }

      .car-footer {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
      }
    }
  `]
})
export class CarsComponent implements OnInit {
  searchTerm = '';
  selectedBrand = '';
  selectedPriceRange = '';
  
  brands = ['Tesla', 'Mercedes-Benz', 'BMW', 'Porsche', 'Land Rover', 'Lamborghini', 'Audi', 'Ferrari'];
  
  cars: Car[] = [
    {
      id: 1,
      name: 'Model S Plaid',
      brand: 'Tesla',
      price: 129990,
      year: 2024,
      fuel: 'Electric',
      transmission: 'Auto',
      mileage: '405 mi range',
      color: '#1a1a1a',
      featured: true
    },
    {
      id: 2,
      name: 'AMG GT 63 S',
      brand: 'Mercedes-Benz',
      price: 159900,
      year: 2024,
      fuel: 'Petrol',
      transmission: 'Auto',
      mileage: '18 mpg',
      color: '#c0392b',
      featured: true
    },
    {
      id: 3,
      name: 'M8 Competition',
      brand: 'BMW',
      price: 142900,
      year: 2024,
      fuel: 'Petrol',
      transmission: 'Auto',
      mileage: '16 mpg',
      color: '#2980b9',
      featured: false
    },
    {
      id: 4,
      name: 'Cayenne Turbo',
      brand: 'Porsche',
      price: 134900,
      year: 2024,
      fuel: 'Petrol',
      transmission: 'Auto',
      mileage: '19 mpg',
      color: '#34495e',
      featured: true
    },
    {
      id: 5,
      name: 'Range Rover Sport',
      brand: 'Land Rover',
      price: 89900,
      year: 2024,
      fuel: 'Hybrid',
      transmission: 'Auto',
      mileage: '25 mpg',
      color: '#27ae60',
      featured: false
    },
    {
      id: 6,
      name: 'Huracan EVO',
      brand: 'Lamborghini',
      price: 249900,
      year: 2024,
      fuel: 'Petrol',
      transmission: 'Auto',
      mileage: '14 mpg',
      color: '#f39c12',
      featured: true
    },
    {
      id: 7,
      name: 'A8 L',
      brand: 'Audi',
      price: 95900,
      year: 2024,
      fuel: 'Hybrid',
      transmission: 'Auto',
      mileage: '28 mpg',
      color: '#8e44ad',
      featured: false
    },
    {
      id: 8,
      name: 'F8 Tributo',
      brand: 'Ferrari',
      price: 329900,
      year: 2024,
      fuel: 'Petrol',
      transmission: 'Auto',
      mileage: '12 mpg',
      color: '#e74c3c',
      featured: true
    }
  ];

  filteredCars: Car[] = [];

  ngOnInit() {
    this.filteredCars = this.cars;
  }

  filterCars() {
    this.filteredCars = this.cars.filter(car => {
      const matchesSearch = car.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           car.brand.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesBrand = !this.selectedBrand || car.brand === this.selectedBrand;
      
      let matchesPrice = true;
      if (this.selectedPriceRange) {
        const [min, max] = this.selectedPriceRange.split('-').map(Number);
        matchesPrice = car.price >= min && car.price <= max;
      }
      
      return matchesSearch && matchesBrand && matchesPrice;
    });
  }
}
