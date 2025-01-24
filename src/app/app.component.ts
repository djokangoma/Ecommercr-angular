import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from "./article/article.component";
import { ArticleListComponent } from "./article-list/article-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticleListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ecommerce';
}
