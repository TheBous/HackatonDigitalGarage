import { Component, OnInit, ViewChild } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  constructor() { }

  
  //MENU A TENDINA IN ALTO A DESTRA//
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
   
  
  //LOGOUT//
  logout(){

    console.log('Removing all cookies');
    Cookie.deleteAll();
 
  }

  ngOnInit(): void {}
}
