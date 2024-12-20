package com.example.article.dto;

import java.util.UUID;

public record ArticleResponse(
        UUID id,
        String title,
        String content,
        Integer rating,
        Float prix
) {
}
