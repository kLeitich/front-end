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
      'http://127.0.0.1:8000/api/authenticated_user/',

      { withCredentials: true,headers:{Authorization:'Bearer '+ Token } }
    );
  }

  logOut() {
    return this.http.get('http://127.0.0.1:800/api/logout/', {
      withCredentials: true,
    });
  }
}