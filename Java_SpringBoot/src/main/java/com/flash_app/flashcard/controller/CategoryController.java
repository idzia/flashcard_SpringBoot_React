package com.flash_app.flashcard.controller;

import com.flash_app.flashcard.model.*;
import com.flash_app.flashcard.repository.AppuserRepo;
import com.flash_app.flashcard.repository.CategoryRepo;
import com.flash_app.flashcard.repository.FlashcardRepo;
import com.flash_app.flashcard.repository.KnownRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api")
public class CategoryController {
    private final CategoryRepo categoryRepo;
    private final AppuserRepo appuserRepo;
    private final FlashcardRepo flashRepo;
    private final KnownRepo knownRepo;

    @Autowired
    public CategoryController(CategoryRepo categoryRepo, AppuserRepo appuserRepo, FlashcardRepo flashRepo, KnownRepo knownRepo) {
        this.categoryRepo = categoryRepo;
        this.appuserRepo = appuserRepo;
        this.flashRepo = flashRepo;
        this.knownRepo = knownRepo;
    }

    @GetMapping("/categories")
    public List<Category> getAllCategories() {
        return categoryRepo.findAll();
    }

    @GetMapping("/category/{id}")
    public Category getCategoryById(@PathVariable Long id) {
        return categoryRepo.findCategoryById(id);
    }

    @PostMapping("/categories")
    public  Category addNewCategory(@RequestBody @Valid Category newCategory) {
        Long userId = 1L;
        AppUser user = appuserRepo.findAppUserById(userId);
        newCategory.setUser(user);
        return categoryRepo.save(newCategory);
    }

    @DeleteMapping("/categories/{id}")
    public void deleteCategoryById(@PathVariable Long id) {
        categoryRepo.deleteById(id);
    }
}
