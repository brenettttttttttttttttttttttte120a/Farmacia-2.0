import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoQfPageRoutingModule } from './producto-qf-routing.module';

import { ProductoQfPage } from './producto-qf.page';
import { ApiProductoService } from '../servicios/api-producto.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoQfPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ProductoQfPage]
  ,
  providers: [ApiProductoService]
})
export class ProductoQfPageModule {}
