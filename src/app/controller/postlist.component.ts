import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-postlist',
  templateUrl: '../view/postlist.component.html',
  styleUrls: ['../view/postlist.component.css']
})
export class PostlistComponent implements OnInit {

@Input() posts : any = [];

  constructor(private postService: PostService) {
   }

   ngOnInit(){
     this.posts = this.postService.posts;
   }

   onSave(){
     this.postService.savePostsToServer();
   }

   onFetch(){
     this.postService.getPostsFromServer();
   }
}
