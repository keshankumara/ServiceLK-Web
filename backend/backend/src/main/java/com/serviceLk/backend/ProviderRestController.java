package com.serviceLk.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/provider")
public class ProviderRestController {

    @Autowired
    private ProviderRepository providerRepository;

    // GET all Providers
    @GetMapping("/getAllProviders")
    public ResponseEntity<List<Provider>> getAllUser() {
        return ResponseEntity.ok(providerRepository.findAll());
    }

    //  POST new Provider
    @PostMapping("/addProvider")
    public ResponseEntity<Provider> addProvider(@RequestBody Provider addProvider) {
        Provider saved = providerRepository.save(addProvider);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    //  GET Provider by ID
    @GetMapping("/findProvider/{id}")
    public ResponseEntity<?> findProvider(@PathVariable int id) {
        if (id < 0) {
            return ResponseEntity.badRequest().body("ID cannot be less than zero");
        }


        Optional<Provider> provider = providerRepository.findById(id);

        if (provider.isPresent()) {
            Provider foundProvider = provider.get();
            ResponseEntity<Provider> response = ResponseEntity.ok(foundProvider);
            return response;
        } else {
            ResponseEntity<String> notFoundResponse = ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("Provider not found");
            return notFoundResponse;
        }

    }


    //  PUT update Provider by ID
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateProvider(@PathVariable int id, @RequestBody Provider updateData) {
        Optional<Provider> optionalProvider = providerRepository.findById(id);

        if (optionalProvider.isPresent()) {
            Provider provider = optionalProvider.get();
            provider.setName(updateData.getName());
            provider.setEmail(updateData.getEmail());
            
            provider.setPassword(updateData.getPassword());
            providerRepository.save(provider);
            return ResponseEntity.ok("Provider updated successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Provider not found");
        }
    }

    //  DELETE employee by ID
    @DeleteMapping("/deleteProvider/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable int id) {
        if (!providerRepository.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Provider not found");
        }
        providerRepository.deleteById(id);
        return ResponseEntity.ok("Provider removed successfully");
    }
}
