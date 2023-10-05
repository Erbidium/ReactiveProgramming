import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnDestroy {
  @Input('toPost') myPost!:Post;
  @Output() onRemove=new EventEmitter<number>();

  removePost(){
    this.onRemove.emit(this.myPost.id)
  }

  ngOnDestroy(){
    console.log('метод ngOnDestroy');
  }
}
