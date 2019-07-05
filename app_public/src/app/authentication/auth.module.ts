import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './authentication.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ModulesCompilationModule } from '../common/modules-compilation.module';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    FormsModule,
    CommonModule,
    ModulesCompilationModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [LoginComponent, RegisterComponent],
  providers: [AuthenticationService]
})
export class AuthModule { }
