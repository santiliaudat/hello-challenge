import { Comment } from '../../../type';

export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_FAILURE = 'GET_COMMENTS_FAILURE';
export const ADD_COMMENT = 'ADD_COMMENT';

export interface GetCommentsStateType {
  comments: Comment[];
  error: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

interface GetCommentsActionType {
  type: typeof GET_COMMENTS;
}

interface GetCommentsSuccessActionType {
  type: typeof GET_COMMENTS_SUCCESS;
  payload: Comment[];
}

interface GetCommentsFailureActionType {
  type: typeof GET_COMMENTS_FAILURE;
  payload: { error: string };
}

interface AddCommentActionType {
  type: typeof ADD_COMMENT;
  payload: Comment;
}

export type CommentActionTypes =
  | GetCommentsActionType
  | GetCommentsSuccessActionType
  | GetCommentsFailureActionType
  | AddCommentActionType;
