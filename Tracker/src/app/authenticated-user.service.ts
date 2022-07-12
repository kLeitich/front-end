import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedUserService {
  constructor(private http: HttpClient) {}
  ngOnInit() {}
  getUser() {
    return this.http.get<User>(
      'http://localhost:8000/api/authenticated_user/',

      { withCredentials: true }
    );
  }

  logOut() {
    return this.http.get('http://localhost:8000/api/logout/', {
      withCredentials: true,
    });
  }
}