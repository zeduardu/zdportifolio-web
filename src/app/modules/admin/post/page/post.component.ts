import { AuthenticationService } from 'src/app/data/services/authentication.service';
import { PostcategoryService } from '../../../../data/services/postcategory.service';
import { PostCategory } from '../../../../data/types/postcategory.model';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

import { PostService } from '../../../../data/services/post.service';
import { Post } from '../../../../data/types/post.model';

@Component({
  selector: 'app-category',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts$!: Observable<Post[]>;
  postCategories$!: Observable<PostCategory[]>;
  postCategoryFilter!: string;
  edit!: boolean;
  formGroup!: FormGroup;

  constructor(
    private postService: PostService,
    private postCategoryService: PostcategoryService,
    private authServ: AuthenticationService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.posts$ = this.postService.browse();
    this.postCategories$ = this.postCategoryService.browse();
    this.postCategoryFilter = 'Todos';
    this.configForm();
  }

  configForm() {
    this.formGroup = this.formBuilder.group({
      id: new FormControl(),
      author: new FormControl(''),
      date: new FormControl(''),
      title: new FormControl('', Validators.required),
      resume: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      content: new FormControl('', Validators.required),
      modified: new FormControl(''),
      category: new FormControl('', Validators.required),
    });
  }

  setStandardValues() {
    this.formGroup.patchValue({
      author: this.authServ.getCurrentUser()?.email,
      date: !this.edit ? new Date():this.formGroup.controls['category'].value,
      modified: new Date()
    });
  }

  addEvent() {
    // to do
  }

  saveEvent() {
    this.setStandardValues();
    this.postService
      .addOrEdit(this.formGroup.value)
      ?.then(() => {
        Swal.fire(
          `Post ${!this.edit ? 'adicionado' : 'editado'} com sucesso.`,
          '',
          'success'
        );
      })
      .catch(() => {
        Swal.fire(
          `Erro ao ${!this.edit ? 'adicionar' : 'editar'} esse post.`,
          '',
          'error'
        );
      });
  }

  deleteEvent() {
    //to do
  }
}
