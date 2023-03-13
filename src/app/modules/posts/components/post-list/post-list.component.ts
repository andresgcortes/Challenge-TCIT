import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { postActionTypes } from 'src/app/store/actions/posts.actions';
import { getAllPosts, getFilteredPosts } from 'src/app/store/selectors/post.selector';
import { AppState } from '../../../../store/app.state';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  items$: Observable<any> = new Observable();
  data$: Observable<string> = new Observable();
  
  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(){
    this.items$ = this.store.select(getAllPosts);

    const data2 = this.items$.subscribe(
      posts => {
        this.data$ = posts.filter((post: any) => { post.id === '2'});
      }
    ) 

    console.log(data2)
    
    this.data$ = this.store.pipe(
      select(getFilteredPosts)
    );
  }

  deletePost(postId: string){
    this.store.dispatch(postActionTypes.deletePost({postId}));
  }
    
}
