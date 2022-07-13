import { Component, OnInit } from '@angular/core';
import {ServiceService} from 'src/app/service.service'
import {profile} from '../../models/profile'
import {cohort} from '../../models/cohort'
import {project} from '../../models/project'
//import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile!:profile[]
  project!:project[]
  cohort!:cohort[]
  image_url='https://res.cloudinary.com/jeddy/'
  constructor(private ServiceService:ServiceService,
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