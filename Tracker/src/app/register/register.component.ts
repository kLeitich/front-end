import {Component, OnInit} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
  constructor(private http: HttpClient, private router: Router) {}
 
  response!: any;
  message!: string;

  ngOnInit(): void {
   
  } 
  
  submit(name:string,username:string, email:string, password:string): void {
 
    this.http
    .post<object>('http://localhost:8000/api/register/',
    {
      name: name,
      username: username,
      email: email,
      password: password
    }
    )
    .subscribe((res) => {
        // console.log(res)
        this.response=res;
        this.message=this.response.message
       
        this.router.navigate(['/login']);
      });
  
  }
}