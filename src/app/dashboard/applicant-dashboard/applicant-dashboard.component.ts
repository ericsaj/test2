import { Component, OnInit } from '@angular/core';
import { ApplicantsService } from './../../applicants.service';
import { Observable } from 'rxjs/Observable';
import { Application } from './../../common/data-types';

@Component({
  selector: 'app-applicant-dashboard',
  templateUrl: './applicant-dashboard.component.html',
  styleUrls: ['./applicant-dashboard.component.css']
})
export class ApplicantDashboardComponent implements OnInit {
  applications$: Observable<Application[]>;
  selectedApplication: Application;
  applicationsList: Application[];

  constructor(private svc:ApplicantsService) { 
    //this.applications$ = this.svc.loadApplications();
    this.svc.loadApplications()
    .subscribe( data => this.applicationsList = data );
  }

  ngOnInit() {
  }

  setSelectedApplication( application: Application) {
    this.selectedApplication = application;
  }

  setBookmarkedApplication( application: Application) {
    if (application.bookmarked == 1 ) {
      application.bookmarked = 0;
    } else {
      application.bookmarked = 1;
    }
    this.selectedApplication = application;
    this.svc.saveApplicantsData(this.applicationsList);
    //this.svc.saveApplicantsData(this.applications$);
  }
}
