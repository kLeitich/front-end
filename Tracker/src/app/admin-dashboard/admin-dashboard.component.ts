import { Component, OnInit } from '@angular/core';
import { profile } from '../models/profile';
import {ServiceService} from 'src/app/service.service'

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  profile!: profile[];


  constructor(private ServiceService:ServiceService) { }

  ngOnInit(): void {
    this.profile
  }
  Profile():void{
    // console.log(this.ServiceService.Profile().subscribe(Profile))
    this.ServiceService.Profile().subscribe(profile=>{
      this.profile=profile
      console.log(profile)
    })
  }

}
