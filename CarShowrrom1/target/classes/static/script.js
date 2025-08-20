// Base configuration
const API_BASE = 'http://localhost:3000';
const USERNAME = 'vaibhav'; // In real app, get from authentication
let currentPage = 1;
const itemsPerPage = 5;

// DOM Elements
const sections = {
    dashboard: document.getElementById('dashboard'),
    cars: document.getElementById('cars'),
    bookings: document.getElementById('bookings'),
    reports: document.getElementById('reports'),
    audit: document.getElementById('audit')
};

// Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const targetSection = this.getAttribute('data-section');
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        
        // Show target section
        Object.values(sections).forEach(section => section.classList.remove('active-section'));
        sections[targetSection].classList.add('active-section');
        
        // Load data for the section
        switch(targetSection) {
            case 'dashboard': loadDashboard(); break;
            case 'cars': loadCars(); break;
            case 'bookings': loadBookings(); break;
            case 'reports': loadReports(); break;
            case 'audit': loadAuditLogs(); break;
        }
    });
});

// Initialize dashboard
loadDashboard();

// API Service
const apiService = {
    // Cars
    getCars: async () => {
        const response = await fetch(`${API_BASE}/api/admin/cars?page=0&size=100`, {
            headers: {
                'X-Username': USERNAME
            }
        });
        return await response.json();
    },
    
    // Bookings
    getBookings: async (page = 0, size = itemsPerPage, status = 'all') => {
        const params = new URLSearchParams({
            page: page,
            size: size,
            status: status
        });
        
        const response = await fetch(`${API_BASE}/api/admin/bookings?${params}`, {
            headers: {
                'X-Username': USERNAME
            }
        });
        return await response.json();
    },
    
    updateBookingStatus: async (id, status) => {
        const response = await fetch(`${API_BASE}/api/admin/bookings/${id}/status?status=${status}`, {
            method: 'PATCH',
            headers: {
                'X-Username': USERNAME,
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    },
    
    // Reports
    createReport: async (reportData) => {
        const response = await fetch(`${API_BASE}/api/reports`, {
            method: 'POST',
            headers: {
                'X-Username': USERNAME,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                reportType: reportData.type,
                content: reportData.content
            })
        });
        return await response.json();
    },
    
    getReports: async () => {
        const response = await fetch(`${API_BASE}/api/reports?page=0&size=100`, {
            headers: {
                'X-Username': USERNAME
            }
        });
        return await response.json();
    },
    
    // Audit Logs
    getAuditLogs: async (date) => {
        const params = date ? new URLSearchParams({ date }) : '';
        const response = await fetch(`${API_BASE}/api/admin/audit-logs?${params}`, {
            headers: {
                'X-Username': USERNAME
            }
        });
        return await response.json();
    },
    
    // Dashboard Stats
    getDashboardStats: async () => {
        // In a real app, you'd have a dedicated stats endpoint
        return {
            totalCars: 24,
            activeBookings: 8,
            totalReports: 12,
            totalAudits: 56
        };
    }
};

// UI Functions
async function loadDashboard() {
    try {
        const stats = await apiService.getDashboardStats();
        
        // Update stats
        document.getElementById('totalCars').textContent = stats.totalCars;
        document.getElementById('activeBookings').textContent = stats.activeBookings;
        document.getElementById('totalReports').textContent = stats.totalReports;
        document.getElementById('totalAudits').textContent = stats.totalAudits;
        
        // Load recent data
        const bookings = await apiService.getBookings(0, 5);
        const reports = await apiService.getReports();
        
        // Display recent bookings
        const bookingsContainer = document.getElementById('recentBookings');
        bookingsContainer.innerHTML = '';
        
        bookings.content.forEach(booking => {
            const bookingEl = document.createElement('a');
            bookingEl.className = 'list-group-item list-group-item-action';
            bookingEl.innerHTML = `
                <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1">Booking #${booking.id}</h6>
                    <small>${new Date(booking.bookingDate).toLocaleDateString()}</small>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <span>Car ID: ${booking.carId}</span>
                    <span class="status-badge status-${booking.status}">${booking.status}</span>
                </div>
            `;
            bookingsContainer.appendChild(bookingEl);
        });
        
        // Display recent reports
        const reportsContainer = document.getElementById('recentReports');
        reportsContainer.innerHTML = '';
        
        reports.content.slice(0, 5).forEach(report => {
            const reportEl = document.createElement('a');
            reportEl.className = 'list-group-item list-group-item-action';
            reportEl.innerHTML = `
                <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1">${report.reportType} Report</h6>
                    <small>${new Date(report.generatedAt).toLocaleDateString()}</small>
                </div>
                <p class="mb-1 text-truncate">${report.content.substring(0, 50)}...</p>
                <small>By ${report.generatedBy}</small>
            `;
            reportsContainer.appendChild(reportEl);
        });
        
    } catch (error) {
        console.error('Error loading dashboard:', error);
        alert('Failed to load dashboard data');
    }
}

async function loadCars() {
    try {
        const cars = await apiService.getCars();
        const container = document.getElementById('carsContainer');
        container.innerHTML = '';
        
        cars.forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = 'col-md-4 mb-4';
            carCard.innerHTML = `
                <div class="card h-100">
                    <img src="${car.imageUrl || 'https://via.placeholder.com/300x200?text=Car+Image'}" 
                         class="card-img-top car-img" alt="${car.model}">
                    <div class="card-body">
                        <h5 class="card-title">${car.brand} ${car.model}</h5>
                        <div class="d-flex justify-content-between mb-2">
                            <span class="badge bg-primary">${car.year}</span>
                            <span class="fw-bold">$${car.price.toLocaleString()}</span>
                        </div>
                        <p class="card-text">${car.description || 'No description available'}</p>
                    </div>
                    <div class="card-footer bg-white border-0">
                        <button class="btn btn-outline-primary w-100">
                            <i class="fas fa-edit me-1"></i> Edit
                        </button>
                    </div>
                </div>
            `;
            container.appendChild(carCard);
        });
        
    } catch (error) {
        console.error('Error loading cars:', error);
        alert('Failed to load cars');
    }
}

