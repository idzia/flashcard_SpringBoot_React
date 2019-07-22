package com.flash_app.flashcard.repository;

import com.flash_app.flashcard.model.Flashcard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface FlashcardRepo extends JpaRepository<Flashcard, Long> {


    @Query (value = "select id, answer, question, know, appuser_id, category_id "+
            "from flashcard f " +
            "left join known k  " +
            "on f.id = k.flashcard_id " +
            "where (k.know = 0 OR k.know IS null) AND (k.appuser_id = 1 OR k.appuser_id IS null)  AND f.category_id = ?1",
            nativeQuery = true)
    List<Flashcard> findUnknownFlashcard(Long categoryId);

    List<Flashcard> findAll();

    List<Flashcard> findAllByCategoryId(Long categoryId);

    Flashcard findFlashcardById(Long id);

}
