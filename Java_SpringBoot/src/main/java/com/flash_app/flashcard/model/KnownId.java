package com.flash_app.flashcard.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class KnownId implements Serializable {

    @Column (name = "appuser_id")
    private Long appuser_id;

    @Column (name = "flashcard_id")
    private Long flashcard_id;

    public KnownId() {

    }

    public KnownId(Long appuser_id, Long flashcard_id) {
        this.appuser_id = appuser_id;
        this.flashcard_id = flashcard_id;
    }

    public Long getId_user() {
        return appuser_id;
    }

    public Long getId_flashcard() {
        return flashcard_id;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        KnownId knownId = (KnownId) o;
        return Objects.equals(appuser_id, knownId.appuser_id) &&
                Objects.equals(flashcard_id, knownId.flashcard_id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(appuser_id, flashcard_id);
    }
}