async function loadBookings(page = 1, status = 'all') {
    try {
        const bookings = await apiService.getBookings(page - 1, itemsPerPage, status);
        const container = document.getElementById('bookingsTable');
        container.innerHTML = '';
        
        // Render bookings
        bookings.content.forEach(booking => {
            const bookingRow = document.createElement('tr');
            bookingRow.innerHTML = `
                <td>${booking.id}</td>
                <td>${booking.carId} - ${getCarName(booking.carId)}</td>
                <td>User #${booking.userId}</td>
                <td>${new Date(booking.bookingDate).toLocaleDateString()}</td>
                <td>
                    <span class="status-badge status-${booking.status}">${booking.status}</span>
                </td>
                <td>
                    <button class="btn btn-sm btn-outline-info update-status-btn" 
                            data-id="${booking.id}" 
                            data-status="${booking.status}">
                        <i class="fas fa-sync-alt"></i> Update
                    </button>
                </td>
            `;
            container.appendChild(bookingRow);
        });
        
        // Add event listeners to update buttons
        document.querySelectorAll('.update-status-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const bookingId = this.getAttribute('data-id');
                const currentStatus = this.getAttribute('data-status');
                openUpdateBookingModal(bookingId, currentStatus);
            });
        });
        
        // Render pagination
        renderPagination(bookings.totalPages, page, status);
        
    } catch (error) {
        console.error('Error loading bookings:', error);
        alert('Failed to load bookings');
    }
}

function renderPagination(totalPages, currentPage, status) {
    const container = document.getElementById('bookingsPagination');
    container.innerHTML = '';
    
    // Previous button
    const prevItem = document.createElement('li');
    prevItem.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
    prevItem.innerHTML = `
        <a class="page-link" href="#" data-page="${currentPage - 1}" data-status="${status}">
            <i class="fas fa-chevron-left"></i>
        </a>
    `;
    container.appendChild(prevItem);
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('li');
        pageItem.className = `page-item ${i === currentPage ? 'active' : ''}`;
        pageItem.innerHTML = `
            <a class="page-link" href="#" data-page="${i}" data-status="${status}">${i}</a>
        `;
        container.appendChild(pageItem);
    }
    
    // Next button
    const nextItem = document.createElement('li');
    nextItem.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
    nextItem.innerHTML = `
        <a class="page-link" href="#" data-page="${currentPage + 1}" data-status="${status}">
            <i class="fas fa-chevron-right"></i>
        </a>
    `;
    container.appendChild(nextItem);
    
    // Add event listeners
    container.querySelectorAll('.page-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = parseInt(this.getAttribute('data-page'));
            const status = this.getAttribute('data-status');
            loadBookings(page, status);
        });
    });
}

