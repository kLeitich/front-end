import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { postProject } from 'src/app/models/project';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  name!:string
  description!:string
  project_image!:any
  url!:any
  project:postProject[]=[]

  constructor(private ProjectService:ProjectService) {}

  ngOnInit(): void {
    //this.addProject()
  }

  addProject(form:any):void{

    
    const newProject = {
      name : form.name,
      description : form.description,
      project_image : form.project_image,
      url : form.url,
      user:""
    }
    this.ProjectService.addProject(newProject).subscribe((newProject) => {
      console.log(newProject)
    })
  }
  

}
