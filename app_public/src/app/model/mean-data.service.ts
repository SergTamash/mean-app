import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { BROWSER_STORAGE } from './storage';
import { AuthResponse } from './authresponse';

@Injectable({
  providedIn: 'root'
})
export class MeanDataService {

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) { }

  private apiBaseUrl = 'http://localhost:3000/api';

  public testRequest(): Observable<any> {
    const url = `${this.apiBaseUrl}`;
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

  public login(user: User): Promise<AuthResponse> {
    const url = `${this.apiBaseUrl}/login`;
    return this.http
              .post(url, user)
              .toPromise()
              .then(res => res as AuthResponse) 
              .catch(this.handleError);
  }
  public register(user: User): Promise<AuthResponse> {
    const url = `${this.apiBaseUrl}/register`;
    return this.http
              .post(url, user)
              .toPromise()
              .then(res => res as AuthResponse) 
              .catch(this.handleError);
  }
}
