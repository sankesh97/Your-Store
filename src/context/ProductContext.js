import { createContext, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [productList, setProductList] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState();

  const searchProduct = (productName) => {
    if (location.pathname !== '/products') navigate('/products');
    setSearchedProduct(productName);
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProductList(response.data.products);
      setFilteredProductList(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAProduct = async (productId) => {
    try {
      console.log(productId);
      const response = await axios.get('/api/products/' + productId);
      setCurrentProduct(response.data.product);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        productList,
        setProductList,
        fetchProducts,
        filteredProductList,
        fetchAProduct,
        currentProduct,
        searchProduct,
        searchedProduct,
        setSearchedProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
