import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text fade-in-up">
          <h1>Premium Car Collection</h1>
          <p>Discover luxury vehicles that define excellence and performance</p>
          <div class="hero-actions">
            <button class="btn btn-primary" routerLink="/cars">
              <i class="fas fa-car"></i>
              Browse Cars
            </button>
            <button class="btn btn-secondary">
              <i class="fas fa-calendar"></i>
              Schedule Test Drive
            </button>
          </div>
        </div>
        <div class="hero-image fade-in-up">
          <div class="car-showcase">
            <i class="fas fa-car-side"></i>
          </div>
        </div>
      </div>
      <div class="hero-stats">
        <div class="stat">
          <h3>500+</h3>
          <p>Premium Cars</p>
        </div>
        <div class="stat">
          <h3>50+</h3>
          <p>Luxury Brands</p>
        </div>
        <div class="stat">
          <h3>10K+</h3>
          <p>Happy Customers</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: 4rem 2rem;
      text-align: center;
      color: white;
      position: relative;
      overflow: hidden;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      margin-bottom: 4rem;
    }

    .hero-text h1 {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      background: linear-gradient(45deg, #fff, #4ecdc4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-text p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
      line-height: 1.6;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    .hero-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .car-showcase {
      width: 300px;
      height: 200px;
      background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid rgba(255,255,255,0.2);
    }

    .car-showcase i {
      font-size: 6rem;
      color: #4ecdc4;
      animation: float 3s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    .hero-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      max-width: 600px;
      margin: 0 auto;
    }

    .stat {
      text-align: center;
    }

    .stat h3 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #4ecdc4;
      margin-bottom: 0.5rem;
    }

    .stat p {
      opacity: 0.8;
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .hero-text h1 {
        font-size: 2.5rem;
      }

      .hero-actions {
        flex-direction: column;
        align-items: center;
      }

      .hero-stats {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }
  `]
})
export class HeroComponent {}
