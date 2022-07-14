import { Component, OnInit } from '@angular/core';
import {ServiceService} from 'src/app/service.service'
import {profile} from '../../models/profile'
import {cohort} from '../../models/cohort'
import {project} from '../../models/project'
//import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { AuthenticatedUserService } from 'src/app/authenticated-user.service';
import { user } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile!:profile[]
  project!:project[]
  cohort!:cohort[]
  authenticated!:boolean 
  value=true
  is_student=false
  is_admin=false
  a_user!: any;
  is_loggedIn=false
  user!:user
  
  image_url='https://res.cloudinary.com/jeddy/'
  constructor(private ServiceService:ServiceService,
    private authentication: AuthenticatedUserService,
    private httpClient: HttpClient
             
    ) { }
  
  
  ngOnInit(): void {
    this.Profile()
    this.Cohort()
    this.Project()

    this.getProject()
    this.getProfile()
    
    // this.authservice.Profile().subscribe((user:any)=>{
    //   console.log(user);
    // })
    
  }
  Profile():void{
    // console.log(this.ServiceService.Profile().subscribe(Profile))
    this.ServiceService.Profile().subscribe(profile=>{
      this.profile=profile
      console.log(profile)
    })
  }



  
  Cohort():void{
    // console.log(this.ServiceService.Profile().subscribe(Profile))
    this.ServiceService.Cohort().subscribe(cohort=>{
      this.cohort=cohort
      console.log(cohort)
    })
  }
  Project():void{
    this.ServiceService.Project().subscribe(project=>{
      this.project=project
      for(let item of this.project){
        console.log(this.image_url)
      }
      // console.log(project)
    })
  }

//function
get_autheticanted_user(){
  this.authentication.getUser().subscribe((response) => {
    console.log(response)
    // if (response.id) {
      this.a_user = response;
      console.log(this.a_user)
      if (/@([a-z\S]+)/.exec(String(this.a_user.email))) {
        if (
          /@([a-z\S]+)/.exec(String(this.a_user.email))![1] ==
          'student.moringaschool.com'
        ) {
          this.is_student=true;
        } else {
          this.is_admin=true;
        }
      }
    // }
  });
};




  getProject(){
    this.httpClient.get<any>('http://127.0.0.1:8000/api/projects/').subscribe(
      response => {
        console.log(response);
        this.project = response;
      }
    );
  }

  getProfile(){
    this.httpClient.get<any>('http://127.0.0.1:8000/api/profile/').subscribe(
      response => {
        console.log(response);
        this.profile = response;
      }
    );
  }
}