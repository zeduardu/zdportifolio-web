import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreTecnologiaComponent } from './page/sobre-tecnologia.component';
import { ReadMoreComponent } from './subpages/read-more/read-more.component';

const routes: Routes = [
  { path: '', component: SobreTecnologiaComponent },
  {
    path: 'readmore/:id',
    component: ReadMoreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobreTecnologiaRoutingModule {}
