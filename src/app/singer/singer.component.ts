import { Component, inject } from '@angular/core';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singer',
  imports: [],
  templateUrl: './singer.component.html',
  styleUrl: './singer.component.css'
})
export class SingerComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  article!: Article | undefined
  service: ArticleService = inject(ArticleService)
  articleId = -1

  ngOnInit(){
    this.articleId = Number(this.route.snapshot.paramMap.get("id"))
    this.article = this.service.getOne(this.articleId)
  }

}
