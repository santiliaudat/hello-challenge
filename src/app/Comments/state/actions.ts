import { Comment } from '../../../type';
import { GET_COMMENTS, GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILURE, ADD_COMMENT, CommentActionTypes } from './types';

export const getCommentsAction = (): CommentActionTypes => {
  return {
    type: GET_COMMENTS,
  };
};

export const getCommentsSuccessAction = (comments: Comment[]): CommentActionTypes => {
  return {
    type: GET_COMMENTS_SUCCESS,
    payload: comments,
  };
};

export const getCommentsErrorAction = (error: string): CommentActionTypes => {
  return {
    type: GET_COMMENTS_FAILURE,
    payload: { error },
  };
};

export const addCommentAction = (comment: Comment): CommentActionTypes => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};
