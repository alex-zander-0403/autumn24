import { createContext } from 'react';
import type { PostHandlerType, PostTypeDb } from '../types/postTypes';

export const PostContext = createContext<PostTypeDb[]>([]);

export const PostContextHandler = createContext<PostHandlerType | null>(null);
