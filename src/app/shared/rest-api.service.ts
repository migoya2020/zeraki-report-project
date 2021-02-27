import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

// Define results API
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get() method => Fetch employees list
  getEmployees(): Observable<any> {
    return this.http.get<any>(this.apiURL + '/results')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  handleError(handleError: any): import("rxjs").OperatorFunction<any, any> {
    throw new Error('Method not implemented.');
  }




}
