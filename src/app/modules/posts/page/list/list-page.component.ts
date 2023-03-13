import { getAllPosts, PostsLoaded } from '../../../../store/selectors/post.selector';
import { loadPosts } from '../../../../store/actions/posts.actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostsService } from '../../services/posts.service';
import { PostModel } from '../../model/post.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPostsPageComponent {

  loading$: Observable<boolean> = new Observable()
  
  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    
    this.loading$ = this.store.select(PostsLoaded);
        
  }

}


