// ═══════════════════════════════════════════════════
// API CLIENT — Communicates with backend
// ═══════════════════════════════════════════════════

const API = {
  baseURL: window.location.origin,
  token: localStorage.getItem('auth_token'),

  // Set token after login
  setToken(token) {
    this.token = token;
    localStorage.setItem('auth_token', token);
  },

  // Clear token on logout
  clearToken() {
    this.token = null;
    localStorage.removeItem('auth_token');
  },

  // Helper to make requests
  async request(method, endpoint, body = null) {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (this.token) {
      options.headers.Authorization = `Bearer ${this.token}`;
    }

    if (body) {
      options.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(`${this.baseURL}/api${endpoint}`, options);

      if (response.status === 401) {
        // Token expired or invalid
        this.clearToken();
        window.location.reload();
        return null;
      }

      if (!response.ok) {
        const error = await response.json();
        console.error('API error:', error);
        return null;
      }

      return await response.json();
    } catch (error) {
      console.error('Request failed:', error);
      return null;
    }
  },

  // AUTH
  async register(email, password, name) {
    return await this.request('POST', '/auth/register', { email, password, name });
  },

  async login(email, password) {
    return await this.request('POST', '/auth/login', { email, password });
  },

  // USER PROFILE & PROGRESS
  async getProfile() {
    return await this.request('GET', '/user/profile');
  },

  async getProgress() {
    return await this.request('GET', '/user/progress');
  },

  async markLessonComplete(lessonId, xpEarned) {
    return await this.request('POST', '/user/progress/lesson-complete', { lessonId, xpEarned });
  },

  async recordQuizPassed(quizId, xpEarned) {
    return await this.request('POST', '/user/progress/quiz-passed', { quizId, xpEarned });
  },

  // NOTES
  async getNote(lessonId) {
    return await this.request('GET', `/user/notes/${lessonId}`);
  },

  async saveNote(lessonId, content) {
    return await this.request('PUT', `/user/notes/${lessonId}`, { content });
  },

  // EXERCISES
  async getExercise(exerciseKey) {
    return await this.request('GET', `/user/exercises/${exerciseKey}`);
  },

  async saveExercise(exerciseKey, answerData) {
    return await this.request('PUT', `/user/exercises/${exerciseKey}`, answerData);
  },

  // COMMUNITY
  async getCommunityPosts() {
    return await this.request('GET', '/community/posts');
  },

  async createPost(content) {
    return await this.request('POST', '/community/posts', { content });
  },

  async likePost(postId) {
    return await this.request('POST', `/community/posts/${postId}/like`);
  },

  async unlikePost(postId) {
    return await this.request('DELETE', `/community/posts/${postId}/like`);
  },
};
