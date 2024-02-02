import { useApolloClient } from '@apollo/client';

class AuthService {
  constructor() {
    this.client = useApolloClient();
  }

  getProfile() {
    try {
      const token = this.getToken();
      if (token) {
        const decoded = decode(token);
        return decoded;
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    this.client.resetStore(); // Reset Apollo Client store to reflect user authentication status
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    this.client.resetStore(); // Reset Apollo Client store to reflect user authentication status
    window.location.assign('/');
  }
}

export default new AuthService();