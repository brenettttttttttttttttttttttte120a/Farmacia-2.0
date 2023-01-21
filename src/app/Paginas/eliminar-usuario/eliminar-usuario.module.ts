import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarUsuarioPageRoutingModule } from './eliminar-usuario-routing.module';

import { EliminarUsuarioPage } from './eliminar-usuario.page';
import { HttpClientModule } from '@angular/common/http';
import { ApiUsuarioService } from '../servicios/api-usuario.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarUsuarioPageRoutingModule,
    HttpClientModule
  ],
  declarations: [EliminarUsuarioPage],
  providers: [ApiUsuarioService]
})
export class EliminarUsuarioPageModule {}
