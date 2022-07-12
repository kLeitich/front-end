import { Component, OnInit } from '@angular/core';
import { AuthenticatedUserService } from 'src/app/authenticated-user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
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

