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

import { AddClaimRoutingModule } from './AddClaim-routing.module';
import { AddClaimComponent } from './AddClaim.component';
import { WidgetsModule } from '../widgets/widgets.module';
import { DashboardChartsData } from '../dashboard/dashboard-charts-data';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  imports: [
    MatSnackBarModule,

    AddClaimRoutingModule,
    CardModule,
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
    AddClaimComponent
  ],
  providers: [

    DashboardChartsData,
    MatSnackBar,
    MatSnackBarConfig 

  ]
})
export class AddClaimModule {
}
