import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [LoginComponent],
  providers: [AuthenticationService]
})
export class AuthModule { }
