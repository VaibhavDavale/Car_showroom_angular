# Car_showroom_angular
# Car Showroom Application
🧑‍💻 Group member

Made with 💡 by

1.Vaibhav Davale 
2.Ajay Mali

📧 davlevaibhav0@gmail.com 
📧 ajaymali0885@gmail.com 
📍 India add this redmi file

A full-stack car showroom management system built with Spring Boot backend, Angular frontend, and Rust API integration.

## 🚗 Overview

This application provides a comprehensive car showroom management system with admin capabilities for managing cars, bookings, and generating reports. The system features a modern web interface built with Angular and a robust backend powered by Spring Boot.

## 🏗️ Architecture

- **Backend**: Spring Boot 3.5.4 with Java 21
- **Frontend**: Angular 17
- **Database**: PostgreSQL
- **External API**: Rust-based API service (running on port 8080)
- **Development Server**: Express.js for serving static files

## 📋 Features

### Admin Features
- **Car Management**: View and manage car inventory
- **Booking Management**: View all bookings and update booking status
- **Report Generation**: Create and view administrative reports
- **Real-time Updates**: Integration with Rust API for live data

### Technical Features
- RESTful API endpoints
- Cross-Origin Resource Sharing (CORS) enabled
- JPA/Hibernate for database operations
- Responsive Angular frontend
- Hot reload development environment

## 🛠️ Prerequisites

- **Java 21** or higher
- **Node.js** (for Angular frontend)
- **PostgreSQL** database
- **Maven** for dependency management
- **Rust API service** running on port 8080

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd CarShowrrom1
```

### 2. Database Setup
1. Install and start PostgreSQL
2. Create a database for the application
3. Update database configuration in `src/main/resources/application.properties`

### 3. Backend Setup (Spring Boot)
```bash
# Install dependencies and run the application
./mvnw spring-boot:run
```
The backend will start on `http://localhost:8080`

### 4. Frontend Setup (Angular)
```bash
# Install Node.js dependencies
npm install

# Start the Angular development server
npm start
```
The frontend will be available at `http://localhost:4200`

### 5. Alternative Frontend Server
You can also use the simple Express server:
```bash
node simple-server.js
```

## 📁 Project Structure

```
CarShowrrom1/
├── src/
│   ├── main/
│   │   ├── java/com/example/CarShowrrom1/
│   │   │   ├── AdminController.java      # Admin REST endpoints
│   │   │   ├── RustApiService.java       # Rust API integration
│   │   │   ├── CarDTO.java              # Car data transfer object
│   │   │   ├── BookingDTO.java          # Booking data transfer object
│   │   │   ├── AdminReport.java         # Report entity
│   │   │   └── CarShowrrom1Application.java # Main application class
│   │   └── resources/
│   │       └── application.properties    # Application configuration
│   └── app/                             # Angular frontend
│       ├── components/                  # Reusable components
│       ├── pages/                       # Page components
│       └── app.component.*              # Root component
├── pom.xml                              # Maven configuration
├── package.json                         # Node.js dependencies
├── angular.json                         # Angular configuration
└── simple-server.js                     # Express development server
```

## 🔌 API Endpoints

### Admin Endpoints
- `GET /api/admin/cars` - Get all cars
- `GET /api/admin/bookings` - Get all bookings  
- `PATCH /api/admin/bookings/{id}/status` - Update booking status

### Report Endpoints
- `POST /api/reports` - Create a new report
- `GET /api/reports` - Get all reports

## ⚙️ Configuration

### Database Configuration
Update `src/main/resources/application.properties` with your database settings:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/your_database
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### Rust API Configuration
The application expects a Rust API service running on `http://localhost:8080`. Update the `rustApiBaseUrl` in `RustApiService.java` if needed.

## 🧪 Development

### Running Tests
```bash
# Backend tests
./mvnw test

# Frontend tests
npm test
```

### Building for Production
```bash
# Build backend
./mvnw clean package

# Build frontend
npm run build
```




## 🆘 Troubleshooting

### Common Issues

1. **Port Conflicts**: Ensure ports 4200 (frontend) and 8080 (backend/Rust API) are available
2. **Database Connection**: Verify PostgreSQL is running and connection details are correct
3. **Rust API**: Make sure the external Rust API service is running on port 8080
   
---

**Happy Coding!
