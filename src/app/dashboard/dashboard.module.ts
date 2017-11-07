import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ApplicantDashboardComponent } from './applicant-dashboard/applicant-dashboard.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';

import { Ng2TableModule } from 'ng2-table/ng2-table';



const dashboardRoutes: Routes = [
  { path: '', component: ApplicantDashboardComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    Ng2TableModule,
    FormsModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [
    ApplicantDashboardComponent,
    ApplicantComponent,
    ApplicantListComponent
  ]
})
export class DashboardModule { }




