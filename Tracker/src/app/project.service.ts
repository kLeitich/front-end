import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import {project, postProject} from 'src/app/models/project'
import { environment } from 'src/environments/environment';



const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  API_URL = environment.API_URL

  constructor(private http: HttpClient) { }

  getProject():Observable<project[]>{
    return this.http.get<project[]>(`${this.API_URL}/projects`)
  }

  addProject(project:postProject):Observable<postProject>{
    return this.http.post<postProject>(`${this.API_URL}/projects`,  project)
  }



}
