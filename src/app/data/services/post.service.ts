import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseActions } from 'src/app/core/firebaseactions.abstract';
import { Post } from '../types/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService extends FirebaseActions<Post> {

  constructor(angularFirestore: AngularFirestore) {
    super(Post, angularFirestore, 'posts');
  }
}
