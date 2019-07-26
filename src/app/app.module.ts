import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarsComponent } from './cars/cars.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  //Components go in here
  declarations: [
    AppComponent,
    DashboardComponent,
    CarsComponent,
    ReportComponent
  ],
  //Modules go in here
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //Services go in here
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
