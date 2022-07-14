import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UpdateProfileComponent } from './users/update-profile/update-profile.component';
import { LoginComponent } from './users/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectComponent } from './project/project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { ProjectFormComponent } from './project-form/project-form.component';

import { CohortComponent } from '../app/cohort/cohort.component';
import { UserComponent } from './user/user.component';

import { DirectiveDirective } from './directive.directive';
import { DatePipe } from './date.pipe';
import { AddProjectComponent } from './users/add-project/add-project.component';




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    routingComponents,
    LoginComponent,
    NavbarComponent,
    UserProfileComponent,
    UpdateProfileComponent,
    ProjectFormComponent,

    ProjectComponent,
    AdminDashboardComponent,
    CohortComponent,
    UserComponent,

    DirectiveDirective,
    AdminDashboardComponent ,
    DatePipe,
    AddProjectComponent
  

  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
