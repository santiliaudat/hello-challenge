import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../state/api';
import { AppState } from '../../../store';

/**
 * Hook to manage logic from GET_COMMENTS
 * @returns comments, error, status
 */

const useComments = (postId: number) => {
  const dispatch = useDispatch();
  const status = useSelector((state: AppState) => state.comments.status);
  const comments = useSelector((state: AppState) => state.comments.comments);
  const filterComments = comments.filter((comment) => comment.postId === postId);

  const fetchComments = () => {
    dispatch(getComments());
  };

  return {
    fetchComments,
    filterComments,
    status,
  };
};

export default useComments;
