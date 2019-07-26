import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarsComponent } from './cars/cars.component';
import { ReportComponent } from './report/report.component';
import { CarsAddComponent } from './cars/cars-add/cars-add.component';

@NgModule({
  //Components go in here
  declarations: [
    AppComponent,
    DashboardComponent,
    CarsComponent,
    ReportComponent,
    CarsAddComponent
  ],
  //Modules go in here
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  //Services go in here
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
