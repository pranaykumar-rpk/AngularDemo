import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from './Models/Employees';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  constructor(private http:HttpClient) {}
 
  url : string = "http://localhost:3000/Employees";
   getEmployees(){
     return this.http.get<Employees[]>(this.url);
   }
}




