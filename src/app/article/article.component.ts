import { Component } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  article!:Article
  ngOnInit():void{
    this.article = {
      id : 1,
      title : "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      description : "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      price : 120,
      category :"men's clothing",
      image : "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating : {
        rate:3.5,
        count : 34
      }
    }
  }
}
