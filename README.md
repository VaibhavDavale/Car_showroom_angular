# Car Showroom Application
🧑‍💻 Group member Made with 💡 by
1.Vaibhav Davale
2.Ajay Mali
📧 davlevaibhav0@gmail.com 📧 
ajaymali0885@gmail.com 
📍 India add this redmi file
A full-stack car showroom management system built with Spring Boot backend, Angular frontend, and Rust API integration.

## 🚗 Overview

This application provides a comprehensive car showroom management system with admin capabilities for managing cars, bookings, and generating reports. The system features a modern web interface built with Angular and a robust backend powered by Spring Boot with seamless integration to external Rust-based services.

## 🏗️ Architecture

- **Backend**: Spring Boot 3.5.4 with Java 21
- **Frontend**: Angular 17 with TypeScript
- **Database**: PostgreSQL with JPA/Hibernate ORM
- **External API**: Rust-based API service (running on port 8080)
- **Development Server**: Express.js for serving static files
- **Build Tools**: Maven for backend, npm for frontend

## 📋 Features

### 🔧 Admin Management Features
- **Car Inventory Management**
  - View complete car catalog with detailed specifications
  - Real-time inventory tracking
  - Car availability status monitoring
  - Integration with external Rust API for car data synchronization

- **Booking Management System**
  - Comprehensive booking overview dashboard
  - Booking status management (pending, confirmed, completed, cancelled)
  - Customer booking history tracking
  - Real-time booking updates through API integration
  - Booking modification and cancellation capabilities

- **Administrative Reporting**
  - Custom report generation with multiple report types
  - Content-rich reports with detailed analytics
  - Report history and archiving system
  - User-specific report generation tracking
  - Export capabilities for generated reports

### 🖥️ Technical Features
- **RESTful API Architecture**
  - Clean REST endpoints following industry standards
  - JSON-based data exchange
  - Proper HTTP status code implementation
  - API versioning support

- **Cross-Platform Integration**
  - CORS enabled for cross-origin requests
  - Seamless frontend-backend communication
  - External Rust API service integration
  - Real-time data synchronization

- **Database Operations**
  - JPA/Hibernate for robust data persistence
  - PostgreSQL for reliable data storage
  - Entity relationship management
  - Transaction management and data integrity

- **Modern Frontend Experience**
  - Responsive Angular 17 application
  - Component-based architecture
  - Routing and navigation system
  - Modern UI/UX design patterns

- **Development Environment**
  - Hot reload for rapid development
  - Development and production build configurations
  - Automated testing capabilities
  - Code quality and linting tools

### 🔐 Security & Performance Features
- **Data Validation**
  - Input validation on both frontend and backend
  - Data sanitization and security measures
  - Error handling and user feedback

- **Performance Optimization**
  - Efficient database queries
  - Caching mechanisms
  - Optimized API calls
  - Lazy loading for improved performance

## 🛠️ Prerequisites

- **Java Development Kit 21** or higher
- **Node.js** (version 18 or higher) for Angular frontend
- **PostgreSQL Database** (version 12 or higher)
- **Maven** for Java dependency management
- **Rust API Service** running on port 8080
- **Modern Web Browser** (Chrome, Firefox, Safari, Edge)

## 🚀 Getting Started

### Database Setup
1. Install and configure PostgreSQL
2. Create a new database for the car showroom application
3. Configure database connection settings in application properties
4. Ensure database user has appropriate permissions

### Backend Configuration
1. Navigate to the project root directory
2. Update database configuration in `src/main/resources/application.properties`
3. Configure Rust API endpoint if different from default
4. Run the Spring Boot application using Maven
5. Verify backend is running on the configured port

### Frontend Setup
1. Install Node.js dependencies using npm
2. Configure API endpoints in Angular environment files
3. Start the Angular development server
4. Access the application through your web browser

### Alternative Development Server
The project includes a simple Express server for quick development and testing purposes.

## 📁 Project Structure

