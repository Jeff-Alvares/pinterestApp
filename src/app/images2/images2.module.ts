import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Images2PageRoutingModule } from './images2-routing.module';

import { Images2Page } from './images2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Images2PageRoutingModule
  ],
  declarations: [Images2Page]
})
export class Images2PageModule {}
