import { Component, OnInit } from '@angular/core';

import { Emitters } from 'src/app/emitters/emitters';

import { AuthenticatedUserService } from 'src/app/authenticated-user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  authenticated!:boolean 
  value=true

  constructor() { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth:boolean)=>{
          this.authenticated=auth;
      }
    )

  user!: any;
  constructor(private authentication: AuthenticatedUserService) {}

  ngOnInit(): void {
    this.authentication.getUser().subscribe((response) => {
      if (response.id) {
        this.user = response;
      }
    });

  }

  logOut() {
    this.authentication.logOut().subscribe((response) => {
      console.log(response)
      this.user = null;
    });
  }
}