```
CarShowrrom1/
├── src/
│   ├── main/
│   │   ├── java/com/example/CarShowrrom1/
│   │   │   ├── AdminController.java      
│   │   │   ├── RustApiService.java       
│   │   │   ├── CarDTO.java             
│   │   │   ├── BookingDTO.java          
│   │   │   ├── AdminReport.java         
│   │   │   ├── RustApiException.java    
│   │   │   ├── repository.java        
│   │   │   └── CarShowrrom1Application.java 
│   │   └── resources/
│   │       └── application.properties   
│   └── app/                            
│       ├── components/                  
│       │   ├── header/                  
│       │   └── footer/                  
│       ├── pages/                      
│       │   ├── admin/                  
│       │   ├── cars/                    
│       │   └── bookings/                
│       ├── app.component.*              
│       └── app.routes.ts             
├── pom.xml                       
├── package.json                      
├── angular.json                       
├── tsconfig.json                        
└── simple-server.js                     
```

## 🔌 API Endpoints

### Admin Management Endpoints
- `GET /api/admin/cars` - Retrieve complete car inventory
- `GET /api/admin/bookings` - Fetch all booking records
- `PATCH /api/admin/bookings/{id}/status` - Update specific booking status

### Report Management Endpoints
- `POST /api/reports` - Create new administrative report
- `GET /api/reports` - Retrieve all generated reports

### Data Models
- **CarDTO**: Contains car specifications, availability, and pricing information
- **BookingDTO**: Includes customer details, booking dates, and status
- **AdminReport**: Report metadata, content, and generation details

## ⚙️ Configuration

### Application Properties
Configure your database connection and application settings in `src/main/resources/application.properties`:
- Database URL, username, and password
- JPA/Hibernate configuration
- Server port and context path
- Logging levels and output format

### External API Configuration
The application integrates with a Rust-based API service. Configure the base URL in `RustApiService.java` to match your Rust service deployment.

### Frontend Environment
Angular environment files allow configuration of:
- API base URLs for different environments
- Feature flags and application settings
- Build-specific configurations

## 🧪 Development & Testing

### Code Quality
- Comprehensive unit tests for backend services
- Angular component testing with Jasmine and Karma
- Integration tests for API endpoints
- Code coverage reporting

### Build Process
- Maven for Java application packaging
- Angular CLI for frontend build optimization
- Environment-specific build configurations
- Automated dependency management

## 🚀 Deployment

### Production Build
- Optimized Angular build with minification
- Spring Boot executable JAR packaging
- Database migration scripts
- Environment-specific configuration files

### Deployment Options
- Traditional server deployment
- Containerized deployment with Docker
- Cloud platform deployment (AWS, Azure, GCP)
- CI/CD pipeline integration

## 🤝 Contributing

We welcome contributions to improve the Car Showroom application:

1. Fork the repository and create a feature branch
2. Follow the existing code style and conventions
3. Add appropriate tests for new functionality
4. Update documentation as needed
5. Submit a pull request with detailed description

### Development Guidelines
- Follow Java coding standards and Spring Boot best practices
- Use Angular style guide for frontend development
- Write meaningful commit messages
- Include unit tests for new features
- Update API documentation for endpoint changes

## 📝 License

This project is licensed under the MIT License, allowing for both personal and commercial use with proper attribution.

## 🆘 Troubleshooting

### Common Issues & Solutions

**Application Startup Issues**
- Verify Java version compatibility (Java 21+)
- Check database connectivity and permissions
- Ensure all required ports are available
- Validate application.properties configuration

**API Integration Problems**
- Confirm Rust API service is running on correct port
- Check network connectivity between services
- Verify API endpoint URLs and request formats
- Review CORS configuration for cross-origin requests

**Frontend Issues**
- Clear browser cache and cookies
- Check browser console for JavaScript errors
- Verify Angular CLI version compatibility
- Ensure Node.js and npm are up to date

**Database Connection Problems**
- Verify PostgreSQL service is running
- Check database credentials and permissions
- Confirm database exists and is accessible
- Review connection pool configuration

### Performance Optimization
- Monitor database query performance
- Implement caching strategies where appropriate
- Optimize Angular bundle size
- Use database indexing for frequently queried fields


Made with 💡 by Vaibhav Davale & Ajay Mali 📧 Email: davlevaibhav0@gmail.com 📧 Email: ajaymali0885@gmail.com

📍 Location: India
---

**Drive Your Business Forward with Our Car Showroom Solution! 🚗✨**
![Car Showroom Screenshot](C:\Users\davle\OneDrive\Pictures\Screenshots\Screenshot (2).png)


