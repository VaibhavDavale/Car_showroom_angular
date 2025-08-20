import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

interface CarDetail {
  id: number;
  name: string;
  brand: string;
  price: number;
  year: number;
  fuel: string;
  transmission: string;
  mileage: string;
  color: string;
  engine: string;
  acceleration: string;
  topSpeed: string;
  features: string[];
  description: string;
}

@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="car-detail-page" *ngIf="car">
      <div class="detail-header">
        <div class="container">
          <button class="back-btn" routerLink="/cars">
            <i class="fas fa-arrow-left"></i>
            Back to Cars
          </button>
          <div class="car-title">
            <h1>{{car.name}}</h1>
            <span class="brand">{{car.brand}}</span>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="car-detail-content">
          <div class="car-gallery">
            <div class="main-image">
              <div class="car-placeholder">
                <i class="fas fa-car"></i>
              </div>
            </div>
            <div class="thumbnail-grid">
              <div class="thumbnail active">
                <i class="fas fa-car"></i>
              </div>
              <div class="thumbnail">
                <i class="fas fa-car-side"></i>
              </div>
              <div class="thumbnail">
                <i class="fas fa-car-rear"></i>
              </div>
            </div>
          </div>

          <div class="car-info">
            <div class="price-section">
              <div class="price">
                <span class="currency">$</span>
                <span class="amount">{{car.price | number}}</span>
              </div>
              <div class="actions">
                <button class="btn btn-primary">
                  <i class="fas fa-calendar"></i>
                  Schedule Test Drive
                </button>
                <button class="btn btn-secondary">
                  <i class="fas fa-heart"></i>
                  Save
                </button>
              </div>
            </div>

            <div class="specs-grid">
              <div class="spec-card">
                <i class="fas fa-calendar"></i>
                <div>
                  <h4>Year</h4>
                  <p>{{car.year}}</p>
                </div>
              </div>
              <div class="spec-card">
                <i class="fas fa-gas-pump"></i>
                <div>
                  <h4>Fuel Type</h4>
                  <p>{{car.fuel}}</p>
                </div>
              </div>
              <div class="spec-card">
                <i class="fas fa-cogs"></i>
                <div>
                  <h4>Transmission</h4>
                  <p>{{car.transmission}}</p>
                </div>
              </div>
              <div class="spec-card">
                <i class="fas fa-road"></i>
                <div>
                  <h4>Mileage</h4>
                  <p>{{car.mileage}}</p>
                </div>
              </div>
              <div class="spec-card">
                <i class="fas fa-engine"></i>
                <div>
                  <h4>Engine</h4>
                  <p>{{car.engine}}</p>
                </div>
              </div>
              <div class="spec-card">
                <i class="fas fa-tachometer-alt"></i>
                <div>
                  <h4>0-60 mph</h4>
                  <p>{{car.acceleration}}</p>
                </div>
              </div>
            </div>

            <div class="description-section">
              <h3>Description</h3>
              <p>{{car.description}}</p>
            </div>

            <div class="features-section">
              <h3>Key Features</h3>
              <div class="features-grid">
                <div *ngFor="let feature of car.features" class="feature-item">
                  <i class="fas fa-check"></i>
                  <span>{{feature}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .car-detail-page {
      min-height: 100vh;
      padding-bottom: 2rem;
    }

    .detail-header {
      background: linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6));
      padding: 2rem 0;
      color: white;
    }

    .back-btn {
      background: rgba(255,255,255,0.1);
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 25px;
      cursor: pointer;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.3s ease;
    }

    .back-btn:hover {
      background: rgba(255,255,255,0.2);
    }

    .car-title h1 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .brand {
      font-size: 1.2rem;
      color: #4ecdc4;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .car-detail-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      margin-top: 2rem;
    }

    .car-gallery {
      background: rgba(255,255,255,0.95);
      border-radius: 16px;
      padding: 2rem;
    }

    .main-image {
      height: 300px;
      background: linear-gradient(45deg, #f8f9fa, #e9ecef);
      border-radius: 12px;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .main-image .car-placeholder {
      font-size: 8rem;
      color: #6c757d;
    }

    .thumbnail-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }

    .thumbnail {
      height: 80px;
      background: #f8f9fa;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: 2px solid transparent;
      transition: all 0.3s ease;
    }

    .thumbnail:hover,
    .thumbnail.active {
      border-color: #4ecdc4;
    }

    .thumbnail i {
      font-size: 2rem;
      color: #6c757d;
    }

    .car-info {
      background: rgba(255,255,255,0.95);
      border-radius: 16px;
      padding: 2rem;
    }

    .price-section {
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid #eee;
    }

    .price {
      display: flex;
      align-items: baseline;
      gap: 4px;
      margin-bottom: 1rem;
    }

    .currency {
      font-size: 1.5rem;
      color: #ff6b6b;
      font-weight: 600;
    }

    .amount {
      font-size: 3rem;
      font-weight: 700;
      color: #ff6b6b;
    }

    .actions {
      display: flex;
      gap: 1rem;
    }

    .specs-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .spec-card {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 8px;
    }

    .spec-card i {
      font-size: 1.5rem;
      color: #4ecdc4;
    }

    .spec-card h4 {
      font-size: 0.9rem;
      color: #666;
      margin-bottom: 0.25rem;
    }

    .spec-card p {
      font-weight: 600;
      color: #333;
    }

    .description-section,
    .features-section {
      margin-bottom: 2rem;
    }

    .description-section h3,
    .features-section h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #333;
    }

    .description-section p {
      line-height: 1.6;
      color: #666;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem;
    }

    .feature-item {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #666;
    }

    .feature-item i {
      color: #4ecdc4;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .car-detail-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .specs-grid {
        grid-template-columns: 1fr;
      }

      .features-grid {
        grid-template-columns: 1fr;
      }

      .actions {
        flex-direction: column;
      }
    }
  `]
})
export class CarDetailComponent implements OnInit {
  car: CarDetail | null = null;

  private carData: CarDetail[] = [
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
      engine: 'Tri Motor',
      acceleration: '1.99s',
      topSpeed: '200 mph',
      features: [
        'Autopilot Included',
        'Premium Interior',
        'Glass Roof',
        'Supercharging',
        '17" Touchscreen',
        'Premium Audio'
      ],
      description: 'The Tesla Model S Plaid is the pinnacle of electric performance, delivering incredible acceleration and cutting-edge technology in a luxurious package.'
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
      engine: '4.0L V8 Biturbo',
      acceleration: '3.1s',
      topSpeed: '195 mph',
      features: [
        'AMG Performance',
        'Leather Interior',
        'Carbon Fiber Trim',
        'Sport Suspension',
        'Premium Sound',
        'Navigation System'
      ],
      description: 'The Mercedes-AMG GT 63 S combines race-bred performance with luxury comfort, featuring a handcrafted AMG engine and sophisticated design.'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.car = this.carData.find(car => car.id === id) || null;
  }
}
