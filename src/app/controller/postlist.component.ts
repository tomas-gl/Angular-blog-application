import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-postlist',
  templateUrl: '../view/postlist.component.html',
  styleUrls: ['../view/postlist.component.css']
})
export class PostlistComponent implements OnInit {

@Input() posts : any = [];

  postSubscription: Subscription;

  constructor(private postService: PostService) {
   }

   ngOnInit(){
     this.postSubscription = this.postService.postSubject.subscribe(
       (posts: any[])=>{
         this.posts = posts;
       }
     );
     this.postService.emitPostSubject();
   }

   onSave(){
     this.postService.savePostsToServer();
   }

   onFetch(){
     this.postService.getPostsFromServer();
   }

}
