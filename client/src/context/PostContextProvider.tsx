import React, { useContext, useEffect, useReducer } from 'react';
import postService from '../services/postService';
import postReducer from './PostReduser';
import type { PostHandlerType, PostTypeDb } from '../types/postTypes';
import { PostContext, PostContextHandler } from './PostContext';

function PostContextProvider({ children }: { children: React.ReactElement }): JSX.Element {
  const [initPosts, dispatch] = useReducer(postReducer, []);

  useEffect(() => {
    postService
      .getPosts()
      .then((data) => dispatch({ type: 'SET_POSTS', payload: data }))
      .catch(console.log);
  }, []);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const dataForm = Object.fromEntries(new FormData(e.currentTarget));
    const newPost = await postService.addPost(dataForm);
    dispatch({ type: 'ADD_POST', payload: newPost });
    e.target.reset();
  };

  const deleteHandler = async (id: PostTypeDb['id']): Promise<void> => {
    try {
      await postService.deletePost(id);
      dispatch({ type: 'DELETE_POST', payload: id });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostContext.Provider value={initPosts}>
      <PostContextHandler.Provider value={{ submitHandler, deleteHandler }}>
        {children}
      </PostContextHandler.Provider>
    </PostContext.Provider>
  );
}

export default PostContextProvider;

//
export const usePostContext = (): PostHandlerType => {
  const handlers = useContext(PostContextHandler);
  if (!handlers) {
    throw new Error('no handlers context');
  }
  return handlers;
};
