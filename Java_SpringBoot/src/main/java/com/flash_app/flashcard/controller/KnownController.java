package com.flash_app.flashcard.controller;

import com.flash_app.flashcard.model.AppUser;
import com.flash_app.flashcard.model.Flashcard;
import com.flash_app.flashcard.model.Known;
import com.flash_app.flashcard.model.KnownId;
import com.flash_app.flashcard.repository.AppuserRepo;
import com.flash_app.flashcard.repository.FlashcardRepo;
import com.flash_app.flashcard.repository.KnownRepo;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class KnownController {
    private final KnownRepo knownRepo;
    private final AppuserRepo appuserRepo;
    private final FlashcardRepo flashcardRepo;

    public KnownController(KnownRepo knownRepo, AppuserRepo appuserRepo, FlashcardRepo flashcardRepo) {
        this.knownRepo = knownRepo;
        this.appuserRepo = appuserRepo;
        this.flashcardRepo = flashcardRepo;
    }

    @PostMapping("/learn")
    public Known markAsKnown(@RequestBody Map<String, Object> request) {
        Long userId = 1L;
        Long flashcardId = Long.valueOf(request.get("flashcardId").toString());
        Integer know = Integer.valueOf(request.get("know").toString());

        Flashcard flashcard = flashcardRepo.findFlashcardById(flashcardId);
        AppUser user = appuserRepo.findAppUserById(userId);
        KnownId knownId= new KnownId(userId, flashcardId);

        Known newKnown = new Known(knownId, user, flashcard, know);
        return knownRepo.save(newKnown);
    }

}

