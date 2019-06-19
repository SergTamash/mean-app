import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeanDataService {

  constructor(
    private http: HttpClient
  ) { }

  private apiBaseUrl = 'http://localhost:3000/api';

  public testRequest(): Observable<any> {
    const url: string = `${this.apiBaseUrl}`;
    return this.http
      .get(url, {responseType: 'text'})
      // .toPromise()
      // .then(response => response)
      // .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
