import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ApplicantDashboardComponent } from './applicant-dashboard/applicant-dashboard.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';

const dashboardRoutes: Routes = [
  { path: '', component: ApplicantDashboardComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [
    ApplicantDashboardComponent,
    ApplicantComponent,
    ApplicantListComponent
  ]
})
export class DashboardModule { }




