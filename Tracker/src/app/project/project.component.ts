

import { Component, OnInit } from '@angular/core';
import {ServiceService} from 'src/app/service.service'
import {project} from '../models/project'
import {member} from '../models/profile'
import { profile } from '../models/profile';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project!:project[]
  member!:member[]
  profile!:profile
 
  image_url='https://res.cloudinary.com/jeddy/'
  constructor(private ServiceService:ServiceService) { }

  ngOnInit(): void {
    this.Project()
   
  }
 

  Project():void{
    this.ServiceService.Project().subscribe(project=>{
      this.project=project
    
      // console.log(project)
    })
  }
}