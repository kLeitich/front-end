import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';
import { profile } from './models/profile';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  API_URL = `http://127.0.0.1:8000/api`
  profile!:profile[]

  constructor(private http: HttpClient) { }

  getProfile(){
    this.http.get<any>('http://127.0.0.1:8000/api/profile/').subscribe(
      response => {
        console.log(response);
        this.profile = response;
      }
    );
  }

  updateData(data: any, id: string): Observable<any> {
    return this.http.patch(`${this.API_URL}/profile/${id}`, data)
  }

}

//https://backendjw.herokuapp.com/api/profile/