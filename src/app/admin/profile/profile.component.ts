import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Employees } from 'src/app/Models/Employees';

@Component({
  selector: 'cf-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class StatisticsComponent implements OnInit {
  employee!: Employees;
  private sub: any;

  constructor(private route: ActivatedRoute) { }



  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      const employee: Employees = JSON.parse(params["employee"]);
      this.employee = employee; 
      console.log("employee:",employee);
      console.log("employee First Name:",employee.firstName);
  
    });
    console.log("Employee Details",this.employee);
  }

}


