import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ReactiveFormsModule } from '@angular/forms';
//import { AngularMyDatePickerModule } from 'angular-mydatepicker';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './welcome/home.component';
import { pageRoutes } from 'src/routes';
import { NavbarComponent } from './navbar/navbar.component';
import { ApiCallerService } from './services/api-caller.service';
import { SearchComponent } from './search/search.component';
import { FlighttimeComponent } from './flighttime/flighttime.component';
// import { CurrentComponent } from './timestamp/current/current.component';
// import { ConverterComponent } from './timestamp/converter/converter.component';
// import { TimestampService } from './timestamp/timestamp.service';
//import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    FlighttimeComponent,
    // CurrentComponent,
    // ConverterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(pageRoutes),
    BrowserAnimationsModule,
  //  AngularMyDatePickerModule
  ],
  providers: [ApiCallerService,
    // TimestampService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
