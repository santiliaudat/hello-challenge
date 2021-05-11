import React, { useState } from 'react';
import useComments from './hooks/useComments';
import { useForm } from './hooks/useForm';
import { useDispatch } from 'react-redux';
import './Comments.css';
import { addCommentAction } from './state/actions';
import { Comment } from '../../type';

/**
 * I think it is better if the calls to the comment api could be done with one parameter per post.
 * but since the url brings all the comments of all the posts, I add a hook filter to show it.
 * and add the `idle` status to not repeat the call to the api
 */

interface Props {
  postId: number;
}

const Comments = ({ postId }: Props) => {
  const [showComments, setShowComments] = useState(false);
  const { fetchComments, filterComments, status } = useComments(postId);

  const handleClick = () => {
    setShowComments((state) => !state);
    // only get comments if there is still no data
    if (status === 'idle') {
      fetchComments();
    }
  };

  return (
    <div>
      <button className="link" onClick={handleClick}>
        {!showComments ? 'Show' : 'Hide'} comments 💬
      </button>
      {showComments && (
        <div>
          <ul className="comments-container" data-cy="comments-container">
            {filterComments.map((comment) => (
              <li className="comment-object" key={comment.id}>
                <div className="comment-text">
                  <h4 className="username">
                    {comment.name} <span className="muted">&#183; {comment.email}</span>
                  </h4>
                  <p className="comment">{comment.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <CommentForm postId={postId} />
        </div>
      )}
    </div>
  );
};

const formInitialState = {
  email: '',
  name: '',
  body: '',
};

const CommentForm = ({ postId }: Props) => {
  const dispatch = useDispatch();
  const handleSubmitComment = () => {
    dispatch(
      addCommentAction({
        ...(values as Comment),
        postId,
        // generate fake ID
        id: Math.floor(Math.random() * 90000) + 10000,
      })
    );
  };

  const { onChange, onSubmit, values } = useForm(handleSubmitComment, formInitialState);

  return (
    <form className="comments-form" onSubmit={onSubmit}>
      <input className="comments-form-name" type="text" placeholder="Name" name="name" onChange={onChange} required />
      <input
        className="comments-form-email"
        type="email"
        placeholder="Email"
        name="email"
        onChange={onChange}
        required
      />
      <input
        className="comments-form-text"
        type="text"
        placeholder="Comment"
        name="body"
        onChange={onChange}
        required
      />
      <button type="submit" className="comment-submit">
        Send Comment
      </button>
    </form>
  );
};

export default Comments;
