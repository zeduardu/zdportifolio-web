import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCategoryComponent } from './postcategory.component';

describe('CategoryComponent', () => {
  let component: PostCategoryComponent;
  let fixture: ComponentFixture<PostCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
