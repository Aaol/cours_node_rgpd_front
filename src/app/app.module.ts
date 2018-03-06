import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { LogInComponent } from './Components/log-in/log-in.component';

import { MaterialImportsModule } from './material-imports/material-imports.module';
import { RegisterComponent } from './Components/register/register.component';
import { UserService } from './services/user.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NewsletterComponent } from './Components/register/newsletter/newsletter.component';
import { HeadersInterceptor } from './Interceptors/headers.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LogInComponent,
    RegisterComponent,
    NewsletterComponent
  ],
  entryComponents: [
    LogInComponent
    , NewsletterComponent
  ],
  imports: [
    BrowserModule
    , BrowserAnimationsModule
    , HttpClientModule
    , MaterialImportsModule
    , FormsModule
    , ReactiveFormsModule
    , AppRoutingModule
  ],
  providers: [
    UserService
    , {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true,
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