async function loadReports() {
    try {
        const reports = await apiService.getReports();
        const container = document.getElementById('reportsContainer');
        container.innerHTML = '';
        
        reports.content.forEach(report => {
            const reportCard = document.createElement('div');
            reportCard.className = 'col-md-6 mb-4';
            reportCard.innerHTML = `
                <div class="card report-card h-100">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5 class="card-title">${report.reportType} Report</h5>
                            <span class="badge bg-primary">${report.reportType}</span>
                        </div>
                        <p class="card-text text-muted">${report.content.substring(0, 150)}...</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted">${new Date(report.generatedAt).toLocaleDateString()}</small>
                            <span>By ${report.generatedBy}</span>
                        </div>
                    </div>
                    <div class="card-footer bg-white border-0">
                        <button class="btn btn-sm btn-outline-primary me-2">
                            <i class="fas fa-eye me-1"></i> View
                        </button>
                        <button class="btn btn-sm btn-outline-danger">
                            <i class="fas fa-trash me-1"></i> Delete
                        </button>
                    </div>
                </div>
            `;
            container.appendChild(reportCard);
        });
        
    } catch (error) {
        console.error('Error loading reports:', error);
        alert('Failed to load reports');
    }
}

async function loadAuditLogs(date = null) {
    try {
        const logs = await apiService.getAuditLogs(date);
        const container = document.getElementById('auditLogsContainer');
        container.innerHTML = '';
        
        logs.content.forEach(log => {
            const logItem = document.createElement('div');
            logItem.className = 'audit-log';
            logItem.innerHTML = `
                <div class="d-flex justify-content-between">
                    <h6>${log.action}</h6>
                    <small>${new Date(log.timestamp).toLocaleString()}</small>
                </div>
                <div class="d-flex justify-content-between text-muted">
                    <span>${log.entityType} #${log.entityId || 'N/A'}</span>
                    <span>By ${log.performedBy}</span>
                </div>
                <p class="mb-0">${log.details}</p>
            `;
            container.appendChild(logItem);
        });
        
    } catch (error) {
        console.error('Error loading audit logs:', error);
        alert('Failed to load audit logs');
    }
}

function openUpdateBookingModal(bookingId, currentStatus) {
    document.getElementById('bookingId').value = bookingId;
    document.getElementById('currentStatus').textContent = currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1);
    document.getElementById('newStatus').value = currentStatus;
    
    const modal = new bootstrap.Modal(document.getElementById('updateBookingModal'));
    modal.show();
}

// Event Listeners
document.getElementById('bookingFilter').addEventListener('change', function() {
    loadBookings(1, this.value);
});

document.getElementById('refreshBookings').addEventListener('click', function() {
    const status = document.getElementById('bookingFilter').value;
    loadBookings(currentPage, status);
});

document.getElementById('submitReportBtn').addEventListener('click', async function() {
    const reportType = document.getElementById('reportType').value;
    const content = document.getElementById('reportContent').value;
    
    if (!reportType || !content) {
        alert('Please fill all fields');
        return;
    }
    
    try {
        await apiService.createReport({ type: reportType, content });
        
        // Close modal and reset form
        bootstrap.Modal.getInstance(document.getElementById('createReportModal')).hide();
        document.getElementById('reportForm').reset();
        
        // Reload reports
        loadReports();
        
        alert('Report created successfully!');
        
    } catch (error) {
        console.error('Error creating report:', error);
        alert('Failed to create report');
    }
});

document.getElementById('updateBookingBtn').addEventListener('click', async function() {
    const bookingId = document.getElementById('bookingId').value;
    const newStatus = document.getElementById('newStatus').value;
    
    try {
        await apiService.updateBookingStatus(bookingId, newStatus);
        
        // Close modal
        bootstrap.Modal.getInstance(document.getElementById('updateBookingModal')).hide();
        
        // Reload bookings
        const status = document.getElementById('bookingFilter').value;
        loadBookings(currentPage, status);
        
        alert('Booking status updated successfully!');
        
    } catch (error) {
        console.error('Error updating booking:', error);
        alert('Failed to update booking status');
    }
});

document.getElementById('filterAuditBtn').addEventListener('click', function() {
    const date = document.getElementById('auditDateFilter').value;
    loadAuditLogs(date);
});

document.getElementById('resetAuditFilter').addEventListener('click', function() {
    document.getElementById('auditDateFilter').value = '';
    loadAuditLogs();
});

// Utility Functions
function getCarName(carId) {
    // In a real app, you'd have a car name mapping
    const carNames = {
        1: 'Toyota Camry',
        2: 'Honda Civic',
        3: 'Ford Mustang'
    };
    return carNames[carId] || `Car ${carId}`;
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Load initial data
    loadDashboard();
});