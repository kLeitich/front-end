import { Component, OnInit } from '@angular/core';
import {project} from '../models/project'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthenticatedUserService } from 'src/app/authenticated-user.service';

import {ServiceService} from 'src/app/service.service'


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  image_url='https://res.cloudinary.com/jeddy/'
  project!:project[]
  

    message = 'Please login or signup';
    userEmail!: string;
    user!: any;
    constructor(private ServiceService:ServiceService,private http: HttpClient, private router: Router,private authentication: AuthenticatedUserService) {}
  
  ngOnInit(): void {
    this.Project()

     
     
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
}
