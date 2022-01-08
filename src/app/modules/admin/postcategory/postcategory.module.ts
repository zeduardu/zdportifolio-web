import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostCategoryRoutingModule } from './postcategory-routing.module';
import { PostCategoryComponent } from './page/postcategory.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PostCategoryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostCategoryRoutingModule    
  ]
})
export class PostCategoryModule { }
