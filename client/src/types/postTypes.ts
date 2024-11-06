import type { z } from 'zod';
import type PostSchema from '../utils/validators';

export type PostTypeDb = z.infer<typeof PostSchema>;

export type PostTypeForm = Omit<PostTypeDb, 'id'>;

export type PostActionType =
  | { type: 'SET_POSTS'; payload: PostTypeDb[] }
  | { type: 'ADD_POST'; payload: PostTypeDb }
  | { type: 'DELETE_POST'; payload: PostTypeDb['id'] };

export type PostHandlerType = {
  submitHandler: (dataForm: PostTypeForm) => Promise<void>;
  deleteHandler: (id: PostTypeDb['id']) => Promise<void>;
};
