package com.example.CarShowrrom1;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:4200")
 public class AdminController {
    private final RustApiService rustApiService;

    public AdminController(RustApiService rustApiService) {
        this.rustApiService = rustApiService;
    }

    @GetMapping("/cars")
    public ResponseEntity<List<CarDTO>> getAllCars() {
        return ResponseEntity.ok(rustApiService.getAllCars());
    }

    @GetMapping("/bookings")
    public ResponseEntity<List<BookingDTO>> getAllBookings() {
        return ResponseEntity.ok(rustApiService.getAllBookings());
    }

    @PatchMapping("/bookings/{id}/status")
    public ResponseEntity<BookingDTO> updateBookingStatus(
            @PathVariable Long id,
            @RequestParam String status) {
        return ResponseEntity.ok(rustApiService.updateBookingStatus(id, status));
    }
}

@RestController
@RequestMapping("/api/reports")
class ReportController {
    private final ReportService reportService;

    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }

    @PostMapping
    public ResponseEntity<AdminReport> createReport(
            @RequestParam String reportType,
            @RequestParam String content,
            @RequestParam String generatedBy) {
        return ResponseEntity.ok(reportService.createReport(reportType, content, generatedBy));
    }

    @GetMapping
    public ResponseEntity<List<AdminReport>> getAllReports() {
        return ResponseEntity.ok(reportService.getAllReports());
    }
}
