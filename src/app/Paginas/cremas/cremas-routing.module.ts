import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CremasPage } from './cremas.page';

const routes: Routes = [
  {
    path: '',
    component: CremasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CremasPageRoutingModule {}
