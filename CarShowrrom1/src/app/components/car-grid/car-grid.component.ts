import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Car {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  year: number;
  fuel: string;
  transmission: string;
  featured: boolean;
}

@Component({
  selector: 'app-car-grid',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="car-grid-section">
      <div class="container">
        <div class="section-header text-center mb-4">
          <h2>Featured Vehicles</h2>
          <p>Explore our premium collection of luxury automobiles</p>
        </div>
        
        <div class="filters mb-4">
          <button 
            class="filter-btn" 
            [class.active]="selectedFilter === 'all'"
            (click)="filterCars('all')">
            All Cars
          </button>
          <button 
            class="filter-btn" 
            [class.active]="selectedFilter === 'luxury'"
            (click)="filterCars('luxury')">
            Luxury
          </button>
          <button 
            class="filter-btn" 
            [class.active]="selectedFilter === 'sports'"
            (click)="filterCars('sports')">
            Sports
          </button>
          <button 
            class="filter-btn" 
            [class.active]="selectedFilter === 'suv'"
            (click)="filterCars('suv')">
            SUV
          </button>
        </div>

        <div class="grid grid-3">
          <div 
            *ngFor="let car of filteredCars" 
            class="car-card card fade-in-up"
            [routerLink]="['/car', car.id]">
            <div class="car-image">
              <div class="car-placeholder">
                <i class="fas fa-car"></i>
              </div>
              <div class="car-badge" *ngIf="car.featured">
                <i class="fas fa-star"></i>
                Featured
              </div>
            </div>
            <div class="car-info">
              <h3>{{car.name}}</h3>
              <p class="car-brand">{{car.brand}}</p>
              <div class="car-specs">
                <span><i class="fas fa-calendar"></i> {{car.year}}</span>
                <span><i class="fas fa-gas-pump"></i> {{car.fuel}}</span>
                <span><i class="fas fa-cogs"></i> {{car.transmission}}</span>
              </div>
              <div class="car-price">
                <span class="price">\${{car.price | number}}</span>
                <button class="btn btn-primary">
                  <i class="fas fa-eye"></i>
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .car-grid-section {
      padding: 4rem 0;
      background: rgba(255, 255, 255, 0.05);
    }

    .section-header h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: white;
      margin-bottom: 1rem;
    }

    .section-header p {
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.8);
    }

    .filters {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: 10px 20px;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .filter-btn:hover,
    .filter-btn.active {
      background: #4ecdc4;
      border-color: #4ecdc4;
      transform: translateY(-2px);
    }

    .car-card {
      cursor: pointer;
      transition: all 0.3s ease;
      overflow: hidden;
    }

    .car-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 60px rgba(0,0,0,0.2);
    }

    .car-image {
      position: relative;
      height: 200px;
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
      font-size: 4rem;
      color: #6c757d;
    }

    .car-badge {
      position: absolute;
      top: 12px;
      right: 12px;
      background: linear-gradient(45deg, #ff6b6b, #ffa500);
      color: white;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .car-info h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #333;
    }

    .car-brand {
      color: #666;
      font-weight: 500;
      margin-bottom: 1rem;
    }

    .car-specs {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      color: #666;
    }

    .car-specs span {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .car-specs i {
      color: #4ecdc4;
    }

    .car-price {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .price {
      font-size: 1.5rem;
      font-weight: 700;
      color: #ff6b6b;
    }

    .car-price button {
      padding: 8px 16px;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .car-specs {
        flex-direction: column;
        gap: 0.5rem;
      }

      .car-price {
        flex-direction: column;
        gap: 1rem;
      }
    }
  `]
})
export class CarGridComponent implements OnInit {
  selectedFilter = 'all';
  
  cars: Car[] = [
    {
      id: 1,
      name: 'Model S Plaid',
      brand: 'Tesla',
      price: 129990,
      image: '',
      year: 2024,
      fuel: 'Electric',
      transmission: 'Auto',
      featured: true
    },
    {
      id: 2,
      name: 'AMG GT 63 S',
      brand: 'Mercedes-Benz',
      price: 159900,
      image: '',
      year: 2024,
      fuel: 'Petrol',
      transmission: 'Auto',
      featured: true
    },
    {
      id: 3,
      name: 'M8 Competition',
      brand: 'BMW',
      price: 142900,
      image: '',
      year: 2024,
      fuel: 'Petrol',
      transmission: 'Auto',
      featured: false
    },
    {
      id: 4,
      name: 'Cayenne Turbo',
      brand: 'Porsche',
      price: 134900,
      image: '',
      year: 2024,
      fuel: 'Petrol',
      transmission: 'Auto',
      featured: true
    },
    {
      id: 5,
      name: 'Range Rover Sport',
      brand: 'Land Rover',
      price: 89900,
      image: '',
      year: 2024,
      fuel: 'Hybrid',
      transmission: 'Auto',
      featured: false
    },
    {
      id: 6,
      name: 'Huracan EVO',
      brand: 'Lamborghini',
      price: 249900,
      image: '',
      year: 2024,
      fuel: 'Petrol',
      transmission: 'Auto',
      featured: true
    }
  ];

  filteredCars: Car[] = [];

  ngOnInit() {
    this.filteredCars = this.cars;
  }

  filterCars(filter: string) {
    this.selectedFilter = filter;
    
    switch(filter) {
      case 'luxury':
        this.filteredCars = this.cars.filter(car => 
          ['Mercedes-Benz', 'BMW', 'Porsche', 'Lamborghini'].includes(car.brand)
        );
        break;
      case 'sports':
        this.filteredCars = this.cars.filter(car => 
          ['Tesla', 'BMW', 'Lamborghini', 'Porsche'].includes(car.brand)
        );
        break;
      case 'suv':
        this.filteredCars = this.cars.filter(car => 
          car.name.toLowerCase().includes('cayenne') || 
          car.name.toLowerCase().includes('range rover')
        );
        break;
      default:
        this.filteredCars = this.cars;
    }
  }
}
