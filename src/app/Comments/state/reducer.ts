import {
  GET_COMMENTS,
  GET_COMMENTS_FAILURE,
  GET_COMMENTS_SUCCESS,
  ADD_COMMENT,
  GetCommentsStateType,
  CommentActionTypes,
} from './types';

const initialStateGetComments: GetCommentsStateType = {
  comments: [],
  error: null,
  status: 'idle',
};

export const getCommentsReducer = (
  state = initialStateGetComments,
  action: CommentActionTypes
): GetCommentsStateType => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        status: 'loading',
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        status: 'succeeded',
        comments: action.payload,
      };
    case GET_COMMENTS_FAILURE:
      return {
        ...state,
        status: 'failed',
        error: action.payload.error,
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    default:
      return state;
  }
};
