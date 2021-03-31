import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefPage } from './ref.page';

const routes: Routes = [
  {
    path: '',
    component: RefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefPageRoutingModule {}
