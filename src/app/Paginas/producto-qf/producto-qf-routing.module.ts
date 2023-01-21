import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoQfPage } from './producto-qf.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoQfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoQfPageRoutingModule {}
