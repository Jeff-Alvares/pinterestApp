import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Images4Page } from './images4.page';

const routes: Routes = [
  {
    path: '',
    component: Images4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Images4PageRoutingModule {}
