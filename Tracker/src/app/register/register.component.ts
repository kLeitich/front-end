import {Component, OnInit} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {user} from '../models/user.model';


import {Router} from '@angular/router';
import { FormGroup } from '@angular/forms';


@Component({

  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user!: user; 
   form!: FormGroup;

   constructor(
   
    private http: HttpClient,
    private router: Router
  ) {
  }  ngOnInit(): void {
   
  } 
  
  submit(name:string,username:string, email:string, password:string): void {
 
    this.http
    .post('http://localhost:8000/api/register/',
    {
      name: name,
      username: username,
      email: email,
      password: password
    }
    )
    .subscribe((res) => {
        console.log(res)
        this.router.navigate(['/login'])
      });
  
    
  }
}