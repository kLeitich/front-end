import { Component, OnInit } from '@angular/core';
import {ServiceService} from 'src/app/service.service'
import { ProfileService } from 'src/app/profile.service';
import {profile} from '../../models/profile'
import {cohort} from '../../models/cohort'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  profile!:profile[]
  //cohort!:cohort[]
  //profileEditForm:FormGroup = new FormGroup({})
  constructor(private ServiceService:ServiceService,private ProfileService:ProfileService
) { }
  
  ngOnInit(): void {
    this.Profile()
  }



  updateData(value: any) {
    let body = {
      bio: value.bio,
      phone_number: value.phone_number
    }

    this.ProfileService.updateData(body, `2`)
      .subscribe(response => {
        console.log(response)
      })
  }



  
  Profile():void{
    console.log('im working')
    this.ServiceService.Profile().subscribe(profile=>{
      this.profile=profile
      console.log(profile)
    })
  }
  // Cohort():void{
  //   // console.log(this.ServiceService.Profile().subscribe(Profile))
  //   this.ServiceService.Cohort().subscribe(cohort=>{
  //     this.cohort=cohort
  //     console.log(cohort)
  //   })
  // }

  // updateProfile():void{
  //   console.log(this.profileEditForm.value)
  // }
}
