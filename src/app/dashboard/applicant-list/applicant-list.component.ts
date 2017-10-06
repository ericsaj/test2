import { Application } from './../../api-types';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit {

  @Input() list: Application[];

  constructor() { }

  ngOnInit() {
  }

}
