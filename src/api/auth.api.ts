import api from '.';

interface credentials {
  email: string;
  password: string;
}

export const signin = (credentials: credentials) => {
  return api.post('/auth/login', credentials);
};

export default { signin };
