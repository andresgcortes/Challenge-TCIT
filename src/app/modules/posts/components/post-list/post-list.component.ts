import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { postActionTypes } from 'src/app/store/actions/posts.actions';
import { getAllPosts } from 'src/app/store/selectors/post.selector';
import { AppState } from '../../../../store/app.state';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  items$: Observable<any> = new Observable();
  
  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(){
    this.items$ = this.store.select(getAllPosts);
  }

  deletePost(postId: string){
    this.store.dispatch(postActionTypes.deletePost({postId}));
  }

}
