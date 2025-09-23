package com.serviceLk.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserRestController {

    @Autowired
    private UserRepository userRepository;

    // GET all users
    @GetMapping("/getAllUser")
    public ResponseEntity<List<User>> getAllUser() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    // POST new user
    @PostMapping("/addUser")
    public ResponseEntity<User> addUser(@RequestBody User addUser) {
        User saved = userRepository.save(addUser);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    // GET user by ID
    @GetMapping("/findUser/{id}")
    public ResponseEntity<?> findUser(@PathVariable int id) {
        if (id < 0) {
            return ResponseEntity.badRequest().body("ID cannot be less than zero");
        }

        Optional<User> user = userRepository.findById(Long.valueOf(id));

        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }

    // POST login
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> loginData) {
        String username = loginData.get("username");
        String password = loginData.get("password");

        if (username == null || username.isBlank() || password == null || password.isBlank()) {
            return ResponseEntity.badRequest().body("Username and password are required");
        }

        Optional<User> optionalUser = userRepository.findByUsername(username);

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (user.getPassword().equals(password)) {
                //return ResponseEntity.ok("Login successful");
                return ResponseEntity.ok(Map.of(
                        "message", "Login successful",
                        "userId", user.getID()
                ));

            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }

    // PUT update user by ID
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateUser(@PathVariable int id, @RequestBody User updateData) {
        Optional<User> optionalUser = userRepository.findById(Long.valueOf(id));

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setUsername(updateData.getUsername()); // <-- corrected
            user.setEmail(updateData.getEmail());
            user.setPassword(updateData.getPassword());
            userRepository.save(user);
            return ResponseEntity.ok("User updated successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }

    // DELETE user by ID
    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable int id) {
        if (!userRepository.existsById(Long.valueOf(id))) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
        userRepository.deleteById(Long.valueOf(id));
        return ResponseEntity.ok("User removed successfully");
    }
}
