import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Application } from './../../common/data-types';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  @Input() application: Application;
  @Output() setBookmark = new EventEmitter<Application>();
  
  weekDays: Array<{id: string, full: string}>;
  
  constructor() {
    this.weekDays = [
      {id: 'Su', full: 'Sunday'},
      {id: 'M', full: 'Monday'},
      {id: 'T', full: 'Tuesday'},
      {id: 'W', full: 'Wednesday'},
      {id: 'Th', full: 'Thursday'},
      {id: 'F', full: 'Friday'},
      {id: 'S', full: 'Saturday'},
    ]
   }

  ngOnInit() {
  }

  bookmark( application : Application) {
    this.setBookmark.emit(application);
  }
}
