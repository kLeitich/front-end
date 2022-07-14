import {Component, OnInit} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {user} from '../models/user.model';


import {Router} from '@angular/router';


@Component({

  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user!: user; 
   
  constructor(private httpClient: HttpClient, private router: Router) {}
 
  response!: any;
  message!: string;

  ngOnInit(): void {
   
  } 

  submit(name:string,username:string, email:string, password:string): void {
 
    this.httpClient
    
    .post<object>('https://backendjw.herokuapp.com/api/register/',
    {
      name: name,
      username: username,
      email: email,
      password: password
    }
    )
    .subscribe((res) => {
      console.log(res)
        // this.router.navigate(['/login']);
      });
  
    
  }
}