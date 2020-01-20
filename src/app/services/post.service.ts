import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class PostService {

  postSubject = new Subject<any[]>();

    private posts = [];


constructor(private httpClient: HttpClient){}

  emitPostSubject(){
    this.postSubject.next(this.posts.slice());
  }


  getPostById(id: number){
  const post = this.posts.find(
              (postObject) =>{
      return postObject.id === id;
    }
  );
  return post;
}

/*
* Delete Button to fix
*/

deletePost(index: number){
      index = this.posts.indexOf(index,index);
      this.posts.splice(index);
      this.emitPostSubject();
    }


  addPost(title: string, content: string, loveIts: number, created_at: Date){
    const postObject ={
      id:0,
      title: '',
      content:'',
      loveIts: 0,
      created_at: Date.now(),
    };

    postObject.title= title;
    postObject.content= content;
    postObject.loveIts= loveIts;
    postObject.created_at= Date.now();
    postObject.id= this.posts[(this.posts.length-1)].id+1;

    this.posts.push(postObject);
    this.emitPostSubject();
  }


savePostsToServer(){
  this.httpClient
  .put('https://http-blog-demo.firebaseio.com/posts.json', this.posts)
  .subscribe(
          () =>{
            console.log('Saved posts in the database');
          },
          (error) =>{
            console.log('Error' + error);
          }
  );
}


getPostsFromServer(){
  this.httpClient
  .get<any[]>('https://http-blog-demo.firebaseio.com/posts.json')
  .subscribe(
          (response) =>{
          console.log('Fetched posts from the database');
          this.posts = response;
          this.emitPostSubject();
        },
        (error) =>{
          console.log('Error' + error);
        }
  );
}


}
