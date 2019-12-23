import { BooksPage } from './books.page';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
      path: 'tabs',
      component: BooksPage,
      children: [
        {
          path: 'utama',
          children: [
            {
              path: '',
              loadChildren: './utama/utama.module#UtamaPageModule'
            }
          ]
        },
        {
          path: 'favorite',
          children: [
            {
              path: '',
              loadChildren: './favorite/favorite.module#FavoritePageModule'
            }
          ]
        },
        {
          path: '',
          redirectTo: '/books/tabs/utama',
          pathMatch: 'full'
        }
      ]
    },
    {
        path: '',
        redirectTo: '/books/tabs/utama',
        pathMatch: 'full'
    }
  ];

  @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
  })

  export class ListBooksRoutingModule {}