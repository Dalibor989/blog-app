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
      const { data } = await this.apiClient.get('posts');
      return data;
    } catch (error) {
      console.log('Error', error);
    }
  }
}

export default new PostService();