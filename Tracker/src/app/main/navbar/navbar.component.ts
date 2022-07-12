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

  user!: any;
  is_loggedIn=false
  constructor(private authentication: AuthenticatedUserService) {
    authentication.is_loggedIn.subscribe(
      is_loggedIn=>{
        this.is_loggedIn=is_loggedIn
      }
    )
  }

  ngOnInit(): void {


    this.authentication.getUser().subscribe((response) => {
      console.log(response)
      // if (response.id) {
        this.user = response;
      // }
    });

  }

  logOut() {
    this.authentication.logOut().subscribe((response) => {
      console.log(response)
      this.user = null;
    });
  }
}

