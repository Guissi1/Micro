import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import {
 
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { Component, Input } from '@angular/core';
import { PartnershipClaimsDetailsRoutingModule } from './PartnershipClaimsDetails-routing.module';
import { PartnershipClaimsDetailsComponent } from './PartnershipClaimsDetails.component';
import { WidgetsModule } from '../widgets/widgets.module';
import { DashboardChartsData } from '../dashboard/dashboard-charts-data';
import { CardsComponent } from '../base/cards/cards.component';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar';
import { BaseModule } from '../base/base.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    NgxPaginationModule,
    MatSnackBarModule,
    PartnershipClaimsDetailsRoutingModule,
    CardModule,
    BaseModule ,
    NavModule,
    IconModule,
    TabsModule,
    CommonModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    FormsModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,
    TableModule,
    WidgetsModule
  ],
  declarations: [
    PartnershipClaimsDetailsComponent
    
  ],
  providers: [
    DashboardChartsData,
    MatSnackBar,
    MatSnackBarConfig 
  ]
})
export class PartnershipClaimsDetailsModule {
}
