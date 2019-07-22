package com.flash_app.flashcard.model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Set;

@Entity
@Table(name="category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String title;

    @ManyToOne
    @JoinColumn(name = "appuser")
//    @JsonIgnore
    private AppUser appuser;

    @JsonIgnore
    @OneToMany(mappedBy = "category", cascade = {CascadeType.REMOVE})
    private Set<Flashcard> flashcardSet;

    public Category() {
    }

    public Category(String title) {
        this.appuser = null;
        this.title = title;
    }

    public Category(AppUser appuser, String title) {
        this.appuser = appuser;
        this.title = title;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public AppUser getUser() {
        return appuser;
    }

    public void setUser(AppUser appuser) {
        this.appuser = appuser;
    }

    public Set<Flashcard> getFlashcardSet() {
        return flashcardSet;
    }

}
