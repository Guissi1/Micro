import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {EventClaimsDetailsComponent } from './EventClaimsDetails.component';

const routes: Routes = [
  {
    path: '',
    component: EventClaimsDetailsComponent,
    data: {
      title: $localize`EventClaimsDetails`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventClaimsDetailsRoutingModule {
}
