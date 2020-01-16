import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  constructor(private postService: PostService) {
   }

   ngOnInit(){
     this.posts = this.postService.posts;
   }
}
