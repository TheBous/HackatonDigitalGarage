import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from '../model/user';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    constructor(
        private http: Http
    ) { }

    createUser(utente: User) {
        var tempNome: string = utente.getNome();
        var tempCognome: string = utente.getCognome();
        var tempUsername: string = utente.getUsername();
        var tempIndirizzo: string = utente.getIndirizzo();
        var tempPassword: string = utente.getPassword();

        return this.http.get(`http://192.168.2.124:8080/signUp?nome=${ tempNome }&cognome=${ tempCognome }&username=${ tempUsername }&indirizzo=${ tempIndirizzo }&password=${ tempPassword }`)
            .map((res: Response) => res.json());
    }

    login(utente: User){
        var tempNome: string = utente.getNome();
        var tempCognome: string = utente.getCognome();
        var tempUsername: string = utente.getUsername();
        var tempIndirizzo: string = utente.getIndirizzo();
        var tempPassword: string = utente.getPassword();
        
        return this.http.get(`http://192.168.2.124:8080/login?nome=${ tempNome }&cognome=${ tempCognome }&username=${ tempUsername }&indirizzo=${ tempIndirizzo }&password=${ tempPassword }`)
            .map((res: Response) => res.json());
    }

}