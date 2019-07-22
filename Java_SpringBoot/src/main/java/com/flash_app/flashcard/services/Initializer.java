package com.flash_app.flashcard.services;

import com.flash_app.flashcard.model.*;
import com.flash_app.flashcard.repository.AppuserRepo;
import com.flash_app.flashcard.repository.CategoryRepo;
import com.flash_app.flashcard.repository.FlashcardRepo;
import com.flash_app.flashcard.repository.KnownRepo;
import org.springframework.stereotype.Component;

@Component
public class Initializer {

    public Initializer (AppuserRepo userRepo,
                        CategoryRepo categoryRepo,
                        FlashcardRepo flashRepo,
                        KnownRepo knownRepo) {

        AppUser user1 = new AppUser("idzia", "tralalalala");

        userRepo.save(user1);

        Category cat1 = new Category(user1, "czasowniki angielskie");
        Category cat2 = new Category(user1, "zwierzęta po angielsku");
        Category cat3 = new Category(user1, "komendy sql");

        categoryRepo.save(cat1);
        categoryRepo.save(cat2);
        categoryRepo.save(cat3);

        Flashcard flash1 = new Flashcard(cat1, "spędzać", "spend");
        Flashcard flash2 = new Flashcard(cat1,"świecić", "shine");
        Flashcard flash3 = new Flashcard(cat1,"zadzwonić", "ring up");
        Flashcard flash4 = new Flashcard(cat1, "tłumaczyć", "translate");
        Flashcard flash5 = new Flashcard(cat1, "odwiedzać", "visit");
        Flashcard flash6 = new Flashcard(cat1, "martwić się", "worry");
        Flashcard flash7 = new Flashcard(cat1, "wyjmować", "take out");
        Flashcard flash8 = new Flashcard(cat1, "odwrócić się", "turn around");
        Flashcard flash9 = new Flashcard(cat1, "pozwolić", "let");
        Flashcard flash10 = new Flashcard(cat1, "przebaczyć", "forgive");
        Flashcard flash11 = new Flashcard(cat1, "przypominać", "remind");
        Flashcard flash12 = new Flashcard(cat1, "poprawiać", "correct");
        Flashcard flash13 = new Flashcard(cat1, "odnosić się do", "refer to");
        Flashcard flash14 = new Flashcard(cat1, "nudzić", "bore");

        flashRepo.save(flash1);
        flashRepo.save(flash2);
        flashRepo.save(flash3);
        flashRepo.save(flash4);
        flashRepo.save(flash5);
        flashRepo.save(flash6);
        flashRepo.save(flash7);
        flashRepo.save(flash8);
        flashRepo.save(flash9);
        flashRepo.save(flash10);
        flashRepo.save(flash11);
        flashRepo.save(flash12);
        flashRepo.save(flash13);
        flashRepo.save(flash14);

//        KnownId knownId1 = new KnownId(user1.getId(), flash1.getId());
//        KnownId knownId2 = new KnownId(user1.getId(), flash2.getId());
//        KnownId knownId3 = new KnownId(user1.getId(), flash3.getId());
//        KnownId knownId4 = new KnownId(user1.getId(), flash4.getId());
//        KnownId knownId5 = new KnownId(user1.getId(), flash5.getId());
//        KnownId knownId6 = new KnownId(user1.getId(), flash6.getId());
//        KnownId knownId7 = new KnownId(user1.getId(), flash7.getId());
//        KnownId knownId8 = new KnownId(user1.getId(), flash8.getId());
//        KnownId knownId9 = new KnownId(user1.getId(), flash9.getId());
//        KnownId knownId10 = new KnownId(user1.getId(), flash10.getId());
//        KnownId knownId11 = new KnownId(user1.getId(), flash11.getId());
//        KnownId knownId12 = new KnownId(user1.getId(), flash12.getId());
//        KnownId knownId13 = new KnownId(user1.getId(), flash13.getId());
//        KnownId knownId14 = new KnownId(user1.getId(), flash14.getId());
//
//
//        Known known1 = new Known();
//        known1.setId(knownId1);
//        known1.setKnow(0);
//
//
//        Known known2 = new Known();
//        known2.setId(knownId2);
//        known2.setKnow(0);
//
//        Known known3 = new Known();
//        known3.setId(knownId3);
//        known3.setKnow(0);
//
//        Known known4 = new Known();
//        known4.setId(knownId4);
//        known4.setKnow(0);
//
//        Known known5 = new Known();
//        known5.setId(knownId5);
//        known5.setKnow(0);
//
//        Known known6 = new Known();
//        known6.setId(knownId6);
//        known6.setKnow(0);
//
//        Known known7 = new Known();
//        known7.setId(knownId7);
//        known7.setKnow(0);
//
//        Known known8 = new Known();
//        known8.setId(knownId8);
//        known8.setKnow(0);
//
//        Known known9 = new Known();
//        known9.setId(knownId9);
//        known9.setKnow(0);
//
//        Known known10 = new Known();
//        known10.setId(knownId10);
//        known10.setKnow(0);
//
//        Known known11 = new Known();
//        known11.setId(knownId11);
//        known11.setKnow(0);
//
//        Known known12 = new Known();
//        known12.setId(knownId12);
//        known12.setKnow(0);
//
//        Known known13 = new Known();
//        known13.setId(knownId13);
//        known13.setKnow(0);
//
//        Known known14 = new Known();
//        known14.setId(knownId14);
//        known14.setKnow(0);
//
//        knownRepo.save(known1);
//        knownRepo.save(known2);
//        knownRepo.save(known3);
//        knownRepo.save(known4);
//        knownRepo.save(known5);
//        knownRepo.save(known6);
//        knownRepo.save(known7);
//        knownRepo.save(known8);
//        knownRepo.save(known9);
//        knownRepo.save(known10);
//        knownRepo.save(known11);
//        knownRepo.save(known12);
//        knownRepo.save(known13);
//        knownRepo.save(known14);
//


    }

}
