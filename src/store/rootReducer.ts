import { combineReducers } from 'redux';
import { getPostsReducer } from '../app/Posts/state/reducer';
import { getCommentsReducer } from '../app/Comments/state/reducer';

const rootReducer = combineReducers({
  posts: getPostsReducer,
  comments: getCommentsReducer,
});

export default rootReducer;
