import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarUsuarioPageRoutingModule } from './modificar-usuario-routing.module';

import { ModificarUsuarioPage } from './modificar-usuario.page';
import { HttpClientModule } from '@angular/common/http';
import { ApiUsuarioService } from '../servicios/api-usuario.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarUsuarioPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [ModificarUsuarioPage],
 providers: [ApiUsuarioService]
})
export class ModificarUsuarioPageModule {}
