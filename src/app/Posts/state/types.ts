import { Post } from '../../../type';

export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export interface GetPostsStateType {
  posts: Post[];
  error: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

interface GetPostsActionType {
  type: typeof GET_POSTS;
}

interface GetPostsSuccessActionType {
  type: typeof GET_POSTS_SUCCESS;
  payload: Post[];
}

interface GetPostsFailureActionType {
  type: typeof GET_POSTS_FAILURE;
  payload: { error: string };
}

export type PostActionTypes = GetPostsActionType | GetPostsFailureActionType | GetPostsSuccessActionType;
