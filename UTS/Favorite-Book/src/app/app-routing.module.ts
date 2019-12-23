import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'books', loadChildren: './books/books.module#BooksPageModule' },
  { path: 'profil', loadChildren: './profil/profil.module#ProfilPageModule' },
  // { path: 'utama', loadChildren: './books/utama/utama.module#UtamaPageModule' },
  // { path: 'favorite', loadChildren: './books/favorite/favorite.module#FavoritePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
