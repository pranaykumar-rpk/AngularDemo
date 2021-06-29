import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/service/authentication/auth.service';
import { Credentials } from '../Models/UserCredentials';

@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isFormInValid = false;
  isUserInValid = false;

  constructor(private authService : AuthService) { 

  }

  ngOnInit(): void {
  }

  onSubmit(credentials : NgForm){
    if(!credentials.valid){
        this.isFormInValid = true;
        this.isUserInValid = false;
        return;
    }
    console.log("Called On Submit");
      console.log(credentials.value.email);
      console.log(credentials.value.password);
      this.checkCredentials(credentials);
  }

  private checkCredentials(credentials : NgForm){
    const creds = new Credentials(credentials.value.email,credentials.value.password);
    if(!this.authService.authenticate(creds)){
        this.isFormInValid = false;
        this.isUserInValid = true;
    }

  }

}
