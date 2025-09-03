package com.serviceLk.backend;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "booking")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;

    private Integer user_id;

    private Integer service_id;

    private Date booking_date;

    private String status = "Pending";  // Default value

    public Booking() {
    }

    public Booking(int ID, Integer user_id, Integer service_id, Date booking_date, String status) {
        this.ID = ID;
        this.user_id = user_id;
        this.service_id = service_id;
        this.booking_date = booking_date;
        this.status = status;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getBooking_date() {
        return booking_date;
    }

    public void setBooking_date(Date booking_date) {
        this.booking_date = booking_date;
    }

    public Integer getService_id() {
        return service_id;
    }

    public void setService_id(Integer service_id) {
        this.service_id = service_id;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }
}
