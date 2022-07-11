import { Component, OnInit } from '@angular/core';
import {ServiceService} from 'src/app/service.service';
import { cohort } from '../models/cohort';


@Component({
  selector: 'app-cohort',
  templateUrl: './cohort.component.html',
  styleUrls: ['./cohort.component.css']
})
export class CohortComponent implements OnInit {
  cohort!:cohort[]
  

  constructor(private ServiceService:ServiceService) { }

  ngOnInit(): void {
    this.Cohort()
  }

  Cohort():void{
    this.ServiceService.Cohort().subscribe(cohort=>{
      this.cohort=cohort
      for(let item of this.cohort){
        console.log(cohort)
      }
    })

  }

}
