import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {ProgramExchangeClaimsDetailsComponent } from './ProgramExchangeClaimsDetails.component';

const routes: Routes = [
  {
    path: '',
    component: ProgramExchangeClaimsDetailsComponent,
    data: {
      title: $localize`ProgramExchangeClaimsDetails`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramExchangeClaimsDetailsRoutingModule {
}
