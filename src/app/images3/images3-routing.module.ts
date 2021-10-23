import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Images3Page } from './images3.page';

const routes: Routes = [
  {
    path: '',
    component: Images3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Images3PageRoutingModule {}
