package com.serviceLk.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/category")
public class CategoryRestController {

    @Autowired
    private CategoryRepository categoryRepository;

    // GET all category
    @GetMapping("/getAllCategories")
    public ResponseEntity<List<Category>> getAllCategories() {
        return ResponseEntity.ok(categoryRepository.findAll());
    }

    //  POST new category
    @PostMapping("/addCategory")
    public ResponseEntity<Category> addUser(@RequestBody Category addCategory) {
        Category saved = categoryRepository.save(addCategory);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    //  GET category by ID
    @GetMapping("/findCategory/{id}")
    public ResponseEntity<?> findUser(@PathVariable int id) {
        if (id < 0) {
            return ResponseEntity.badRequest().body("ID cannot be less than zero");
        }


        Optional<Category> category = categoryRepository.findById(id);

        if (category.isPresent()) {
            Category foundCategory = category.get();
            ResponseEntity<Category> response = ResponseEntity.ok(foundCategory);
            return response;
        } else {
            ResponseEntity<String> notFoundResponse = ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("Category not found");
            return notFoundResponse;
        }

    }


    //  PUT update category by ID
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateCategory(@PathVariable int id, @RequestBody Category updateData) {
        Optional<Category> optionalCategory = categoryRepository.findById(id);

        if (optionalCategory.isPresent()) {
            Category category = optionalCategory.get();
            category.setName(updateData.getName());
            categoryRepository.save(category);
            return ResponseEntity.ok("Category updated successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Category not found");
        }
    }

    //  DELETE category by ID
    @DeleteMapping("/deleteCategory/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable int id) {
        if (!categoryRepository.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Category not found");
        }
        categoryRepository.deleteById(id);
        return ResponseEntity.ok("Category removed successfully");
    }
}