import { EmployeeService } from './services/employee.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';


import { HttpModule } from '@angular/http'

const appRoute: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DashboardComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot(appRoute)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],


})
export class AppModule { }
