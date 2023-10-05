import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit, OnDestroy {
  @Input('toPost') myPost!:Post;
  @Output() onRemove=new EventEmitter<number>();
  constructor() { }

  removePost(){
    this.onRemove.emit(this.myPost.id)
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    console.log('метод ngOnDestroy');
  }
}
