-- ============================================
-- Database schema for Service Booking System
-- Generated from provided ER Diagram
-- ============================================

-- Drop tables if they already exist (to reset schema)
DROP TABLE IF EXISTS availability;
DROP TABLE IF EXISTS booking;
DROP TABLE IF EXISTS services;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS providers;
DROP TABLE IF EXISTS users;

-- ============================================
-- USERS TABLE
-- ============================================
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- PROVIDERS TABLE
-- ============================================
CREATE TABLE providers (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    specialization VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- CATEGORIES TABLE
-- ============================================
CREATE TABLE categories (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL UNIQUE
);

-- ============================================
-- SERVICES TABLE
-- ============================================
CREATE TABLE services (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    category_id BIGINT NOT NULL,
    provider_id BIGINT NOT NULL,
    price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
    location VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_services_category
        FOREIGN KEY (category_id) REFERENCES categories(id)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT fk_services_provider
        FOREIGN KEY (provider_id) REFERENCES providers(id)
        ON UPDATE CASCADE ON DELETE CASCADE
);

-- ============================================
-- AVAILABILITY TABLE
-- ============================================
CREATE TABLE availability (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    provider_id BIGINT NOT NULL,
    day_of_week ENUM('Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday') NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    CONSTRAINT fk_availability_provider
        FOREIGN KEY (provider_id) REFERENCES providers(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT chk_time_range CHECK (start_time < end_time)
);

-- ============================================
-- BOOKING TABLE
-- ============================================
CREATE TABLE booking (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    service_id BIGINT NOT NULL,
    booking_date DATE NOT NULL,
    status ENUM('Pending','Confirmed','Cancelled','Completed') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_booking_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_booking_service
        FOREIGN KEY (service_id) REFERENCES services(id)
        ON UPDATE CASCADE ON DELETE CASCADE
);
