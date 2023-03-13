import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { searchPost } from 'src/app/store/actions/posts.actions';
import { Observable } from 'rxjs';
import { selectPostsLoaded } from 'src/app/store/selectors/post.selector';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.scss']
})
export class PostSearchComponent {
  
  constructor(private store: Store<AppState>) { }

  onSubmit(submittedForm: any){

    //this.store.dispatch(searchPost());

    this.store.select(selectPostsLoaded);    
    
  }

}
