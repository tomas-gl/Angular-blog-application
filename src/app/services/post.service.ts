import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';

@Injectable()
export class PostService {


  private posts = [
    {
      id: 1,
      title: 'Premier post',
      content: 'Hello World !',
      loveIts: 0,
      created_at: 0
    },
    {
      id: 2,
      title: 'Deuxième post',
      content: 'Bonjour !',
      loveIts: 0,
      created_at: 0
    },
    {
      id: 3,
      title: 'Troisième post',
      content: 'Bonsoir !',
      loveIts: 0,
      created_at: 0
    },
  ];

constructor(private httpClient: HttpClient){}

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
    postObject.id= this.posts[(this.posts.length -1)].id +1;

    this.posts.push(postObject);
  }

/*
  deletePost(post: array[]){
      this.posts[post].splice();
    }
*/

savePostsToServer(){
  this.httpClient
  .put('https://http-blog-demo.firebaseio.com/posts.json', this.posts)
  .subscribe(
          () =>{
            console.log('Post enregistré');
          },
          (error) =>{
            console.log('Erreur' + error);
          }
  )
}

getPostsFromServer(){
  this.httpClient
  .get<any>[]('https://http-blog-demo.firebaseio.com/posts.json')
  .subscribe(
    (response) =>{
    this.posts = response;
  },
  (error) =>{
    console.log('Erreur de chargement' + error);
  }
  )
}


}
