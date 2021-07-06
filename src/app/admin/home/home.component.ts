import { Component, OnInit } from '@angular/core';
import { Employees } from '../../Models/Employees';
import { RestService } from '../../rest.service';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'cf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page: number = 1;
  
  employees : Employees[] = [];
  
  constructor(public rs: RestService,private router:Router) {

   }
  

  ngOnInit(): void {
    this.rs.getEmployees().subscribe((reponse: Employees[])=>{
      this.employees = reponse;
    });
  }


  viewProfile(emp : Employees): void  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "firstName": emp.firstName,
        "lastName": emp.lastName,
        "id": emp.id,
        "emailId": emp.email,
        "mobileNumber":emp.mobile,
        "employee": JSON.stringify(emp)
      }
    };
  
    this.router.navigate(["/admin/profile"],navigationExtras);

  }

}


