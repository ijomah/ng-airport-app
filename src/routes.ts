import { Routes } from '@angular/router';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { HomeComponent } from './app/welcome/home.component';
import { LoginComponent } from './app/login/login.component';

export const pageRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'dashboard', component: DashboardComponent, data: {jumpIn: 'dashboardPage'}},
    {path: 'login', component: LoginComponent, data: {jumpIn: 'loginPage'}},
    {path:  '', redirectTo: 'home', pathMatch: 'full'},
]