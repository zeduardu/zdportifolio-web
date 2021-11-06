import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    NgbModalModule,
    NgbAlertModule,
    NgbDatepickerModule
  ],
  exports: [
    NgbModalModule,
    NgbAlertModule,
    NgbDatepickerModule
  ]
})
export class CssBootstrapModule { }
