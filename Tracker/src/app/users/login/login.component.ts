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
      .subscribe((response: object) => {
        if (Object.keys(response).includes('jwt')) {
          // console.log(response);
          this.router.navigate(['/']);
        }
      });

  }
}

