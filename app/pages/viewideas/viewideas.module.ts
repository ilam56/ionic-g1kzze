import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewideasPageRoutingModule } from './viewideas-routing.module';

import { ViewideasPage } from './viewideas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewideasPageRoutingModule
  ],
  declarations: [ViewideasPage]
})
export class ViewideasPageModule {}
