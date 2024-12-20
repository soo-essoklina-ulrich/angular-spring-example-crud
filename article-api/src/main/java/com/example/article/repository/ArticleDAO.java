package com.example.article.repository;

import com.example.article.models.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ArticleDAO extends JpaRepository<Article, UUID> {
}
