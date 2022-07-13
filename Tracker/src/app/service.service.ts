import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { from, Observable, observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { profile } from './models/profile';
import { project} from './models/project';
import { cohort } from './models/cohort';
import { user } from '../app/models/user.model'
import { member } from '../app/models/profile';




@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  API_URL = environment.API_URL

  constructor(private http:HttpClient) { }

  Profile():Observable<profile[]>{
    return this.http.get<profile[]>(`${this.API_URL}/profile`);
  }
  Project():Observable<project[]>{
    return this.http.get<project[]>(`${this.API_URL}/projects`)
}
  Cohort():Observable<cohort[]>{
    return this.http.get<cohort[]>(`${this.API_URL}/cohort`)
  }
  User():Observable<user[]>{
    return this.http.get<user[]>(`${this.API_URL}/users/`)
  }
  member():Observable<member[]>{
    return this.http.get<member[]>(`${this.API_URL}/member/`)
  }
}