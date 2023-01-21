import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfumesQfPageRoutingModule } from './perfumes-qf-routing.module';

import { PerfumesQfPage } from './perfumes-qf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfumesQfPageRoutingModule
  ],
  declarations: [PerfumesQfPage]
})
export class PerfumesQfPageModule {}
