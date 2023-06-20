import { createContext, useState } from 'react';
import axios from 'axios';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/categories');
      setCategoryList(response.data.categories);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CategoryContext.Provider value={{ categoryList, fetchCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
