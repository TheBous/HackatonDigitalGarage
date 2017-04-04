import { User } from '../model/user';

export class Practice {
  
    id: number;
    user: User; 
    company: string; 
    VAT: string; 
    headquarters: string;  
    category: string; 
    description: string; 
    fileID: string; 
    fileFC: string; 
    fileVAT: string; 
    percentage: number;

    constructor(practice:any){
    
            this.id = practice.id
            this.user = practice.user;
            this.company = practice.company;
            this.VAT = practice.VAT;
            this.headquarters = practice.headquarters;
            this.category = practice.category;
            this.description = practice.description;
            this.fileID = practice.fileID;
            this.fileFC = practice.fileFC;
            this.fileVAT = practice.fileVAT;
            this.percentage = practice.percentage;
    
    }
  
  
}
