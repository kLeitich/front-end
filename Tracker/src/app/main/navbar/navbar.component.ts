import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';

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
  }

}
