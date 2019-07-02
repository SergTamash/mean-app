import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private fb: FormBuilder) { }  

  ngOnInit() {
    
  }
  public hidePassword: boolean = true;

  public togglePassword(event): void {
    event.preventDefault(); 
    this.hidePassword = !this.hidePassword;
  }

  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  }) 

  public onSubmit(): void {
    if (this.loginForm.invalid) return;

    this.login();    
  }

  private login(): void {
    this.authenticationService.login(this.loginForm.value)
      .then(() => console.log("Ura"))
      .catch((errMessage) => console.log(errMessage))                                
  }

  public logout(): void {
    this.authenticationService.logout();
  }
}
