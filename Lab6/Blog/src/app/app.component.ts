import { Component } from '@angular/core';

export interface Post {
  title:string;
  text:string;
  id?:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Blog';
  posts: Post[]=[
    {title:'Вивчаю компоненти', text:'Створюю проект "Блог"', id:1},
    {title:'Вивчаю директиви', text:'Все ще створюю "Блог"', id:2}
  ];

  updatePosts(post:Post){
    this.posts.unshift(post);
    console.log('Post',post);
  }

  deletePost(id:number){
    this.posts = this.posts.filter(p=>p.id!==id)
  }
}
