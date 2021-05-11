import { GET_POSTS, GetPostsStateType, PostActionTypes, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from './types';

const initialStateGetPosts: GetPostsStateType = {
  posts: [],
  error: null,
  status: 'idle',
};

export const getPostsReducer = (state = initialStateGetPosts, action: PostActionTypes): GetPostsStateType => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        status: 'loading',
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        status: 'succeeded',
        posts: action.payload,
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        status: 'failed',
        error: action.payload.error,
      };
    default:
      return state;
  }
};
