import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Images4PageRoutingModule } from './images4-routing.module';

import { Images4Page } from './images4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Images4PageRoutingModule
  ],
  declarations: [Images4Page]
})
export class Images4PageModule {}
