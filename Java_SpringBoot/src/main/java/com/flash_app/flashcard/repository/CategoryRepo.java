package com.flash_app.flashcard.repository;

import com.flash_app.flashcard.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Long> {

    List<Category> findAll();

    Category findCategoryById(Long id);

}
