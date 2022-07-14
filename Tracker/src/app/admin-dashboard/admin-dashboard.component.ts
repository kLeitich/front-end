import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ServiceService} from 'src/app/service.service'
import { cohort } from '../models/cohort';
import { project } from '../models/project';
import { user } from '../models/user.model';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})

export class AdminDashboardComponent implements OnInit {
  project!: project[]
  cohort!: cohort[]
  user!: user[]
    image_url='https://res.cloudinary.com/jeddy/'
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getProject();
    this.getCohort();
    this.getUser();
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

}
