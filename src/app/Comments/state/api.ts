import { Dispatch } from 'redux';
import { getCommentsAction, getCommentsErrorAction, getCommentsSuccessAction } from './actions';
import { CommentActionTypes } from './types';

export const getComments = () => {
  return function (dispatch: Dispatch<CommentActionTypes>) {
    dispatch(getCommentsAction());
    const POST_URL = `https://jsonplaceholder.typicode.com/comments`;
    fetch(POST_URL, {
      method: 'GET',
    })
      .then((res) => {
        if (!res.ok) throw Error();
        return res.json();
      })
      .then((data) => {
        dispatch(getCommentsSuccessAction(data));
        return data;
      })
      .catch(() => dispatch(getCommentsErrorAction('error')));
  };
};
