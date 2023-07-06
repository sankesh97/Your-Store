import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  CartContext,
  ProductContext,
  WishListContext,
} from '../../context/AppContext';

const SingleProduct = () => {
  const { productId } = useParams();
  const { fetchAProduct, currentProduct } = useContext(ProductContext);
  const { cartList, addToCartHandler } = useContext(CartContext);
  const { addWishList, wishList } = useContext(WishListContext);

  useEffect(() => {
    fetchAProduct(productId);
  }, []);

  return (
    <>
      {currentProduct ? (
        <>
          <div className='container'>
            <div className='row'>
              <div className='col-md-5 p-5'>
                <img
                  className='img-fluid'
                  alt={currentProduct.title}
                  src={currentProduct.imageURL}
                />
              </div>
              <div className='col-md-6 offset-md-1 p-5 gy-5'>
                <h1>{currentProduct.title}</h1>
                <h5>
                  Category: {currentProduct.category} |&nbsp;
                  <i className='bi bi-star-fill'></i> {currentProduct.rating}
                </h5>
                <p>{currentProduct.description}</p>
                <h2>&#8377; {currentProduct.price}</h2>

                <div className='input-group'>
                  <button
                    className='btn btn-outline-dark'
                    onClick={() => {
                      addWishList(currentProduct);
                    }}
                  >
                    <i className='bi bi-person-heart fs-4'></i>
                    <br />
                    {wishList.find((item) => item._id === currentProduct._id)
                      ? 'Go to Wishlist'
                      : 'Add to Wish List'}
                  </button>
                  <button
                    onClick={() => {
                      addToCartHandler(currentProduct);
                    }}
                    className='btn btn-outline-dark'
                  >
                    <i className='bi bi-bag fs-4'></i>
                    <br />
                    {cartList.find(
                      (item) => item._id === currentProduct._id
                    ) ? (
                      'Go to Cart'
                    ) : (
                      <>Add to Cart</>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>There is some issue with retrieving the data</p>
      )}
    </>
  );
};
export default SingleProduct;
