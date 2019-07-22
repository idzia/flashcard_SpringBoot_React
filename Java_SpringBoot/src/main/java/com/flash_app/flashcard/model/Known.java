package com.flash_app.flashcard.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity(name = "Known")
@Table(name="known")

public class Known {

    @EmbeddedId
    private KnownId id;

    @Column
    private int know;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "appuser")
    private AppUser appuser;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "flashcard")
    private Flashcard flashcard;


    public KnownId getId() {
        return id;
    }

    public void setId(KnownId id) {
        this.id = id;
     }

    public int getKnow() {
        return know;
    }

    public void setKnow(int know) {
        this.know = know;
    }

    public AppUser getUser() {
        return appuser;
    }

    public void setUser(AppUser appuser) {
        this.appuser = appuser;
    }

    public Flashcard getFlashcard() {
        return flashcard;
    }

    public void setFlashcard(Flashcard flashcard) {
        this.flashcard = flashcard;
    }

    public Known() {}

    public Known(Flashcard flashcard, int know) {
        this.appuser = null;
        this.flashcard = flashcard;
        this.know = know;
    }

    public Known (KnownId id, AppUser appuser, Flashcard flashcard, int know) {
        this.id = id;
        this.appuser = appuser;
        this.flashcard = flashcard;
        this.know = know;
    }

    public Known (AppUser appuser, Flashcard flashcard, int know) {
        this.appuser=appuser;
        this.flashcard=flashcard;
        this.know=know;
        this.id = new KnownId(appuser.getId(), flashcard.getId());
    }
}
