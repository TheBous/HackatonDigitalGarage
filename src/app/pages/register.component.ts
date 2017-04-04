import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service'

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  utente: User;

  constructor(private userService: UserService, private router: Router) { }
  prova = {};

  creaUtente(nome: HTMLInputElement, cognome: HTMLInputElement,
    username: HTMLInputElement, indirizzo: HTMLInputElement,
    password: HTMLInputElement, cf: HTMLInputElement): boolean {

    console.log("Ciao sono dentro");

    this.utente = new User({nome: nome.value, 
                            cognome: cognome.value, 
                            username: username.value, 
                            indirizzo: indirizzo.value, 
                            password: password.value, 
                            codiceFiscale: cf.value});

    console.log("utente" + this.utente);

    //this.userService.createUser(this.utente).subscribe();
    this.userService.createUser(this.utente).subscribe(data => this.prova = data);

    if (this.prova) {
      this.router.navigate(['/dashboard']);
    }
    else{
      alert("Problemi di Registrazione");
    }

    return false;
  }


}
