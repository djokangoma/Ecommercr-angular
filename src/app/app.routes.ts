import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { SingerComponent } from './singer/singer.component';
import { AboutComponent } from './about/about.component';
import { createComponent } from '@angular/core';
import { CreateComponent } from './create/create.component';

export const routes: Routes = [
{
    path:'',
    component :ArticleListComponent
},

{
    path:'articles/:id',
    component:SingerComponent,
    
},
{
    path:'about',
    component:AboutComponent,
    
    
},
{
    path:'create',
    component:CreateComponent,
    
}
];
