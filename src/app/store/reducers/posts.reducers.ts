import { createReducer, on } from "@ngrx/store";
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { postActionTypes } from "../actions/posts.actions";
import { PostState } from '../../core/models/post.state';
import { PostModel } from "../../modules/posts/model/post.interface";

export const adapter: EntityAdapter<PostModel> = createEntityAdapter<PostModel>();

export const initialState : PostState = adapter.getInitialState({
    postsLoaded: false,
    search : { filterBy: [], query: '' }
});

export const postsReducer = createReducer(
    initialState, 
    on(postActionTypes.postsLoaded, (state, action) => {
        return adapter.addMany(
          action.posts,
          {...state, postsLoaded: true}
        );
    }),
    on(postActionTypes.createPost, (state, action) => {
        return adapter.addOne(action.posts, state);
    }),
    on(postActionTypes.deletePost, (state, action) => {
        return adapter.removeOne(action.postId, state);
    })
);

export const { selectAll, selectIds, selectEntities } = adapter.getSelectors();