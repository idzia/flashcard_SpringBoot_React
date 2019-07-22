package com.flash_app.flashcard.repository;

import com.flash_app.flashcard.model.Known;
import com.flash_app.flashcard.model.KnownId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface KnownRepo extends JpaRepository <Known, Long> {

    List<Known> findAll();

//    @Query(value = "select appuser_id, flashcard_id, know"+
//            "from known " +
//            "where appuser_id = ?1 AND flashcard_id = ?2",
//            nativeQuery = true)
//    Known findByUserIdAndFlashcardId(Long userId, Long flashcardId);
//
//    @Modifying
//    @Query(value = "delete from Known k " +
//            "where k.appuser_id = ?1 and k.flashcard_id = ?2",
//            nativeQuery = true)
//    void deleteKnownByKnownId(Long appuser_id, Long flashcard_id);

}
