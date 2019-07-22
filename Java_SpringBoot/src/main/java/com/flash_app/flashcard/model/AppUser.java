package com.flash_app.flashcard.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Iterator;
import java.util.Set;

@Entity
@Table(name="appuser")
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String nick;

    @Column
    @JsonIgnore
    private String password;

    @JsonIgnore
    @OneToMany(mappedBy = "appuser")
    private Set<Category> categoryList;

    @JsonIgnore
    @OneToMany(mappedBy = "appuser")
    private Set<Known> knownSet;

    public AppUser(){}

    public AppUser(String nick, String password) {
        this.nick = nick;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNick() {
        return nick;
    }

    public void setNick(String nick) {
        this.nick = nick;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Category> getCategoryList() {
        return categoryList;
    }

    public void setCategoryList(Set<Category> categoryList) {
        this.categoryList = categoryList;
    }

    public Set<Known> getKnownSet() {
        return knownSet;
    }

    public void setKnownSet(Set<Known> knownSet) {
        this.knownSet = knownSet;
    }

//
//    public void addKnown(Flashcard flashcard, int know){
//        Known known = new Known(this, flashcard, know);
//        knownSet.add(known);
//        flashcard.getKnownSet().add(known);
//    }

//    public void remove(Flashcard flashcard, int know) {
//        for (Iterator<Known> iterator = knownSet.iterator(); iterator.hasNext();) {
//            Known known = iterator.next();
//            if (known.getFlashcard().equals(flashcard)&& known.getUser().equals(this)) {
//                iterator.remove();
//                known.getFlashcard().getKnownSet().remove(known);
//                known.setUser(null);
//                known.setFlashcard(null);
//            }
//        }
//    }

}
