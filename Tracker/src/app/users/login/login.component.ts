import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  submit(email: string, password: string): void {
    this.http
      .post(
        'http://127.0.0.1:8000/api/login/',
        {
          email: email,
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

