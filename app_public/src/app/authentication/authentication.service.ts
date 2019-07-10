import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../model/storage';
import { User } from '../model/user';
import { AuthResponse } from '../model/authresponse';
import { MeanDataService } from '../model/mean-data.service';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class AuthenticationService {

  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage,
    private meanDataService: MeanDataService) { 
     
    }

  public getToken(): string {
    return this.storage.getItem('mean-token');
  }

  public saveToken(token: string): void {
    this.storage.setItem('mean-token', token);
  }

  public login(user: User): Observable<AuthResponse> {
    return this.meanDataService.login(user)
            .pipe(
              map(
                (resp: AuthResponse) => {
                  this.saveToken(resp.token);
                  return resp;
                }
              )
            );
  }

  public register(user: User): Observable<AuthResponse> {
    return this.meanDataService.register(user)
            .pipe(
              map(
                (resp: AuthResponse) => {
                  this.saveToken(resp.token);
                  return resp;
                }
              )
            );
  }

  public logout(): void {
    this.storage.removeItem('mean-token');
  }

  public isLoggedIn(): boolean {
    const token: string = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }

  public getCurrentUser(): User {
    if (this.isLoggedIn()) {
      const token: string = this.getToken();
      const { email, name } = JSON.parse(atob(token.split('.')[1]));
      return { email, name } as User;
    }
  }
}
