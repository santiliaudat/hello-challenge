import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../state/api';
import { AppState } from '../../../store';

/**
 * Hook to manage logic from GET_POSTS
 * @returns posts, error, status
 */

const usePosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: AppState) => state.posts.posts);
  const error = useSelector((state: AppState) => state.posts.error);
  const status = useSelector((state: AppState) => state.posts.status);

  useEffect(() => {
    //to prevent innecesary api calls
    if (status === 'idle') {
      dispatch(getPosts());
    }
  }, [dispatch, status]);

  return { posts, error, status };
};

export default usePosts;
