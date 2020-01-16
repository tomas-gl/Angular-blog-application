import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostlistitemComponent } from './postlistitem/postlistitem.component';
import { PostService } from './services/post.service';
import { NewpostComponent } from './newpost/newpost.component';
import {RouterModule, Routes} from "@angular/router";
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: 'posts', component: PostlistComponent },
  {path: 'new', component: NewpostComponent},
  {path: '', component: PostlistComponent },
  {path: '**', redirectTo: '/posts'}
];

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostlistitemComponent,
    NewpostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
