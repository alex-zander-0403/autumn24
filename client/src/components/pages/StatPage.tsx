import React, { useContext } from 'react';
import type { PostTypeDb } from '../../types/postTypes';
import { PostContext } from '../../context/PostContext';

function StatPage(): JSX.Element {
  //
  const posts = useContext<PostTypeDb[]>(PostContext);

  return <div>Количество постов на PostPage: {posts.length}</div>;
}

export default StatPage;
