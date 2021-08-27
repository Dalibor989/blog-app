import axios from 'axios';

class PostService {
  constructor() {
    const instance = axios.create({
      baseURL: 'http://localhost:8000/api'
    });

    this.apiClient = instance;
  }

  async getAll() {
    try {
      const { data } = await this.apiClient.get('posts?filter={"include" : ["comments"]}');
      return data;
    } catch (error) {
      console.log('Error', error);
    }
  }

  async add(newPost) {
    try {
      const { data } = await this.apiClient.post('posts', newPost);
      return data;
    } catch (error) {
      console.log('Error', error);
    }
  }

  async get(id) {
    try {
      const { data } = await this.apiClient.get(`posts/${id}?filter={"include" : ["comments"]}`)

      return data;
    } catch (error) {
      console.log('Error', error)
    }
  }

  async edit(id, newPost) {
    try {
      const { data } = await this.apiClient.put(`posts/${id}`, newPost)

      return data;
    } catch (error) {
      console.log('Error', error);
    }
  }

  async delete(postId) {
    try {
      const { data } = await this.apiClient.delete(`posts/${postId}`);

      return data;
    } catch (error) {
      console.log('Error', error);
    }
  }

  async addComment(comment, postId) {
    try {
      const { data } = await this.apiClient.post(`posts/${postId}/comments`, comment);
      
      return data;
    } catch (error) {
      console.log('Error', error);
    }
  }
}

export default new PostService();