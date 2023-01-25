import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallePerfumesPage } from './detalle-perfumes.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePerfumesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePerfumesPageRoutingModule {}
