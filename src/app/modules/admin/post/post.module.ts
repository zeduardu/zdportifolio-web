import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './page/post.component';
import { PostfilterbycategoryPipe } from './pipes/postfilterbycategory.pipe';


@NgModule({
  declarations: [
    PostComponent,
    PostfilterbycategoryPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    QuillModule.forRoot(),
    PostRoutingModule
  ]
})
export class PostModule { }
