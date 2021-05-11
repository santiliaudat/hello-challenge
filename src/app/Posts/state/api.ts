import { Dispatch } from 'redux';
import { getPostsAction, getPostsSuccessAction, getPostsErrorAction } from './actions';
import { PostActionTypes } from './types';

export const getPosts = () => {
  return function (dispatch: Dispatch<PostActionTypes>) {
    dispatch(getPostsAction());
    const POST_URL = 'https://jsonplaceholder.typicode.com/posts';
    fetch(POST_URL, {
      method: 'GET',
    })
      .then((res) => {
        if (!res.ok) throw Error();
        return res.json();
      })
      .then((data) => {
        dispatch(getPostsSuccessAction(data));
        return data;
      })
      .catch(() => dispatch(getPostsErrorAction('error')));
  };
};
