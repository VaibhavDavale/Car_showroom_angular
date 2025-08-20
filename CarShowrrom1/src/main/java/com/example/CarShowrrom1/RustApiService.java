package com.example.CarShowrrom1;

import java.util.List;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
 public class RustApiService {
    private final RestTemplate restTemplate;
    private String rustApiBaseUrl = "http://localhost:8080";

    public RustApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public List<CarDTO> getAllCars() {
        ResponseEntity<List<CarDTO>> response = restTemplate.exchange(
            rustApiBaseUrl + "/cars",
            HttpMethod.GET,
            null,
            new ParameterizedTypeReference<List<CarDTO>>() {}
        );
        return response.getBody();
    }

    public List<BookingDTO> getAllBookings() {
        ResponseEntity<List<BookingDTO>> response = restTemplate.exchange(
            rustApiBaseUrl + "/bookings",
            HttpMethod.GET,
            null,
            new ParameterizedTypeReference<List<BookingDTO>>() {}
        );
        return response.getBody();
    }

    public BookingDTO updateBookingStatus(Long id, String status) {
        String url = rustApiBaseUrl + "/bookings/" + id + "/status?status=" + status;
        return restTemplate.patchForObject(url, null, BookingDTO.class);
    }
}

@Service
class ReportService {
    private final AdminReportRepository reportRepository;

    public ReportService(AdminReportRepository reportRepository) {
        this.reportRepository = reportRepository;
    }

    public AdminReport createReport(String reportType, String content, String generatedBy) {
        AdminReport report = new AdminReport();
        report.setReportType(reportType);
        report.setContent(content);
        report.setGeneratedBy(generatedBy);
        return reportRepository.save(report);
    }

    public List<AdminReport> getAllReports() {
        return reportRepository.findAll();
    }
}
