import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedUserService {
  constructor(private http: HttpClient) {}
  ngOnInit() {}
  user:any
  is_loggedIn=new BehaviorSubject(false)

  getUser() {
    const Token=localStorage.getItem('Token')
    return this.http.get<User>(
      'https://backendjw.herokuapp.com/api/authenticated_user/',

      { withCredentials: true,headers:{Authorization:'Bearer '+ Token } }
    );
  }

  logOut() {
    return this.http.get('https://backendjw.herokuapp.com/api/logout/', {
      withCredentials: true,
    });
  }
}