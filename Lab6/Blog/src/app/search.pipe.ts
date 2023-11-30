import { Pipe, PipeTransform } from '@angular/core';
import {Post} from './app.component'

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {
  transform(posts: Post[], search: string = ''): any {
    if (search.trim()) {
      return posts.filter(post => { return post.title.toLowerCase().includes(search.toLowerCase()) })
    }
    return posts;
  }
}
