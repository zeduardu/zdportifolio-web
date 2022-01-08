import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../../data/types/post.model';
import { PostService } from '../../../../data/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Util } from '../../../../shared/util';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss'],
})
export class ReadMoreComponent implements OnInit {
  post!: Post;
  util: Util = new Util();

  constructor(
    private postSevice: PostService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    this.postSevice.read(id).subscribe((post) => (this.post = post));
  }

  return(): void {
    this.location.back();
  }
}
