import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleCremasPageRoutingModule } from './detalle-cremas-routing.module';

import { DetalleCremasPage } from './detalle-cremas.page';
import { HttpClientModule } from '@angular/common/http';
import { ApiUsuarioService } from '../servicios/api-usuario.service';
import { ApiProductoService } from '../servicios/api-producto.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleCremasPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [DetalleCremasPage],
  providers: [ApiProductoService,ApiUsuarioService]
})
export class DetalleCremasPageModule {}
