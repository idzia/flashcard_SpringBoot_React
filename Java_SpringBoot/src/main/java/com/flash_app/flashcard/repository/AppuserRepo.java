package com.flash_app.flashcard.repository;

import com.flash_app.flashcard.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppuserRepo extends JpaRepository<AppUser, Long> {
    List<AppUser> findAll();
    AppUser findAppUserById(Long id);
}
