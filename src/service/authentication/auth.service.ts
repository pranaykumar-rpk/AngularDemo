import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/Models/UserCredentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly mockUser = new Credentials("admin","Pranay@123");
  isAuthenticated = false;

  authenticate(credentials: Credentials) : boolean {
    console.log("Email Entered:",credentials.getEmail());
    console.log("Password Entered:",credentials.getPassword());
    if(this.checkCredentials(credentials)){
      this.print("Login Success");
      this.isAuthenticated = true;
      this.router.navigate(['admin/home']);
      return true;
    }else{
      this.print("Login Failure");
      this.isAuthenticated = false;
      return false;
    }
    
  }
  private checkCredentials(credentials: Credentials) : boolean{
    return this.checkEmail(credentials.getEmail()) && this.checkPassword(credentials.getPassword()); 
  }

  private checkEmail(email : string) : boolean{
      return email === this.mockUser.getEmail();
  }

  private checkPassword(password : string) : boolean{
    return password === this.mockUser.getPassword();
  }

  public print(msg : string): void{
    console.log(msg);
  }

  constructor(private router:Router) {}

  logOut(){
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
}


