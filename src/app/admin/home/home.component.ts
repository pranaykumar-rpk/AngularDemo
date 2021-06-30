import { Component, OnInit } from '@angular/core';
import { Employees } from '../../Models/Employees';
import { RestService } from '../../rest.service';


@Component({
  selector: 'cf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page: number = 1;
  
  employees : Employees[] = [];
  
  constructor(public rs: RestService) {

   }

  ngOnInit(): void {
    this.rs.getEmployees().subscribe((reponse: Employees[])=>{
      this.employees = reponse;
    });
  }

}


