import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandyideaPage } from './candyidea.page';

const routes: Routes = [
  {
    path: '',
    component: CandyideaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandyideaPageRoutingModule {}
