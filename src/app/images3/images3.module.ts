import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Images3PageRoutingModule } from './images3-routing.module';

import { Images3Page } from './images3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Images3PageRoutingModule
  ],
  declarations: [Images3Page]
})
export class Images3PageModule {}
