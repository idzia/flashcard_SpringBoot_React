package com.flash_app.flashcard.controller;

import com.flash_app.flashcard.model.Category;
import com.flash_app.flashcard.model.Flashcard;
import com.flash_app.flashcard.repository.CategoryRepo;
import com.flash_app.flashcard.repository.FlashcardRepo;
import com.flash_app.flashcard.repository.KnownRepo;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;


@RestController
@RequestMapping("/api")
public class FlashcardController {
    private final FlashcardRepo flashRepo;
    private final CategoryRepo categoryRepo;
    private final KnownRepo knownRepo;

    public FlashcardController(FlashcardRepo flashRepo, CategoryRepo categoryRepo, KnownRepo knownRepo) {
        this.flashRepo = flashRepo;
        this.categoryRepo = categoryRepo;
        this.knownRepo = knownRepo;
    }

    @GetMapping("/flashcards/{id}")
//    @CrossOrigin(origins = "http://localhost:3000")
    public List<Flashcard> getAllFlashcardFromCategory(@PathVariable Long id) {
        return flashRepo.findAllByCategoryId(id);
    }

    @PostMapping("/flashcards/{id}")
    public Flashcard addNewFlashcard(@PathVariable Long id, @RequestBody Flashcard newFlashcard) {
        Category category = categoryRepo.findCategoryById(id);
        newFlashcard.setCategory(category);
        return flashRepo.save(newFlashcard);
    }

    @GetMapping("/learn/{id}")
    public Flashcard getFlashcard(@PathVariable Long id) {
        List<Flashcard> flashList = flashRepo.findUnknownFlashcard(id);
        Random random = new Random();
        int randomId = random.nextInt(flashList.size());
        Flashcard flashcard = flashList.get(randomId);
        return flashcard;
    }

    @DeleteMapping("/flashcard/{id}")
    public void deleteFlashcardById(@PathVariable Long id) {
        flashRepo.deleteById(id);
    }
}
