export class User {
    nome: string;
    cognome: string;
    username: string;
    indirizzo: string;
    password: string;
    codiceFiscale: string;

    constructor(user: any){
             this.nome = user.nome;
             this.cognome = user.cognome;
             this.username = user.username;
             this.indirizzo = user.indirizzo;
             this.password = user.password;
             this.codiceFiscale = user.codiceFiscale;
         }

        getNome(): string {return this.nome;}

        getCognome(): string {return this.cognome;}

        getUsername(): string {return this.username;}

        getIndirizzo(): string {return this.indirizzo;}

        getPassword(): string {return this.password;}

        getCodice(): string {return this.codiceFiscale;}

}
