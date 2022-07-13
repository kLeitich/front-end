

import { Component, OnInit } from '@angular/core';
import {ServiceService} from 'src/app/service.service'
import {project} from '../models/project'
import {member} from '../models/profile'
import { user } from '../models/user.model';
import { profile } from '../models/profile';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project!:project[]
  member!:member[]
  profile!:profile[]
  user!:user[]
  
  image_url='https://res.cloudinary.com/jeddy/'

  
  constructor(private ServiceService:ServiceService) { }

  ngOnInit(): void {
    this.Project()
    this.Member()
    this.User()
  }
 
  User():void{
    this.ServiceService.User().subscribe(user=>{
      this.user=user 
      for(let item of this.user){
        console.log(user)
      }
    })
  }

  Project():void{
    this.ServiceService.Project().subscribe(project=>{
      this.project=project
    
      // console.log(project)
    })
  }

  Member():void{
    this.ServiceService.member().subscribe(member=>{
      this.member=this.member
    
      console.log(member)
    })
  }

  Profile():void{
    // console.log(this.ServiceService.Profile().subscribe(Profile))
    this.ServiceService.Profile().subscribe(profile=>{
      this.profile=profile
      console.log(profile)
    })
  }
  
}
 