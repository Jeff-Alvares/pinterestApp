import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Images2Page } from './images2.page';

const routes: Routes = [
  {
    path: '',
    component: Images2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Images2PageRoutingModule {}
