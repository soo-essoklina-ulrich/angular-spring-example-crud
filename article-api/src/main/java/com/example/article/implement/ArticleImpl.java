package com.example.article.implement;

import com.example.article.dto.ArticleResponse;
import com.example.article.dto.ArticleSave;
import com.example.article.mapper.ResponseMapper;
import com.example.article.models.Article;
import com.example.article.repository.ArticleDAO;
import com.example.article.service.ArticleService;
import jakarta.persistence.EntityExistsException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class ArticleImpl implements ArticleService {

    private final ArticleDAO articleRepository;
    private final ResponseMapper responseMapper;

    @Override
    public ArticleResponse createArticle(ArticleSave article) {
        return this.responseMapper.ArticleMapperResponse(this.articleRepository.save(
                Article.builder()
                        .title(article.title())
                        .content(article.content())
                        .prix(article.prix())
                        .rating(article.rating())
                        .build()
        ));


    }

    @Override
    public List<ArticleResponse> getArticles() {
        return this.articleRepository.findAll().stream().map(this.responseMapper::ArticleMapperResponse).toList();
    }

    @Override
    public ArticleResponse update(UUID id, ArticleSave article) {

        Optional<Article> articleOld = this.articleRepository.findById(id);

        if (articleOld.isPresent()) {
            Article articleUpdate = articleOld.get();
            articleUpdate.setTitle(article.title());
            articleUpdate.setContent(article.content());
            articleUpdate.setPrix(article.prix());
            articleUpdate.setRating(article.rating());
            return this.responseMapper.ArticleMapperResponse(this.articleRepository.save(articleUpdate));
        }
        throw new EntityExistsException("Article not found");
    }

    @Override
    public void delete(UUID id) {
        try {
            this.articleRepository.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }
}
