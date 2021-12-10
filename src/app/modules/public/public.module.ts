import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { HomeComponent } from './home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';

@NgModule({
  declarations: [
    PublicComponent,
    AboutmeComponent,
    ContactmeComponent,
    HomeComponent,
  ],
  imports: [CommonModule, SharedModule, PublicRoutingModule],
})
export class PublicModule {}
