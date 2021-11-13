import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreTecnologiaRoutingModule } from './sobre-tecnologia-routing.module';
import { SobreTecnologiaComponent } from './page/sobre-tecnologia.component';


@NgModule({
  declarations: [
    SobreTecnologiaComponent
  ],
  imports: [
    CommonModule,
    SobreTecnologiaRoutingModule
  ]
})
export class SobreTecnologiaModule { }
