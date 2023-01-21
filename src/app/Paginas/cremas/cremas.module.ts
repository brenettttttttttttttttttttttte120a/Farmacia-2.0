import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CremasPageRoutingModule } from './cremas-routing.module';

import { CremasPage } from './cremas.page';
import { HttpClientModule } from '@angular/common/http';
import { ApiProductoService } from '../servicios/api-producto.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CremasPageRoutingModule,
    HttpClientModule
  ],
  declarations: [CremasPage],
  providers: [ApiProductoService]
})
export class CremasPageModule {}
