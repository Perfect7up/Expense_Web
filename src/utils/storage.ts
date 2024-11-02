export const getUserToken = (): string | null => {
  return localStorage.getItem('auth');
};

export const setUserToken = (token: string): void => {
  localStorage.setItem('auth', token);
};

export const getStoredUser = (): any | null => {
  const userStore = localStorage.getItem('user');
  if (userStore) {
    return JSON.parse(userStore);
  }
  return null;
};

export const setStoredUser = (user: any): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const removeLocalData = (): void => {
  localStorage.removeItem('auth');
  localStorage.removeItem('user');
};

export const getStoredUserProp = (prop: string): any | null => {
  const userStore = localStorage.getItem('user');
  if (userStore) {
    const user = JSON.parse(userStore);
    return user[prop] ?? false;
  }
  return null;
};
