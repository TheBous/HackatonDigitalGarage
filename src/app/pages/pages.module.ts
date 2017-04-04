import { NgModule } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpModule, JsonpModule } from '@angular/http';

import { p404Component } from './404.component';
import { p500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [ PagesRoutingModule,HttpModule,
    JsonpModule ],
  declarations: [
    p404Component,
    p500Component,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
      UserService
    ]
})
export class PagesModule { }
