import { Model } from "src/app/core/model.abstract";
import { PostCategory } from './postcategory.model';

export class Post extends Model {
  author!: string;
  date!: Date;
  title!: string;
  resume!: string;
  content!: string;
  modified!: Date;
  category!: PostCategory;
}
