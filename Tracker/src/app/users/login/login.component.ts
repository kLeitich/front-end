import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Emitters } from 'src/app/emitters/emitters';

import { User } from '../../models/user';
import { AuthenticatedUserService } from 'src/app/authenticated-user.service';


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
        'http://127.0.0.1:8000/api/login/',
        {
          username: username,
          password: password,
        },

        { withCredentials: true }
      )

    
      .subscribe((res:any)=>{
        console.log(res.jwt)

        this.router.navigate(['/my-profile']);

        Emitters.authEmitter.emit(true);
      })


  }
}

