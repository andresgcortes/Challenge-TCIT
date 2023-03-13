import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import {filter, finalize, first, tap} from 'rxjs/operators';

import { PostsLoaded } from '../../store/selectors/post.selector';
import { loadPosts, postsLoaded } from '../../store/actions/posts.actions';
import { AppState } from '../../store/app.state';
import { Injectable } from '@angular/core';

@Injectable()
export class PostsResolver implements Resolve<Observable<any>> {

  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store
    .pipe(
        select(PostsLoaded),
        tap((postsLoaded) => {
          if(!postsLoaded) {
            this.store.dispatch(loadPosts());
          }

        }),
        filter(postsLoaded => postsLoaded),
        first()
    );
  }
}