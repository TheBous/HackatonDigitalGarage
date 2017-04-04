import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinalizzatiComponent } from './finalizzati.component';
import { SocietariComponent } from './societari.component';
import { FiduciariComponent } from './fiduciari.component';

import { TabsModule }               from 'ng2-bootstrap/tabs';
import { TabsComponent }            from '../components/tabs.component';

import { PrestitiRoutingModule } from './prestiti-routing.module';

import { CreateModule } from '../create/create.module';

@NgModule({
  imports: [ PrestitiRoutingModule,
             CommonModule,
             TabsModule,
             CreateModule
           ],
  declarations: [
    FinalizzatiComponent,
    SocietariComponent,
    FiduciariComponent
  ]
})
export class PrestitiModule { }
