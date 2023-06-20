import { CartProvider, CartContext } from './CartContext';
import { AuthProvider, AuthContext } from './AuthContext';
import { ProductContext, ProductProvider } from './ProductContext';
import { CategoryContext, CategoryProvider } from './CategoryContext';
import { WishListContext, WishListProvider } from './WishListContext';
export {
  CartContext,
  ProductContext,
  CategoryContext,
  WishListContext,
  AuthContext,
};

const AppContext = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductProvider>
          <CategoryProvider>
            <WishListProvider>{children}</WishListProvider>
          </CategoryProvider>
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  );
};
export default AppContext;
