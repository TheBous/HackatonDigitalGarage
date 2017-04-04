import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { Cookie } from 'ng2-cookies';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  
  cookies: Object;
  utente: User;
  
  constructor(private userService: UserService, private router: Router) {
      
     
   }
  
    
  
  
    prova = {};

    loginUtente(username: HTMLInputElement, password: HTMLInputElement): boolean {
      console.log("Enter Login...");

    this.utente = new User({username: username.value, password: password.value});

    console.log("USER: " + JSON.stringify(this.utente));

    this.userService.login(this.utente).subscribe(data => this.prova = data);

    
    console.log(this.prova);
    

    if (this.prova) {
      
        Cookie.set("username", username.value);
        console.log("COOKIE: ", Cookie.check("username"));
      
      this.router.navigate(['/dashboard']);
    }
    else {
      alert("Username o password errati");
    }

    return false;
  }
}
