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
import { ProgramExchangeClaimsDetailsRoutingModule } from './ProgramExchangeClaimsDetails-routing.module';
import { ProgramExchangeClaimsDetailsComponent } from './ProgramExchangeClaimsDetails.component';
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
    ProgramExchangeClaimsDetailsRoutingModule,
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
    ProgramExchangeClaimsDetailsComponent
    
  ],
  providers: [
    DashboardChartsData,
    MatSnackBar,
    MatSnackBarConfig 
  ]
})
export class ProgramExchangeClaimsDetailsModule {
}
