import { Post } from './../../../data/types/post.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/data/services/post.service';

@Component({
  selector: 'app-sobre-tecnologia',
  templateUrl: './sobre-tecnologia.component.html',
  styleUrls: ['./sobre-tecnologia.component.css'],
})
export class SobreTecnologiaComponent implements OnInit {
  posts!: Observable<Post[]>

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.browse();
  }

  getResume(value: string): string {
    return value.substring(0, 500) + '...';
  }
}
