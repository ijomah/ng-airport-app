import { Routes } from '@angular/router';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { HomeComponent } from './app/welcome/home.component';
import { LoginComponent } from './app/login/login.component';
import { FlighttimeComponent } from './app/flighttime/flighttime.component';

export const pageRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'flightTime', component: FlighttimeComponent, data:  {jumpIn: 'flightTime'}},
    {path: 'dashboard', component: DashboardComponent, data: {jumpIn: 'dashboardPage'}},
    {path: 'login', component: LoginComponent, data: {jumpIn: 'loginPage'}},
    {path:  '', redirectTo: 'home', pathMatch: 'full'},
]