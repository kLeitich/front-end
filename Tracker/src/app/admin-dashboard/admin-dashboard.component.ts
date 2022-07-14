import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {ServiceService} from 'src/app/service.service'
import { cohort } from '../models/cohort';
import { project } from '../models/project';
import { user } from '../models/user.model';
import { profile} from '../models/profile';
import { AuthenticatedUserService } from 'src/app/authenticated-user.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})

export class AdminDashboardComponent implements OnInit {
  project!: project[]
  cohort!: cohort[]
  user!: user[]
  form!: FormGroup;
  profile!:profile[]
  authenticated!:boolean 
  value=true
  is_student=false
  is_admin=false
  a_user!: any;
  is_loggedIn=false
  

    image_url='https://res.cloudinary.com/jeddy/'
  constructor(private httpClient: HttpClient,private authentication: AuthenticatedUserService) { }

  ngOnInit(): void {
    this.getProject();
    this.getCohort();
    this.getUser();
    this.getProfile();
    this.get_autheticanted_user();
  }
  getUser(){
    this.httpClient.get<any>('https://backendjw.herokuapp.com/api/users/').subscribe(
      response =>{
        console.log(response);
        this.user = response;
      }
    );
  }

  getProject(){
    const Token=localStorage.getItem('Token')
    this.httpClient.get<any>('https://backendjw.herokuapp.com/api/projects').subscribe(
      response => {
        
        console.log(response);
        this.project = response;
      }
    );
  }
  getCohort(){
    this.httpClient.get<any>('https://backendjw.herokuapp.com/api/cohort').subscribe(
      response =>{
        console.log(response);
        this.cohort = response;
      }
    );    
  }
  getProfile(){
    this.httpClient.get<any>('http://127.0.0.1:8000/api/profile').subscribe(
      response =>{
        console.log(response);
        this.profile = response;
      }
    );    
  }
  
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
  // submit(name:string,username:string, email:string, c_student:string,stack:string): void {
 
  //   this.httpClient.post('http://localhost:8000/api/users/',
  //   {
  //     name: name,
  //     username: username,
  //     email: email,
  //     c_student:c_student,
  //     stack: stack,

  //   }
  //   )
  //   .subscribe((res) => {
  //       console.log(res)
        
  //     });
  
    
  // }
  submitproject(k:string,name:string, description:string, member:string,project_image:any,url:any,date_posted:any): void {
 
    this.httpClient.post('http://localhost:8000/api/projects/',
    {
      k: k,
      name: name,
      description: description,
      member: [],
      project_image:project_image,
      url: url,
      date_posted: date_posted,

    }
    )
    .subscribe((res) => {
        console.log(res)
        
      });
  
    
  }
}
