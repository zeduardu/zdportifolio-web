import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreTecnologiaComponent } from './page/sobre-tecnologia.component';

const routes: Routes = [{ path: '', component: SobreTecnologiaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SobreTecnologiaRoutingModule { }
