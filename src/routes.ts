import { Routes } from '@angular/router';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { HomeComponent } from './app/welcome/home.component';
import { LoginComponent } from './app/login/login.component';
import { FlighttimeComponent } from './app/flighttime/flighttime.component';
import { AuthGuard } from '@auth0/auth0-angular';

export const pageRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent, data: {jumpIn: 'dashboardPage'}},
    {path: 'flightTime', canActivate: [AuthGuard], component: FlighttimeComponent, data:  {jumpIn: 'flightTime'}},
    {path: 'login', component: LoginComponent, data: {jumpIn: 'loginPage'}},
    {path:  '', redirectTo: 'home', pathMatch: 'full'},
]