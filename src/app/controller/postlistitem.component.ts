import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-postlistitem',
  templateUrl: '../view/postlistitem.component.html',
  styleUrls: ['../view/postlistitem.component.css']
})
export class PostlistitemComponent {

  @Input() id: number;
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  posts: any[];


  constructor(private postService: PostService) { }

  ngOnInit() {

  }


onLoveIt() {
  this.loveIts++;
}

  onDontLoveIt() {
    this.loveIts--;
  }


  onDeletePost(){
    this.postService.deletePost(this.id);
  }


}
