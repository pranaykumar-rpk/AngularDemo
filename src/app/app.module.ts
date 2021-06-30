import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './admin/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';
import { StatisticsComponent } from './admin/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
