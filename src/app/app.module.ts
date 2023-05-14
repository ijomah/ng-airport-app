import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './welcome/home.component';
import { pageRoutes } from 'src/routes';
import { NavbarComponent } from './navbar/navbar.component';
import { ApiCallerService } from './services/api-caller.service';
import { SearchComponent } from './search/search.component';
import { FlighttimeComponent } from './flighttime/flighttime.component';
import { AuthButtonComponent } from './common/autho';
// Imported the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    FlighttimeComponent,
    AuthButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(pageRoutes),
    BrowserAnimationsModule,
    AuthModule.forRoot({
      domain: 'dev-0zrhohozrf3syio6.us.auth0.com',
      clientId: 'iegfxO5efYj9H51CYDWTthGwHCM2N0m4',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ],
  providers: [ApiCallerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
