import { Component, OnInit, OnDestroy } from '@angular/core';
import {PostService} from './services/post.service';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  secondes: number;
  counterSubscription: Subscription;

  constructor(){}

  ngOnInit(){
  }

  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }

}
