import { PostModel } from "../../modules/posts/model/post.interface";
import { EntityState } from '@ngrx/entity';

export interface PostState extends EntityState<PostModel> {
    postsLoaded: boolean,
    searchResults: PostModel[],
    search: string
}