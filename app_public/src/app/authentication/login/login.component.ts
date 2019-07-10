import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public hidePassword = true;

  constructor(private authenticationService: AuthenticationService, private fb: FormBuilder) { }

  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  ngOnInit() {
  }

  public togglePassword(event): void {
    event.preventDefault();
    this.hidePassword = !this.hidePassword;
  }

  public onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.login();
  }

  private login(): void {
    this.authenticationService.login(this.loginForm.value)
      .subscribe((resp) => {

      }, (error) => {
        console.error(error.message);
      });
  }

  public logout(): void {
    this.authenticationService.logout();
  }
}
