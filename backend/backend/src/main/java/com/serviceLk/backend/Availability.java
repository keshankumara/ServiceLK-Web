package com.serviceLk.backend;

import jakarta.persistence.*;

import java.sql.Time;

@Entity
@Table(name = "availability")
public class Availability {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // use Long for BIGINT

    private Long provider_id;  // reference to provider ID

    private String day_of_week = "Monday";

    private Time start_time;  // TIME type in SQL maps to java.sql.Time

    private Time end_time;

    public Availability() {
    }

    public Availability(Long id, Long provider_id, String day_of_week, Time start_time, Time end_time) {
        this.id = id;
        this.provider_id = provider_id;
        this.day_of_week = day_of_week;
        this.start_time = start_time;
        this.end_time = end_time;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getProvider_id() {
        return provider_id;
    }

    public void setProvider_id(Long provider_id) {
        this.provider_id = provider_id;
    }

    public String getDay_of_week() {
        return day_of_week;
    }

    public void setDay_of_week(String day_of_week) {
        this.day_of_week = day_of_week;
    }

    public Time getStart_time() {
        return start_time;
    }

    public void setStart_time(Time start_time) {
        this.start_time = start_time;
    }

    public Time getEnd_time() {
        return end_time;
    }

    public void setEnd_time(Time end_time) {
        this.end_time = end_time;
    }
}
