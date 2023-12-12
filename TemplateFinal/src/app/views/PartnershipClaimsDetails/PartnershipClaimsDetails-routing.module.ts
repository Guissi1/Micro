import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {PartnershipClaimsDetailsComponent } from './PartnershipClaimsDetails.component';

const routes: Routes = [
  {
    path: '',
    component: PartnershipClaimsDetailsComponent,
    data: {
      title: $localize`EventClaimsDetails`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnershipClaimsDetailsRoutingModule {
}
