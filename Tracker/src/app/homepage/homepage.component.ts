import { Component, OnInit } from '@angular/core';
import {project} from '../models/project'
import {ServiceService} from 'src/app/service.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  image_url='https://res.cloudinary.com/jeddy/'
  project!:project[]
  constructor(private ServiceService:ServiceService) { }


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
