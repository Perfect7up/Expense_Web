// auth.api.ts
import api from '.';

interface Credentials {
  email: string;
  password: string;
}

interface SignupData {
  full_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export const login = (credentials: Credentials) => {
  return api.post('auth/login', credentials);
};

export const me = () => {
  return api.get('auth/me');
};

export const signup = (signupData: SignupData) => {
  return api.post('auth/signup', signupData);
};

export const logout = () => {
  return api.post('auth/logout');
};

export default { login, me, signup, logout };
