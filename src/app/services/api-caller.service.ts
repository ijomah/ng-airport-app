import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IFlight } from '../common/data.model';


@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  constructor(private http: HttpClient) { }

  getApiData(url: string): Observable<IFlight[]> {
    return this.http.get <IFlight[]>(url)
      .pipe(
        retry(5),
        catchError(this.errHandler)
      )
  }

    errHandler(error: HttpErrorResponse) {
      console.error(error);
      if (error.status === 0) {
        console.error('An error ocurred due to network', error.error)
      } else {
        console.error(`Error from backend, ${error.status}, body was:`, error.error);
      }

      return throwError(
        `There was little hitch; please try again later ${error.error}`
      )
    }
}

