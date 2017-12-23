import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BaseService {

  constructor(private http: HttpClient) { }

  public get(url): Observable<any>{
    return this.http.get<any>(url);
  }
}
