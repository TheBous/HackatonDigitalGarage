import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';

// Tabs Component
import { TabsModule }               from 'ng2-bootstrap/tabs';
import { TabsComponent }            from '../components/tabs.component';
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




import { CreateComponent } from './create.component';
import { CreateRoutingModule } from './create-routing.module';


@NgModule({
  imports: [
    CreateRoutingModule,
    ChartsModule,
    DropdownModule,
    TabsModule,
    CommonModule
  ],
  declarations: [ 
      CreateComponent,
      AnagrafComponent,
      DocumentComponent,
      ResidenceComponent,
      AltroComponent,
      OperativeComponent,
      LegalComponent,
      ContattiComponent,
      sceltaprestitoComponent,
      ideainvestimentoComponent,
uploadfileComponent,
      anagrafsocietaComponent,
      compaginesocialeComponent,
      anagraficaprogrammaComponent,
      anagraficacontattoComponent,
      ReferentePrestitoComponent,
      PianodiPrestitoComponent,
      PrevisioneRichiesteComponent
                ],
  exports: [
    AnagrafComponent,
    DocumentComponent,
    ResidenceComponent,
    AltroComponent,
    OperativeComponent,
    LegalComponent,
    ContattiComponent,
      sceltaprestitoComponent,
      ideainvestimentoComponent,
      uploadfileComponent,
      anagrafsocietaComponent,
      compaginesocialeComponent,
      anagraficaprogrammaComponent,

      anagraficacontattoComponent,
      ReferentePrestitoComponent,
      PianodiPrestitoComponent,
      PrevisioneRichiesteComponent

                ]

})
export class CreateModule { }
