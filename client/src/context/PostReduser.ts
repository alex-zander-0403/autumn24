import type { PostActionType, PostTypeDb } from '../types/postTypes';

const postReducer: React.Reducer<PostTypeDb[], PostActionType> = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_POSTS':
      return payload;
    case 'ADD_POST':
      return [payload, ...state];
    case 'DELETE_POST':
      return state.filter((el) => el.id !== payload);

    default:
      return state;
  }
};

export default postReducer;
