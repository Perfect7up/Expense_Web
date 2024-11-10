// category.api.ts
import api from '.';

interface category {
  name: string;
  type: string;
}

export const create = (category: category) => {
  return api.post('category/', category);
};

export const list = () => {
  return api.get('category/');
};

export const update = (categoryId: number, category: category) => {
  return api.patch(`category/${categoryId}`, category);
};

export const destory = (categoryId: number) => {
  return api.patch(`category/${categoryId}`);
};

export default { create, list, update, destory };
