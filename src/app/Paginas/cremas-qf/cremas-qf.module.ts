import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CremasQfPageRoutingModule } from './cremas-qf-routing.module';

import { CremasQfPage } from './cremas-qf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CremasQfPageRoutingModule
  ],
  declarations: [CremasQfPage]
})
export class CremasQfPageModule {}
