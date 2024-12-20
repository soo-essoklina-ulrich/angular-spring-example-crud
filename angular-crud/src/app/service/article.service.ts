import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Article, ArticleSave} from '../models/Article';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private api = environment.api+'/articles';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  createForm() {
    return this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      rating: ['', Validators.required],
      prix: ['', Validators.required]
    });
  }

  sendArticle(article:ArticleSave) {
    return this.http.post<Article>(this.api, article);
  }

  getArticles() {
    return this.http.get<Article[]>(this.api);
  }

  updateArticle(id:number,article:Article) {
    return this.http.put<Article>(this.api+'/'+id, article);
  }

  deleteArticle(id:number) {
    return this.http.delete(this.api+'/'+id);
  }
}
