import { createAction, props } from "@ngrx/store";
import { PostModel } from '../../modules/posts/model/post.interface';

export const loadPosts = createAction(
    '[Posts List] Load Posts via Service'
);

export const postsLoaded = createAction(
    '[Posts Effect] Posts Loaded sucessfully',
    props<{ posts: PostModel[] }>()
);

export const createPost = createAction(
    '[Create Post Component] Create Post',
    props<{posts: PostModel}>()
);

export const deletePost = createAction(
    '[Posts List Operations] Delete Post',
    props<{postId: string}>()
);

export const searchPost = createAction(
    '[Posts List Search] Search Post',
    props<{ posts: PostModel[], search: { filterBy : []; query: string }}>()
);

export const postActionTypes = {
    loadPosts,
    postsLoaded,
    createPost,
    deletePost,
    searchPost
};