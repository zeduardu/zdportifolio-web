import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreTecnologiaRoutingModule } from './sobre-tecnologia-routing.module';
import { SobreTecnologiaComponent } from './page/sobre-tecnologia.component';
import { ReadMoreComponent } from './subpages/read-more/read-more.component';


@NgModule({
  declarations: [
    SobreTecnologiaComponent,
    ReadMoreComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SobreTecnologiaRoutingModule
  ]
})
export class SobreTecnologiaModule { }
