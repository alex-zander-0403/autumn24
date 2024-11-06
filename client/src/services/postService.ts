import type { AxiosInstance, AxiosResponse } from 'axios';
import type { PostTypeDb, PostTypeForm } from '../types/postTypes';
import PostSchema from '../utils/validators';
import axiosInstance from './axiosInstance';

class PostService {
  constructor(private readonly client: AxiosInstance) {}

  async getPosts(): Promise<PostTypeDb[]> {
    const { data } = await this.client<PostTypeDb[]>('/posts');
    return PostSchema.array().parse(data);
  }

  async addPost(myFormData: PostTypeForm): Promise<PostTypeDb> {
    const { data } = await this.client.post<PostTypeDb>('/posts', myFormData);
    return PostSchema.parse(data);
  }

  async deletePost(id: PostTypeDb['id']): Promise<AxiosResponse> {
    return this.client.delete<AxiosResponse>(`/posts/${id}`);
  }
}

export default new PostService(axiosInstance);
