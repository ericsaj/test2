import { Application, fakeApiApplicationData } from './../../api-types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-dashboard',
  templateUrl: './applicant-dashboard.component.html',
  styleUrls: ['./applicant-dashboard.component.css']
})
export class ApplicantDashboardComponent implements OnInit {

  applications: Application[];

  constructor() { 
    this.applications = fakeApiApplicationData;
  }

  ngOnInit() {
  }

}
