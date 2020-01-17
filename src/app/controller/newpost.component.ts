import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostService} from "../services/post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-newpost',
  templateUrl: '../view/newpost.component.html',
  styleUrls: ['../view/newpost.component.css']
})
export class NewpostComponent implements OnInit {


  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const title= form.value['title'];
    const content= form.value['content'];
    var loveIts= 0;
    var created_at: Date;
    this.postService.addPost(title, content, loveIts, created_at);
    this.router.navigate(['/post']);
  }
}
