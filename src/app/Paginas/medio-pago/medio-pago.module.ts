import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedioPagoPageRoutingModule } from './medio-pago-routing.module';

import { MedioPagoPage } from './medio-pago.page';
import { ApiUsuarioService } from '../servicios/api-usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiProductoService } from '../servicios/api-producto.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedioPagoPageRoutingModule,
    HttpClientModule
  ],
  declarations: [MedioPagoPage],
  providers :[ApiUsuarioService,ApiProductoService]
})
export class MedioPagoPageModule {}
