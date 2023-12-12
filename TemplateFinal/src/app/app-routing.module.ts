import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    
    children: [
      
      {

        path: 'AddClaim',

        loadChildren: () =>
          import('./views/AddClaim/AddClaim.module').then((m) => m.AddClaimModule)
      },
        {
        path: 'ClaimsList',
        loadChildren: () =>
          import('./views/ClaimsList/ClaimsList.module').then((m) => m.ClaimsListModule)
      },
      {
        path: 'EventClaimsDetails/:claimId',
        loadChildren: () =>
          import('./views/EventClaimsDetails/EventClaimsDetails.module').then((m) => m.EventClaimsDetailsModule)
      },
      {
        path: 'PartnershipClaimsDetails/:claimId',
        loadChildren: () =>
          import('./views/PartnershipClaimsDetails/PartnershipClaimsDetails.module').then((m) => m.PartnershipClaimsDetailsModule)
      },
      {
        path: 'BlogClaimsDetails/:claimId',
        loadChildren: () =>
          import('./views/BlogClaimsDetails/BlogClaimsDetails.module').then((m) => m.BlogClaimsDetailsModule)
      },
      {
        path: 'ExchangeProgramClaimsDetails/:claimId',
        loadChildren: () =>
          import('./views/ProgramExchangeClaimsDetails/ProgramExchangeClaimsDetails.module').then((m) => m.ProgramExchangeClaimsDetailsModule)
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./views/blog-module/blog-module.module').then((m) => m.BlogModuleModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
