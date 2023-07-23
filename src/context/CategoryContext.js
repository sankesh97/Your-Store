import { createContext, useState } from 'react';
import axios from 'axios';

import toaster from './Toaster';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/categories');
      setCategoryList(response.data.categories);
    } catch (err) {
      toaster('ERROR', err.response.data.errors[0]);
    }
  };

  return (
    <CategoryContext.Provider value={{ categoryList, fetchCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
