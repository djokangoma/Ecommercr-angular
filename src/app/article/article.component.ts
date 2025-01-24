import { Component, Input} from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent{
  @Input() article!:Article
}

