package com.serviceLk.backend;

import jakarta.persistence.*;

import java.math.BigInteger;
import java.text.DecimalFormat;

@Entity
@Table(name = "services")
public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;

    private String name;

    private String description;

    private Integer category_id;

    private Integer provider_id;

    private double  price;

    private String location;

    public Service() {
    }

    public Service(int ID, String name, String description, Integer category_id, Integer provider_id, double price, String location) {
        this.ID = ID;
        this.name = name;
        this.description = description;
        this.category_id = category_id;
        this.provider_id = provider_id;
        this.price = price;
        this.location = location;
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getCategory_id() {
        return category_id;
    }

    public void setCategory_id(Integer category_id) {
        this.category_id = category_id;
    }

    public Integer getProvider_id() {
        return provider_id;
    }

    public void setProvider_id(Integer provider_id) {
        this.provider_id = provider_id;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
