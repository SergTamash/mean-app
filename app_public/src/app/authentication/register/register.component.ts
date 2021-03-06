import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  public hidePassword = true;
  public registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    name: ['', Validators.required],
    address: ['']
  });

  ngOnInit() {
  }

  public togglePassword(event): void {
    event.preventDefault();
    this.hidePassword = !this.hidePassword;
  }

  public onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.authenticationService.register(this.registerForm.value)
      .subscribe((resp) => {
        this.router.navigateByUrl('');
      }, (error) => {
        console.error(error.message);
      });
  }
}
