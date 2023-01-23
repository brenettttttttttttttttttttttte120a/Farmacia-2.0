import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfumesQfPageRoutingModule } from './perfumes-qf-routing.module';

import { PerfumesQfPage } from './perfumes-qf.page';
import { HttpClientModule } from '@angular/common/http';
import { ApiProductoService } from '../servicios/api-producto.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfumesQfPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [PerfumesQfPage],
  providers: [ApiProductoService]

})
export class PerfumesQfPageModule {}
