import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class EmailService {

  constructor(private http: HttpClient) { }

  public get(): Observable<any>{
    return this.http.get<any>(environment.apiUrl).pipe(
      catchError(this.handleError('api/emails', []))
    );
  }

  public getLocation(): Observable<any>{
    return this.http.get<any>(environment.apiUrl2).pipe(
      catchError(this.handleError('api/location', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
