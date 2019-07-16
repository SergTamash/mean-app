import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthModule } from './authentication/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModulesCompilationModule } from './common/modules-compilation.module';
import { ModelModule } from './model/model.module';
import { HomepageComponent } from './homepage/homepage.component';
import { EventModule } from './event/event.module';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    ModulesCompilationModule,
    ModelModule,
    EventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
