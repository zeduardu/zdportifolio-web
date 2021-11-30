import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/data/services/post.service';

import { Post } from './../../../data/types/post.model';
import { Util } from '../../../shared/util';

@Component({
  selector: 'app-sobre-tecnologia',
  templateUrl: './sobre-tecnologia.component.html',
  styleUrls: ['./sobre-tecnologia.component.css'],
})
export class SobreTecnologiaComponent implements OnInit {
  posts$!: Observable<Post[]>;
  readMorePost!: Post;
  invertedImage: boolean = false;
  showReadMore: boolean = false;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.browse();
  }

  getResume(value: string): string {
    return value.substring(0, 500) + '...';
  }

  getFirestoreDate(value: Date): any {
    return value;
  }

  invertImageEvent(): string {
    if (this.invertedImage) {
      this.invertedImage = false;
      return '';
    }
    this.invertedImage = true;
    return ' flex-row-reverse';
  }

  hideOrDisplayEvent(): boolean {
    if (this.showReadMore) {
      return (this.showReadMore = false);
    }
    return (this.showReadMore = true);
  }

  readMoreEvent(post: Post) {
    this.readMorePost = post;
    this.hideOrDisplayEvent();
  }
}
