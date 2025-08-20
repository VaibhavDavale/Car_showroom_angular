import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3><i class="fas fa-car"></i> Elite Cars</h3>
            <p>Your premier destination for luxury and performance vehicles.</p>
            <div class="social-links">
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#cars">Our Cars</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Contact Info</h4>
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>123 Luxury Ave, Car City, CC 12345</span>
            </div>
            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <span>+1 (555) 123-4567</span>
            </div>
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <span>info@elitecars.com</span>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2024 Elite Cars. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 3rem 0 1rem;
      margin-top: auto;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-section h3 {
      color: #4ecdc4;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .footer-section h4 {
      color: #4ecdc4;
      margin-bottom: 1rem;
    }

    .footer-section p {
      line-height: 1.6;
      opacity: 0.8;
      margin-bottom: 1rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-links a {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-links a:hover {
      background: #4ecdc4;
      transform: translateY(-2px);
    }

    .footer-section ul {
      list-style: none;
    }

    .footer-section ul li {
      margin-bottom: 0.5rem;
    }

    .footer-section ul li a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-section ul li a:hover {
      color: #4ecdc4;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 1rem;
      color: rgba(255, 255, 255, 0.8);
    }

    .contact-item i {
      color: #4ecdc4;
      width: 16px;
    }

    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      opacity: 0.6;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {}
