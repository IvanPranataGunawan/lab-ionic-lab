import { ListUKMPage } from './list-ukm.page';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
      path: 'tabs',
      component: ListUKMPage,
      children: [
        {
          path: 'home',
          children: [
            {
              path: '',
              loadChildren: './home/home.module#HomePageModule'
            }
          ]
        },
        {
          path: 'profil',
          children: [
            {
              path: '',
              loadChildren: './profil/profil.module#ProfilPageModule'
            }
          ]
        },
        {
          path: '',
          redirectTo: '/list-ukm/tabs/home',
          pathMatch: 'full'
        }
      ]
    },
    {
        path: '',
        redirectTo: '/list-ukm/tabs/home',
        pathMatch: 'full'
    }
  ];

  @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
  })

  export class ListUKMRoutingModule {}