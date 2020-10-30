import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'candyidea',
    loadChildren: () => import('./pages/candyidea/candyidea.module').then( m => m.CandyideaPageModule)
  },
  {
    path: 'viewideas',
    loadChildren: () => import('./pages/viewideas/viewideas.module').then( m => m.ViewideasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
