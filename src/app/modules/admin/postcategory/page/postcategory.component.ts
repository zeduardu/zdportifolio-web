import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

import { PostcategoryService } from './../../../../data/services/postcategory.service';
import { PostCategory } from './../../../../data/types/postcategory.model';

@Component({
  selector: 'app-category',
  templateUrl: './postcategory.component.html',
  styleUrls: ['./postcategory.component.css'],
})
export class PostCategoryComponent implements OnInit {
  postCategories$!: Observable<PostCategory[]>;
  edit!: boolean;
  displayDialog!: boolean;
  formGroup!: FormGroup;

  constructor(
    private postcategoryService: PostcategoryService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.postCategories$ = this.postcategoryService.browse();
    this.configForm();
  }

  configForm() {
    this.formGroup = this.formBuilder.group({
      id: new FormControl(),
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
    });
  }

  addEvent(content: any) {
    this.modalService.open(content);
    this.formGroup.reset();
    this.edit = false;
  }

  saveEvent() {
    this.modalService.dismissAll();
    this.postcategoryService
      .addOrEdit(this.formGroup.value)
      ?.then(() => {
        Swal.fire(
          `Categoria ${!this.edit ? 'adicionada' : 'editada'} com sucesso.`,
          '',
          'success'
        );
      })
      .catch((error) => {
        Swal.fire(
          `Erro ao ${!this.edit ? 'adicionar' : 'editar'} essa categoria.`,
          '',
          'error'
        );
      });
  }

  deleteEvent() {}
}
