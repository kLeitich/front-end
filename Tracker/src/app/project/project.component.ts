

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
  index=0
  display:any
  project!:project[]
  member!:member[]
  profile!:profile
 
  image_url='https://res.cloudinary.com/jeddy/'
  constructor(private ServiceService:ServiceService) { }

  ngOnInit(): void {
    this.Project()
    //setInterval(this.changeIndex, 1000);
  }
 
   changeIndex() {
    if(this.index == 3) {
        this.index = 0	
      }
    this.display=this.project[this.index]
    this.index += 1
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