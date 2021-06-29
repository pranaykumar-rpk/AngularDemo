import { Component } from '@angular/core';
import { AuthService } from 'src/service/authentication/auth.service';

@Component({
  selector: 'cf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginDemo';

  constructor(public authService : AuthService){

  }

  logOut(){
    this.authService.logOut();
  }
}
