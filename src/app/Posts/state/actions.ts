import { Post } from '../../../type';
import { GET_POSTS, GET_POSTS_FAILURE, GET_POSTS_SUCCESS, PostActionTypes } from './types';

export const getPostsAction = (): PostActionTypes => {
  return {
    type: GET_POSTS,
  };
};

export const getPostsSuccessAction = (posts: Post[]): PostActionTypes => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts,
  };
};

export const getPostsErrorAction = (error: string): PostActionTypes => {
  return {
    type: GET_POSTS_FAILURE,
    payload: { error },
  };
};
