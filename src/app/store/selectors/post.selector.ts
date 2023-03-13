import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "src/app/core/models/post.state";
import { AppState } from "../app.state";

import { selectAll , selectEntities} from '../reducers/posts.reducers';
import { EntityState } from '@ngrx/entity';

export const PostFeatureSelector = createFeatureSelector<PostState>('posts');

export const getAllPosts = createSelector(
    PostFeatureSelector,
    selectAll
);

export const PostsLoaded = createSelector(
    PostFeatureSelector,
    state => state.postsLoaded
);

