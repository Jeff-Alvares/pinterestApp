import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Images1PageRoutingModule } from './images1-routing.module';

import { Images1Page } from './images1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Images1PageRoutingModule
  ],
  declarations: [Images1Page]
})
export class Images1PageModule {}
