import {Component, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {ArticleService} from './service/article.service';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Article} from './models/Article';
import {MessageService} from 'primeng/api';
import {CurrencyPipe} from '@angular/common';
import {Button, ButtonDirective, ButtonIcon} from 'primeng/button';
import {Tooltip} from 'primeng/tooltip';
import {InputText} from 'primeng/inputtext';
import {FloatLabel} from 'primeng/floatlabel';
import {Dialog} from 'primeng/dialog';
import {Toast} from 'primeng/toast';
import {Step, StepList, StepPanel, StepPanels, Stepper} from 'primeng/stepper';
import {Rating} from 'primeng/rating';
import {Textarea} from 'primeng/textarea';

@Component({
  selector: 'app-root',
  imports: [
    TableModule,
    CurrencyPipe,
    Tooltip,
    InputText,
    FloatLabel,

    Button,
    Dialog,
    ReactiveFormsModule,
    Toast,
    Stepper,
    StepList,
    Step,
    StepPanels,
    StepPanel,
    Rating,
    Textarea
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[MessageService]
})
export class AppComponent implements OnInit {
  form! :FormGroup


  article!:Article ;
  articlelist:Article[] = [];
  articlelistO:Article[] = [];

  visible:boolean = false;
  visibleupdate:boolean = false;

  constructor(
    private articleService: ArticleService,
    private messageService: MessageService
  ) {
  }
  ngOnInit(): void {
    this.createForm();
    this.getArticles();
  }

  filterArticle(event:Event) {
    const value = (event.target as HTMLInputElement).value;
    if(value.length>0){
      this.articlelist = this.articlelistO.filter((a) => a.title.toLowerCase().includes(value.toLowerCase()));
    }
    else {
      this.articlelist = this.articlelistO;
    }
  }

  showModal() {
    this.visible = true;
  }


  selectArticle(id:number) {
    this.article = this.articlelist.find((a) => a.id === id) as Article;
    this.form.setValue({
      title: this.article.title,
      content: this.article.content,
      rating: this.article.rating,
      prix: this.article.prix
    });
    this.visibleupdate = true;
  }



  createForm() {
    this.form = this.articleService.createForm();
  }

  sendArticle() {
    this.articleService.sendArticle(this.form.value).subscribe(
      (data) => {
        this.articlelist.push(data);
        this.articlelistO = this.articlelist;
        this.messageService.add({severity:'success', summary:'Success', detail:'Article Added'});
        this.visible = false;
        this.form.reset();
      },
      (error) => {
        this.messageService.add({severity:'error', summary:'Error', detail:error.message});
        console.log(error);
      }
    );
  }

  getArticles() {
    this.articleService.getArticles().subscribe(
      (data) => {
        this.articlelistO =this.articlelist = data;

      },
      (error) => {
        this.messageService.add({severity:'error', summary:'Error', detail:error.message});
        console.log(error);
      }

    );
  }

  updateArticle() {
    this.articleService.updateArticle(this.article.id,this.form.value).subscribe(
      (data) => {
        this.messageService.add({severity:'success', summary:'Success', detail:'Article Updated'});
        this.articlelist = this.articlelist.map((a) => a.id === this.article.id ? data : a);
        this.articlelistO = this.articlelist;
        this.visibleupdate = false;
      },
      (error) => {
        this.messageService.add({severity:'error', summary:'Error', detail:error.message});
        console.log(error);
      }
    );
  }

  deleteArticle(id:number) {
    this.articleService.deleteArticle(id).subscribe(
      () => {
        this.messageService.add({severity:'success', summary:'Success', detail:'Article Deleted'});
        this.articlelist = this.articlelist.filter((a) => a.id !== id);
        this.articlelistO = this.articlelist;
      },
      (error) => {
        this.messageService.add({severity:'error', summary:'Error', detail:error.message});
        console.log(error);
      }
    );
  }
}
