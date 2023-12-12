import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogModuleRoutingModule } from './blog-module-routing.module';


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
}from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { BlogComponent } from '../blog-module/blog/blog.component';
import { OneblogComponent } from '../blog-module/oneblog/oneblog.component';

import { WidgetsModule } from '../widgets/widgets.module';
import { DashboardChartsData } from '../dashboard/dashboard-charts-data';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    MatIconModule,
    MatSnackBarModule,
    MatListModule,
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
    WidgetsModule,
    CommonModule,
    BlogModuleRoutingModule
  ],
  declarations:[
    BlogComponent,
    OneblogComponent
    
  ],
  providers: [
    DashboardChartsData 
  ]
})
export class BlogModuleModule { }
