import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePerfumesPageRoutingModule } from './detalle-perfumes-routing.module';

import { DetallePerfumesPage } from './detalle-perfumes.page';
import { HttpClientModule } from '@angular/common/http';
import { ApiProductoService } from '../servicios/api-producto.service';
import { ApiUsuarioService } from '../servicios/api-usuario.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePerfumesPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [DetallePerfumesPage],
  providers: [ApiProductoService,ApiUsuarioService]
})
export class DetallePerfumesPageModule {}
