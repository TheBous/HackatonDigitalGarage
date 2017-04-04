import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalizzatiComponent } from './finalizzati.component';
import { SocietariComponent } from './societari.component';
import { FiduciariComponent } from './fiduciari.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Prestiti'
    },
    children: [
      {
        path: 'finalizzati',
        component: FinalizzatiComponent,
        data: {
          title: 'Finalizzati'
        }
      },
      {
        path: 'societari',
        component: SocietariComponent,
        data: {
          title: 'Societari'
        }
      },
      {
        path: 'fiduciari',
        component: FiduciariComponent,
        data: {
          title: 'Fiduciari'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestitiRoutingModule {}
