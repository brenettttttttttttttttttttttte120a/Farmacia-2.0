import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleCremasPage } from './detalle-cremas.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleCremasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleCremasPageRoutingModule {}
