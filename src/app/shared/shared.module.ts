import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CssBootstrapModule } from './css/cssbootstrap.module';
import { IconsFontawesomeModule } from './icons/iconsfontawesome.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconsFontawesomeModule,
    CssBootstrapModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconsFontawesomeModule,
    CssBootstrapModule,
  ],
})
export class SharedModule {}
