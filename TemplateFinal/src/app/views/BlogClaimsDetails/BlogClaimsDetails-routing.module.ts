import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {BlogClaimsDetailsComponent } from './BlogClaimsDetails.component';

const routes: Routes = [
  {
    path: '',
    component: BlogClaimsDetailsComponent,
    data: {
      title: $localize`BlogClaimsDetails`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogClaimsDetailsRoutingModule {
}
