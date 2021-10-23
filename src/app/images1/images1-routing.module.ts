import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Images1Page } from './images1.page';

const routes: Routes = [
  {
    path: '',
    component: Images1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Images1PageRoutingModule {}
