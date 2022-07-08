import {Component, OnInit} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
   constructor(
   
    private http: HttpClient,
    private router: Router
  ) {
  }  ngOnInit(): void {
   
  } 
  
  submit(name:string,username:string, email:string, password:string): void {
    let payload={
      name: name,
      username: username,
      email: email,
      password: password
    }

    this.http.post<object>('http://localhost:8000/api/register/',
    {
      name: name,
      username: username,
      email: email,
      password: password
    }
    )
      .subscribe((res) => {
        console.log(res)
        // this.router.navigate(['/login'])
      });
  
    
  }
}