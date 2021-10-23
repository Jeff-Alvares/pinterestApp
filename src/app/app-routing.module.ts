import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'actualizar',
    loadChildren: () => import('./actualizar/actualizar.module').then( m => m.ActualizarPageModule)
  },
  {
    path: 'images1',
    loadChildren: () => import('./images1/images1.module').then( m => m.Images1PageModule)
  },
  {
    path: 'images2',
    loadChildren: () => import('./images2/images2.module').then( m => m.Images2PageModule)
  },
  {
    path: 'images3',
    loadChildren: () => import('./images3/images3.module').then( m => m.Images3PageModule)
  },
  {
    path: 'images4',
    loadChildren: () => import('./images4/images4.module').then( m => m.Images4PageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
