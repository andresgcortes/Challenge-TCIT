import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, concatMap } from 'rxjs/operators'
import { PostsService } from '../../modules/posts/services/posts.service';

import { postActionTypes } from '../actions/posts.actions';
import { Router } from '@angular/router';

@Injectable()
export class PostsEffects {

    loadPosts$ = createEffect(() => this.actions$.pipe(
      ofType(postActionTypes.loadPosts),
      concatMap(() => this.postsService.getDataApi()),
          map(posts => postActionTypes.postsLoaded({posts}))
      )
    );

    deletePost$ = createEffect(() =>
      this.actions$.pipe(
        ofType(postActionTypes.deletePost),
        concatMap((action) => this.postsService.deleteDataApi(action.postId))
      ),
      {dispatch: false}
    );

    createPost$ = createEffect(() =>
      this.actions$.pipe(
        ofType(postActionTypes.createPost),
        concatMap((action) => this.postsService.createDataApi(action))
      ),
      {dispatch: false}
    );

    constructor(
        private actions$: Actions,
        private postsService: PostsService,
        private router: Router
    ){}

}