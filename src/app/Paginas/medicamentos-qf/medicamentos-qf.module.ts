import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicamentosQfPageRoutingModule } from './medicamentos-qf-routing.module';

import { MedicamentosQfPage } from './medicamentos-qf.page';
import { HttpClientModule } from '@angular/common/http';
import { ApiProductoService } from '../servicios/api-producto.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicamentosQfPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [MedicamentosQfPage],
  providers: [ApiProductoService]
})
export class MedicamentosQfPageModule {}
