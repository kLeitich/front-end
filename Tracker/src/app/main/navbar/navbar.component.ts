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
  is_student=false
  is_admin=false
  user!: any;
  is_loggedIn=false
  constructor(private authentication: AuthenticatedUserService) {
// authentication.is_loggedIn.subscribe(
//       is_loggedIn=>{
//         this.is_loggedIn=is_loggedIn
//       }    
//     )
  }

  ngOnInit(): void {


    this.authentication.getUser().subscribe((response) => {
      console.log(response)
      // if (response.id) {
        this.user = response;
        if (/@([a-z\S]+)/.exec(String(this.user.email))) {
          if (
            /@([a-z\S]+)/.exec(String(this.user.email))![1] ==
            'student.moringaschool.com'
          ) {
            this.is_student=true;
          } else {
            this.is_admin=true;
          }
        }
      // }
    });

  }

  logOut() {
    this.authentication.logOut().subscribe((response) => {
      console.log(response)
      this.user = null;
      this.is_admin=false
      this.is_student=false
    });
  }
}

