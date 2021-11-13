import { Pipe, PipeTransform } from '@angular/core';
import { Post } from 'src/app/data/types/post.model';

@Pipe({
  name: 'postfilterbycategory'
})
export class PostfilterbycategoryPipe implements PipeTransform {

  transform(value: Post[]|null, filter: string): any {
    if(filter === 'Todos') return value;
    if(value) return value.filter(elem => (elem.category.title === filter));
  }

}
