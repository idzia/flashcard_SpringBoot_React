package com.flash_app.flashcard.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="flashcard")
public class Flashcard {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String question;

    @Column
    private String answer;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @OneToMany(mappedBy = "flashcard", cascade = {CascadeType.REMOVE})
    private Set<Known> knownSet;

    public Flashcard(){

    }

    public Flashcard(Category category, String question, String answer){
        this.category = category;
        this.question = question;
        this.answer = answer;
    }

    public Flashcard(String question, String answer){
        this.category = null;
        this.question = question;
        this.answer = answer;
    }

    public Long getId() {
                return id;
        }

    public void setId(Long id) {
            this.id = id;
    }

    public Category getCategory() {
            return category;
    }

    public void setCategory(Category category) {
            this.category = category;
    }

    public String getQuestion() {
            return question;
    }

    public void setQuestion(String question) {
            this.question = question;
    }

    public String getAnswer() {
            return answer;
    }

    public void setAnswer(String answer) {
            this.answer = answer;
    }

    public Set<Known> getKnownSet() {
        return knownSet;
    }

    public void setKnownSet(Set<Known> knownSet) {
        this.knownSet = knownSet;
    }
}
