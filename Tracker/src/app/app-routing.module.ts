import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectComponent } from './project/project.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateProfileComponent } from './users/update-profile/update-profile.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { AddProjectComponent } from  './users/add-project/add-project.component';


const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'project', component:ProjectComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'my-profile',component:UserProfileComponent},
  {path:'update-profile',component:UpdateProfileComponent},
  {path: 'admin-dashboard', component:AdminDashboardComponent},
  {path:'add-project',component:AddProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// array of all routing components
export const routingComponents = [LoginComponent]