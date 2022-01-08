import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseActions } from 'src/app/core/firebaseactions.abstract';
import { PostCategory } from './../types/postcategory.model';

@Injectable({
  providedIn: 'root'
})
export class PostcategoryService extends FirebaseActions<PostCategory>{

  constructor(angularFirestore: AngularFirestore) {
    super(PostCategory, angularFirestore, 'postcategories');
  }
}
