package com.example.article.dto;

public record ArticleSave(
        String title,
        String content,
        Integer rating,
        Float prix
) {
}
