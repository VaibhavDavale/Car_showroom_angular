import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header">
      <nav class="navbar">
        <div class="nav-brand">
          <i class="fas fa-car"></i>
          <span>Elite Cars</span>
        </div>
        <ul class="nav-menu">
          <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
          <li><a routerLink="/cars" routerLinkActive="active">Cars</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="nav-actions">
          <button class="btn btn-secondary">
            <i class="fas fa-phone"></i>
            Call Now
          </button>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .nav-brand {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 1.5rem;
      font-weight: 700;
      color: white;
    }

    .nav-brand i {
      font-size: 2rem;
      color: #ff6b6b;
    }

    .nav-menu {
      display: flex;
      list-style: none;
      gap: 2rem;
    }

    .nav-menu a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      position: relative;
    }

    .nav-menu a:hover,
    .nav-menu a.active {
      color: #4ecdc4;
    }

    .nav-menu a::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: #4ecdc4;
      transition: width 0.3s ease;
    }

    .nav-menu a:hover::after,
    .nav-menu a.active::after {
      width: 100%;
    }

    .nav-actions button {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    @media (max-width: 768px) {
      .navbar {
        padding: 1rem;
      }
      
      .nav-menu {
        display: none;
      }
    }
  `]
})
export class HeaderComponent {}
