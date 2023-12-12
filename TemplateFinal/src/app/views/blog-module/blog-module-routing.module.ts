import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { OneblogComponent } from './oneblog/oneblog.component';

const routes: Routes = [
  {
    path: 'blog',  // removed 'blog' 
    component: BlogComponent,
    data: {
      title: $localize`blog`
    }
  },
  {
    path: 'blog/:id',  // removed 'blog/'
    component: OneblogComponent,
    data: {
      title: 'blog info'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogModuleRoutingModule { }
