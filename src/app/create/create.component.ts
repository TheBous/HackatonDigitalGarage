import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Data } from '../model/data';
import { Practice } from '../model/practice';
import {AnagrafComponent} from './form/datiAnagrafici/anagraf.component';
import {DocumentComponent} from './form/datiDocumento/document.component';
import {ResidenceComponent} from './form/datiResidenza/residenza.component';
import {AltroComponent} from './form/altro/altro.component';
import {OperativeComponent} from './form/sedeOperativa/operative.component';
import {LegalComponent} from './form/sedeLegale/legale.component';
import {ContattiComponent} from './form/contatti/contatti.component';
import {sceltaprestitoComponent} from './form/sceltaPrestito/sceltaprestito.component';
import {ideainvestimentoComponent} from './form/ideaInvestimento/ideainvestimento.component';
import {uploadfileComponent} from './form/uploadFile/uploadfile.component';
import {anagrafsocietaComponent} from './form/datiAnagraficiSocieta/anagrafsocieta.component';
import {compaginesocialeComponent} from './form/compagineSociale/compaginesociale.component';
import {anagraficaprogrammaComponent} from './form/anagraficaProgramma/anagraficaprogramma.component';
import {anagraficacontattoComponent} from './form/anagraficaContatto/anagraficacontatto.component';
import {ReferentePrestitoComponent} from './form/referentePrestito/referentePrestito.component';
import {PianodiPrestitoComponent} from './form/pianoDiPrestito/pianoDiPrestito.component';
import {PrevisioneRichiesteComponent} from './form/previsioneRichieste/previsioneRichieste.component';




@Component({
  templateUrl: 'create.component.html'
})
export class CreateComponent implements OnInit {
  
  public practice: Practice;
  currentView: string;
  
  public constructor(private data: Data) {
    
        this.practice = this.data.storage;
    if(this.practice){
        this.currentView = this.practice.category;
    }
        console.log("Practice: " + this.practice);
        console.log("currentView: " + this.currentView);
        console.log(JSON.stringify(this.data.storage));
    }

  public brandPrimary:string =  '#20a8d8';
  public brandSuccess:string =  '#4dbd74';
  public brandInfo:string =   '#63c2de';
  public brandWarning:string =  '#f8cb00';
  public brandDanger:string =   '#f86c6b';

  setCurrentView(view:any){
    
    this.currentView=view;
  }

 
  ngOnInit(): void {
     
    }
  }
