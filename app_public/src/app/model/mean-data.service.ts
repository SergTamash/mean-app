import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from './user';
import { BROWSER_STORAGE } from './storage';
import { AuthResponse } from './authresponse';
import { EventItem } from './event';

const PROTOCOL = 'http';
const PORT = 3000;

@Injectable()
export class MeanDataService {

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage) {
      this.apiBaseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api`;
  }

  private apiBaseUrl: string;

  public testRequest(): Observable<any> {
    const url = `${this.apiBaseUrl}`;
    return this.http
      .get(url, {responseType: 'text'});
  }

  private handleErrorPromise(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  private handleError(error: HttpErrorResponse): Observable<object> {
    console.error('Something has gone wrong', error);
    return throwError(error.error || error);
  }

  public login(user: User): Observable<AuthResponse | object> {
    const url = `${this.apiBaseUrl}/login`;
    return this.http
            .post<AuthResponse>(url, user)
            .pipe(
              catchError(this.handleError)
            );
  }

  public register(user: User): Observable<AuthResponse | object> {
    const url = `${this.apiBaseUrl}/register`;
    return this.http
            .post<AuthResponse>(url, user)
            .pipe(
              catchError(this.handleError)
            );
  }

  public getEventsList(): Observable<EventItem[] | object> {
    const url = `${this.apiBaseUrl}/events`;
    return this.http
            .get<EventItem[]>(url)
            .pipe(
              catchError(this.handleError)
            );
  }

  public createEvent(event: EventItem): Observable<EventItem | object> {
    const url = `${this.apiBaseUrl}/events`;
    return this.http
            .post<EventItem>(url, event)
            .pipe(
              catchError(this.handleError)
            );
  }

  public updateEvent(event: EventItem): Observable<EventItem | object> {
    const url = `${this.apiBaseUrl}/events${event.id}`;
    return this.http
            .put<EventItem>(url, event)
            .pipe(
              catchError(this.handleError)
            );
  }

  public deleteEvent(event: EventItem): Observable<object> {
    const url = `${this.apiBaseUrl}/events${event.id}`;
    return this.http
            .delete(url)
            .pipe(
              catchError(this.handleError)
            );
  }
}
