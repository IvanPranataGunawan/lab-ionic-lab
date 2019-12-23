import { ListUKMRoutingModule } from './list-ukm-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ListUKMPage } from './list-ukm.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ListUKMRoutingModule
  ],
  declarations: [ListUKMPage]
})
export class ListUKMPageModule {}
