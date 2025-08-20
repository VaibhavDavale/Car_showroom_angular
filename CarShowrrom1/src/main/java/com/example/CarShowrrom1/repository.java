package com.example.CarShowrrom1;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

interface AdminReportRepository extends JpaRepository<AdminReport, Long> {
    List<AdminReport> findByReportType(String reportType);
}