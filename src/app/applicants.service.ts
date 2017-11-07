import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Application } from './common/data-types';

@Injectable()
export class ApplicantsService {

  constructor(private http: HttpClient) { }

  private static LOCAL_STORAGE_KEY: string = 'applicants-data';
  private static LOCAL_STORAGE_TIME_KEY: string = 'applicants-data-expires-at'; // in unix time
  private static LOCAL_STORAGE_CACHE_DURATION: number = 10; // in days
 

  loadApplications(): Observable<Application[]> {

    const data = JSON.parse(localStorage.getItem(ApplicantsService.LOCAL_STORAGE_KEY));
    const expiresAt = JSON.parse(localStorage.getItem(ApplicantsService.LOCAL_STORAGE_TIME_KEY));

    // Check if data is set and not expired, if so return it
    if (data !== null && Date.now() < Math.max(expiresAt, 0)) {
      return Observable.of(data);
    }

    return this.http.get<Application[]>('http://localhost:4200/assets/data/applicants.json')
    .do(data => this.cacheApplicantsData(data));
  }


  private cacheApplicantsData(data) {
      const expiresAt = Date.now() + (1000 * 60 * 60 * 24 * ApplicantsService.LOCAL_STORAGE_CACHE_DURATION);
      localStorage.setItem(ApplicantsService.LOCAL_STORAGE_KEY, JSON.stringify(data));
      localStorage.setItem(ApplicantsService.LOCAL_STORAGE_TIME_KEY, JSON.stringify(expiresAt));
  }

  saveApplicantsData(data) {
    this.cacheApplicantsData(data);
    //this.cacheApplicantsData(data.value);
  }
}
