package com.serviceLk.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/service")
public class ServiceRestController {

    @Autowired
    private ServiceRepository serviceRepository;

    // GET all Service
    @GetMapping("/getAllServices")
    public ResponseEntity<List<Service>> getAllService() {
        return ResponseEntity.ok(serviceRepository.findAll());
    }

    //  POST new user
    @PostMapping("/addService")
    public ResponseEntity<Service> addService(@RequestBody Service addService) {
        Service saved = serviceRepository.save(addService);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    //  GET user by ID
    @GetMapping("/findService/{id}")
    public ResponseEntity<?> findService(@PathVariable int id) {
        if (id < 0) {
            return ResponseEntity.badRequest().body("ID cannot be less than zero");
        }


        Optional<Service> service = serviceRepository.findById(id);

        if (service.isPresent()) {
            Service foundService = service.get();
            ResponseEntity<Service> response = ResponseEntity.ok(foundService);
            return response;
        } else {
            ResponseEntity<String> notFoundResponse = ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("Service not found");
            return notFoundResponse;
        }

    }


    //  PUT update service by ID
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateService(@PathVariable int id, @RequestBody Service updateData) {
        Optional<Service> optionalService = serviceRepository.findById(id);

        if (optionalService.isPresent()) {
            Service service = optionalService.get();
            service.setName(updateData.getName());
            service.setDescription(updateData.getDescription());
            service.setCategory_id(updateData.getCategory_id());
            service.setProvider_id(updateData.getProvider_id());
            service.setPrice(updateData.getPrice());
            service.setLocation(updateData.getLocation());
            serviceRepository.save(service);
            return ResponseEntity.ok("Service updated successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Service not found");
        }
    }

    //  DELETE service by ID
    @DeleteMapping("/deleteService/{id}")
    public ResponseEntity<?> deleteService(@PathVariable int id) {
        if (!serviceRepository.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Service not found");
        }
        serviceRepository.deleteById(id);
        return ResponseEntity.ok("Service removed successfully");
    }
}
