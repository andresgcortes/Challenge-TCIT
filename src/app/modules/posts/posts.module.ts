import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PostsRoutingModule } from './posts-routing.module';
import { ListPostsPageComponent } from './page/list/list-page.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostsService } from './services/posts.service';
import { postsReducer } from '../../store/reducers/posts.reducers';
import { PostsEffects  } from '../../store/effects/post.effects';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostSearchComponent } from './components/post-search/post-search.component';

@NgModule({
  declarations: [
    ListPostsPageComponent,
    PostListComponent,
    PostFormComponent,
    PostSearchComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    StoreModule.forFeature('posts', postsReducer),
    EffectsModule.forFeature([PostsEffects])
  ],
  providers: [PostsService]
})
export class PostsModule { }
