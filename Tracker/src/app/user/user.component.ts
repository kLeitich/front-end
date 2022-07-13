import { Component, OnInit } from '@angular/core';
import {ServiceService} from 'src/app/service.service';
import { user } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!:user[]

  constructor(private ServiceService: ServiceService) { }

  ngOnInit(): void {
    this.User()
  }
  User():void{
    this.ServiceService.User().subscribe(user=>{
      this.user=user 
      for(let item of this.user){
        console.log(user)
      }
    })
  }

}
