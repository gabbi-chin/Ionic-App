import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SensorsPage } from './sensors.page';

const routes: Routes = [
  {
    path: '',
    component: SensorsPage
  },
  {
    path: ':id',
    component: SensorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SensorsPageRoutingModule {}
