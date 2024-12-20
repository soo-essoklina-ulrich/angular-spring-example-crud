package com.example.article.controller;

import com.example.article.dto.ArticleResponse;
import com.example.article.dto.ArticleSave;
import com.example.article.service.ArticleService;
import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;
import java.util.UUID;

@RestController
@RequestMapping("articles")
@AllArgsConstructor
@CrossOrigin("*")
public class ArticleController {
    private final ArticleService articleService;

    @PostConstruct
    public void init() {
       for (int i = 0; i < 100; i++) {
           articleService.createArticle(new ArticleSave("title" + i, this.generatestring(), 5+i, 100.0f));
       }
    }
   

    @PostMapping
    public ResponseEntity<ArticleResponse> createArticle(@RequestBody ArticleSave article) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(articleService.createArticle(article));
    }

    @GetMapping
    public ResponseEntity<List<ArticleResponse>> getArticles() {
        return ResponseEntity.ok(articleService.getArticles());
    }

    @PutMapping("{id}")
    public ResponseEntity<ArticleResponse> updateArticle(@PathVariable UUID id, @RequestBody ArticleSave article) {
        return ResponseEntity.ok(articleService.update(id, article));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteArticle(@PathVariable UUID id) {
        articleService.delete(id);
        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

    private  String generatestring() {
        int length = 100; // Longueur du texte à générer
        String characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";
        StringBuilder randomText = new StringBuilder();
        Random random = new Random();

        for (int i = 0; i < length; i++) {
            int index = random.nextInt(characters.length());
            randomText.append(characters.charAt(index));
        }
        return randomText.toString();

    }
}
