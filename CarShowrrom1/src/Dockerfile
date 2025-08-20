# docker-compose.yml
version: '3.8'

services:
  postgres:
    image: postgres:14
    environment:
      POSTGRES_DB: mydb
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: ${vaibhav@123}
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  app:
    image: openjdk:17
    volumes:
      - ./target/car-showroom-spring-1.0.0.jar:/app.jar
    command: java -jar /app.jar
    environment:
      DB_HOST: postgres
      DB_NAME: mydb
      DB_USER: postgres
      DB_PASSWORD: ${vaibhav@123}
      RUST_API_URL: http://rust-api:8080
    ports:
      - "8081:8081"
    depends_on:
      - postgres

volumes:
  pgdata: