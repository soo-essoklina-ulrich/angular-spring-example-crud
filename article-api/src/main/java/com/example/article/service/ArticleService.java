package com.example.article.service;

import com.example.article.dto.ArticleResponse;
import com.example.article.dto.ArticleSave;

import java.util.List;
import java.util.UUID;

public interface ArticleService {
    ArticleResponse createArticle(ArticleSave article);
    List<ArticleResponse> getArticles();
    ArticleResponse update(UUID id, ArticleSave article);
    void delete(UUID id);

}
