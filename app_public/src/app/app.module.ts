import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthModule } from './authentication/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModulesCompilationModule } from './common/modules-compilation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    ModulesCompilationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
