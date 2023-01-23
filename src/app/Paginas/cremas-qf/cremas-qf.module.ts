import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CremasQfPageRoutingModule } from './cremas-qf-routing.module';

import { CremasQfPage } from './cremas-qf.page';
import { HttpClientModule } from '@angular/common/http';
import { ApiProductoService } from '../servicios/api-producto.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CremasQfPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [CremasQfPage],
  providers: [ApiProductoService]
})
export class CremasQfPageModule {}
