import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  // public credentials = {
  //   name: 'sergini',
  //   email: 'sergini@gmail.com',
  //   password: 'sergini'
  // };

  public formError: string = '';

  public credentials = {
    email: '',
    password: ''
  };

  ngOnInit() {
    
  }

  public onLoginSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'All fields are required, please try again';
    } else {
      this.login();
    }
  }

  private login(): void {
    this.authenticationService.login(this.credentials)
      .then(() => console.log("Ura"))
      .catch((errMessage) => console.log(errMessage))                                
  }

  private register(): void {
    this.authenticationService.register(this.credentials)
      .then(() => console.log("Ura"))
      .catch((errMessage) => console.log(errMessage))                                
  }

  public logout(): void {
    this.authenticationService.logout();
  }

}
