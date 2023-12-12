import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddClaimComponent } from './AddClaim.component';

const routes: Routes = [
  {
    path: '',
    component: AddClaimComponent,
    data: {
      title: $localize`AddClaim`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddClaimRoutingModule {
}
