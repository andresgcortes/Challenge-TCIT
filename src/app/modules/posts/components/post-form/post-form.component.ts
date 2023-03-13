import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { PostModel } from '../../model/post.interface';
import * as uuid from 'uuid';
import { createPost } from 'src/app/store/actions/posts.actions';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {

  constructor(private store: Store<AppState>) { }

  onSubmit(submittedForm: any) {
    
    if (submittedForm.invalid) {
      return;
    }

    const posts: PostModel = {id: uuid.v4(), name: submittedForm.value.name, description: submittedForm.value.description};

    this.store.dispatch(createPost({posts}));

    submittedForm.reset();
    
  }

}
