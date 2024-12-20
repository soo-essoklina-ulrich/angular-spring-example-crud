package com.example.article.mapper;

import com.example.article.dto.ArticleResponse;
import com.example.article.models.Article;
import org.springframework.stereotype.Service;

@Service
public class ResponseMapper {

    public ArticleResponse ArticleMapperResponse(Article article) {
        if (article == null) {
            return null;
        }

        return new ArticleResponse(
                article.getId(),
                article.getTitle(),
                article.getContent(),
                article.getRating(),
                article.getPrix()
        );
    }
}
