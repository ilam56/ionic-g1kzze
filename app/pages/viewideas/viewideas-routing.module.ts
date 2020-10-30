import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewideasPage } from './viewideas.page';

const routes: Routes = [
  {
    path: '',
    component: ViewideasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewideasPageRoutingModule {}
