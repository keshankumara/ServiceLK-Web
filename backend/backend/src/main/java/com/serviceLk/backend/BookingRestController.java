package com.serviceLk.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/booking")
public class BookingRestController {

    @Autowired
    private BookingRepository bookingRepository;

    // GET all user
    @GetMapping("/getAllBookings")
    public ResponseEntity<List<Booking>> getAllBooking() {
        return ResponseEntity.ok(bookingRepository.findAll());
    }

    //  POST new booking
    @PostMapping("/addBooking")
    public ResponseEntity<Booking> addUser(@RequestBody Booking addBooking) {
        Booking saved = bookingRepository.save(addBooking);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    //  GET Booking by ID
    @GetMapping("/findBooking/{id}")
    public ResponseEntity<?> findBooking(@PathVariable int id) {
        if (id < 0) {
            return ResponseEntity.badRequest().body("ID cannot be less than zero");
        }


        Optional<Booking> user = bookingRepository.findById(id);

        if (user.isPresent()) {
            Booking foundBooking = user.get();
            ResponseEntity<Booking> response = ResponseEntity.ok(foundBooking);
            return response;
        } else {
            ResponseEntity<String> notFoundResponse = ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("Booking not found");
            return notFoundResponse;
        }

    }


    //  PUT update Booking by ID
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateUser(@PathVariable int id, @RequestBody Booking updateData) {
        Optional<Booking> optionalBooking = bookingRepository.findById(id);

        if (optionalBooking.isPresent()) {
            Booking booking = optionalBooking.get();
            booking.setUser_id(updateData.getUser_id());
            booking.setService_id(updateData.getService_id());
            booking.setBooking_date(updateData.getBooking_date());
            booking.setStatus(updateData.getStatus());
            bookingRepository.save(booking);
            return ResponseEntity.ok("Booking updated successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Booking not found");
        }
    }

    //  DELETE Booking by ID
    @DeleteMapping("/deleteBooking/{id}")
    public ResponseEntity<?> deleteBooking(@PathVariable int id) {
        if (!bookingRepository.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Booking not found");
        }
        bookingRepository.deleteById(id);
        return ResponseEntity.ok("Booking removed successfully");
    }
}