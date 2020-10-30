import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandyideaPageRoutingModule } from './candyidea-routing.module';

import { CandyideaPage } from './candyidea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandyideaPageRoutingModule
  ],
  declarations: [CandyideaPage]
})
export class CandyideaPageModule {}
