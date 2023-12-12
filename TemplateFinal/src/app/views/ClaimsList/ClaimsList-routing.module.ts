import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {ClaimsListComponent } from './ClaimsList.component';

const routes: Routes = [
  {
    path: '',
    component: ClaimsListComponent,
    data: {
      title: $localize`ClaimsList`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimsListRoutingModule {
}
