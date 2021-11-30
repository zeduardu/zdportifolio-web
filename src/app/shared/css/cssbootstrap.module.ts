import { NgModule } from '@angular/core';
import {
  NgbAlertModule,
  NgbCollapseModule,
  NgbDatepickerModule,
  NgbModalModule
} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    NgbModalModule,
    NgbAlertModule,
    NgbDatepickerModule,
    NgbCollapseModule
  ],
  exports: [
    NgbModalModule,
    NgbAlertModule,
    NgbDatepickerModule,
    NgbCollapseModule
  ]
})
export class CssBootstrapModule { }
