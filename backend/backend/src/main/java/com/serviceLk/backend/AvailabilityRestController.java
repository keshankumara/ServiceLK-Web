package com.serviceLk.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/availability")
public class AvailabilityRestController {

    @Autowired
    private AvailabilityRepository availabilityRepository;

    // GET all availability
    @GetMapping("/getAllAvailability")
    public ResponseEntity<List<Availability>> getAllAvailability() {
        return ResponseEntity.ok(availabilityRepository.findAll());
    }

    //  POST new availability
    @PostMapping("/addAvailability")
    public ResponseEntity<Availability> addAvailability(@RequestBody Availability addAvailability) {
        Availability saved = availabilityRepository.save(addAvailability);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    //  GET user by ID
    @GetMapping("/findAvailability/{id}")
    public ResponseEntity<?> findAvailability(@PathVariable int id) {
        if (id < 0) {
            return ResponseEntity.badRequest().body("ID cannot be less than zero");
        }


        Optional<Availability> availability = availabilityRepository.findById(id);

        if (availability.isPresent()) {
            Availability foundAvailability = availability.get();
            ResponseEntity<Availability> response = ResponseEntity.ok(foundAvailability);
            return response;
        } else {
            ResponseEntity<String> notFoundResponse = ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("Availability not found");
            return notFoundResponse;
        }

    }


    //  PUT update availability by ID
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateAvailability(@PathVariable int id, @RequestBody Availability updateData) {
        Optional<Availability> optionalAvailability = availabilityRepository.findById(id);

        if (optionalAvailability.isPresent()) {
            Availability availability = optionalAvailability.get();
            availability.setProvider_id(updateData.getProvider_id());
            availability.setDay_of_week(updateData.getDay_of_week());
            availability.setStart_time(updateData.getStart_time());
            availability.setEnd_time(updateData.getEnd_time());
            availabilityRepository.save(availability);
            return ResponseEntity.ok("Availability updated successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Availability not found");
        }
    }

    //  DELETE availability by ID
    @DeleteMapping("/deleteAvailability/{id}")
    public ResponseEntity<?> deleteAvailability(@PathVariable int id) {
        if (!availabilityRepository.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Availability not found");
        }
        availabilityRepository.deleteById(id);
        return ResponseEntity.ok("Availability removed successfully");
    }
}