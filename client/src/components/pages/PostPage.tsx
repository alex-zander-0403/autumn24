import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import PostForm from '../ui/PostForm';
import PostCard from '../ui/PostCard';
import { PostContext } from '../../context/PostContext';
import type { PostTypeDb } from '../../types/postTypes';

function PostPage(): JSX.Element {
  //
  const posts = useContext<PostTypeDb[]>(PostContext);

  return (
    <>
      <Row className="mb-3">
        <PostForm />
      </Row>
      <Row className="mb-3">
        {posts.map((el) => (
          <PostCard key={el.id} post={el} />
        ))}
      </Row>
    </>
  );
}

export default PostPage;
