import { Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { AddBookComponent } from './component/add-book/add-book.component';
import { BookDitailComponent } from './component/book-ditail/book-ditail.component';
import { BookListPageComponent } from './component/book-list-page/book-list-page.component'

export const routes: Routes = [
    {path:'', component: HomePageComponent},
    {path:'add-book', component: AddBookComponent},
    {path:'book-ditail/:id', component: BookDitailComponent},
    {path:'app-book-list-page', component: BookListPageComponent}
];
