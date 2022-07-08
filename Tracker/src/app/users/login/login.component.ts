import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  submit(userName: string, userPassword: string): void {
    this.http
      .post(
        'https://backendjw.herokuapp.com/api/login/',
        {
          username: userName,
          password: userPassword,
        },
        { withCredentials: true }
      )
      .subscribe((res)=>{
        // console.log(res)
        this.router.navigate(['/my-profile']);
      })

  }
}

