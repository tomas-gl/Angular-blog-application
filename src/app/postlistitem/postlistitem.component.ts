import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.css']
})
export class PostlistitemComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  posts: any[];

  constructor(private postService: PostService) { }

  ngOnInit() {
         this.posts = this.postService.posts;
  }

  onDontLoveIt() {
    this.loveIts--;
  }

  onLoveIt() {
    this.loveIts++;
  }

  onDeletePost(){
    this.postService.deletePost();
  }
}
