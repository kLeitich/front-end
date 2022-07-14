import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Emitters } from 'src/app/emitters/emitters';

import { User } from '../../models/user';
import { AuthenticatedUserService } from 'src/app/authenticated-user.service';
import { Token } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  message = 'Please login or signup';
  userEmail!: string;
  user!: any;
  constructor(private http: HttpClient, private router: Router,private authentication: AuthenticatedUserService) {}

  ngOnInit(): void {
 
    
  }

  submit(username: string, password: string): void {
    this.http
      .post<object>(
        'https://backendjw.herokuapp.com/api/login/',
        {
          username: username,
          password: password,
        },

        { withCredentials: true }
      )

      .subscribe((response: any) => {
        if (Object.keys(response).includes('jwt')) {
          console.log(response);
          localStorage.setItem('Token',response.jwt)
          this.authentication.getUser().subscribe((response: User) => {
            console.log(response)
            if (response.username) {
            
              this.user = response;
              if (/@([a-z\S]+)/.exec(String(this.user.email))) {
                if (
                  /@([a-z\S]+)/.exec(String(this.user.email))![1] ==
                  'student.moringaschool.com'
                ) {
                  this.router.navigate(['/my-profile']);
                } else {
                  this.router.navigate(['/admin-dashboard']);
                }
              }
            }
          });
        } else {
          console.log(response);
        }
      });

  }
}

