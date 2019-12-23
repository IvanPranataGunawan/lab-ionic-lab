import { ListBooksRoutingModule } from './books-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BooksPage } from './books.page';

const routes: Routes = [
  {
    path: '',
    component: BooksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ListBooksRoutingModule
  ],
  declarations: [BooksPage]
})
export class BooksPageModule {}
