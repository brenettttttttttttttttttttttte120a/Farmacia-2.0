import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfumesPageRoutingModule } from './perfumes-routing.module';

import { PerfumesPage } from './perfumes.page';
import { HttpClientModule } from '@angular/common/http';
import { ApiProductoService } from '../servicios/api-producto.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfumesPageRoutingModule,
    HttpClientModule
  ],
  declarations: [PerfumesPage],
  providers: [ApiProductoService],

})
export class PerfumesPageModule {}
