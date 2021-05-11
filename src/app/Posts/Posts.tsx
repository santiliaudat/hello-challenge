import React from 'react';
import Layout from '../../ui/Layout';
// import Comments from '../Comments';
import usePosts from './hooks/usePosts';
import './Posts.css';

/**
 * Main component that lists all posts. the logic is done in the custom hook usePosts();
 */

const Posts = () => {
  const { posts, error, status } = usePosts();

  return (
    <Layout>
      <div>
        {status === 'loading' && <div data-cy="loading" className="loading">Loading....</div>}
        {status === 'failed' && <div data-cy="error">Error: {error}</div>}
        {posts.map((post) => (
          <div className="card" key={post.id} data-cy="data">
            <div className="card-container">
              <div className="card-content">
                <p className="card-title">{post.title}</p>
                <p className="card-description">{post.body}</p>
              </div>
              <div className="card-footer">
                comments list
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Posts;
