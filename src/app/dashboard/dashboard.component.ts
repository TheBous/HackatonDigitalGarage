import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Practice } from "../model/practice";
import { Data } from "../model/data";

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private data: Data) {}

  public brandPrimary:string =  '#20a8d8';
  public brandSuccess:string =  '#4dbd74';
  public brandInfo:string =   '#63c2de';
  public brandWarning:string =  '#f8cb00';
  public brandDanger:string =   '#f86c6b';

  // dropdown buttons
  public status: { isopen: boolean } = { isopen: false };
  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  //convert Hex to RGBA
  public convertHex(hex:string,opacity:number){
    hex = hex.replace('#','');
    let r = parseInt(hex.substring(0,2), 16);
    let g = parseInt(hex.substring(2,4), 16);
    let b = parseInt(hex.substring(4,6), 16);

    let rgba = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return rgba;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
  
  public percentage1 = 80;
  public percentage2 = 40;
  public percentage3 = 25;

  // Practices
  public practices:Array<any> = [
    {
      username: 'Cyro89',
      name: 'Ciro',
      surname: 'Infante',
      address: 'Via Pezzotti 8, Milano',
      fiscalCode: 'NFNCRI89E15K789B',
      company:  'Digital Garage',
      VAT: 'PL1234567890',
      headquarters: 'Via Pezzotti 8, Milano',
      category: 'Industrial',
      description: 'I would like to have money',
      fileID: '',
      fileFC: '',
      fileVAT: '',
      percentage: '80'
    },
    {
      username: 'mario.rossi',
      name: 'Mario',
      surname: 'Rossi',
      address: 'Via Ledi Tadalnaso, Timbuctu',
      fiscalCode: 'MRO12324D321R',
      company:  'Vattelapesca',
      VAT: 'P443TY443',
      headquarters: 'Piazza Labom Baescappa',
      category: 'Social',
      description: 'I would like to have money',
      fileID: '',
      fileFC: '',
      fileVAT: '',
      percentage: '45'
    }
  ];
  
  
  goEdit(index): void{
    
    this.data.storage = this.practices[index];
    console.log(JSON.stringify(this.data.storage));
    this.router.navigate(["create"]);
    
  }

  ngOnInit(): void {
    
  }
}
