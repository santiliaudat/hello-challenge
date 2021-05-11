import { GET_COMMENTS, GET_COMMENTS_SUCCESS, ADD_COMMENT } from '../state/types';
import { getCommentsReducer } from '../state/reducer';
import { getCommentsAction, getCommentsSuccessAction, addCommentAction } from '../state/actions';
import { createStore } from 'redux';

const store = createStore(getCommentsReducer);

const initialStateMock = {
  comments: [],
  error: null,
  status: 'idle',
};

const commentsFake = [
  {
    postId: 2,
    id: 8,
    name: 'et omnis dolorem',
    email: 'Mallory_Kunze@marie.org',
    body:
      'ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque',
  },
  {
    postId: 2,
    id: 9,
    name: 'provident id voluptas',
    email: 'Meghan_Littel@rene.us',
    body:
      'sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus',
  },
  {
    postId: 2,
    id: 10,
    name: 'eaque et deleniti atque tenetur ut quo ut',
    email: 'Carmen_Keeling@caroline.name',
    body:
      'voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis',
  },
];

describe('Comments Reducer', () => {
  it('Should return loading state', () => {
    store.dispatch(getCommentsAction());
    expect(store.getState()).toEqual({ ...initialStateMock, status: 'loading' });
  });

  it('Should return new state when receive comments', () => {
    const stateSuccess = {
      comments: commentsFake,
      error: null,
      status: 'succeeded',
    };
    store.dispatch(getCommentsSuccessAction(commentsFake));
    expect(store.getState()).toEqual(stateSuccess);
  });

  it('Should return new state when add comments', () => {
    const newComment = {
      id: 123,
      postId: 2,
      name: 'Juan perez',
      email: 'juanperez@challenge.com',
      body: 'my first comment',
    };
    let expectedState = [...commentsFake, newComment];
    store.dispatch(addCommentAction(newComment));
    expect(store.getState().comments).toEqual(expectedState);
  });
});
