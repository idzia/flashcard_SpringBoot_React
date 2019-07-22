package com.flash_app.flashcard.controller;

import com.flash_app.flashcard.model.AppUser;
import com.flash_app.flashcard.model.Category;
import com.flash_app.flashcard.repository.AppuserRepo;
import com.flash_app.flashcard.repository.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AppuserController {
    private final AppuserRepo appuserRepo;

    @Autowired
    public AppuserController(AppuserRepo appuserRepo) {
                this.appuserRepo = appuserRepo;
    }

    @GetMapping("/users")
    public AppUser getUser() {
        return appuserRepo.findAppUserById(1L);
    }
}
