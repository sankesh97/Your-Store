import { useContext, useEffect } from 'react';
import { CartContext, WishListContext } from '../../context/AppContext';
import { NavLink } from 'react-router-dom';

const WishList = () => {
  const { fetchWishList, wishList, deleteWishList } =
    useContext(WishListContext);
  const { addToCartHandler } = useContext(CartContext);

  useEffect(() => {
    fetchWishList();
  }, [fetchWishList]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='card border shadow-0'>
            <div className='m-4'>
              <h4 className='card-title mb-4'>Your Wish List</h4>
              {wishList.length > 0 ? (
                wishList.map((product) => (
                  <div key={product._id} className='row gy-3 mb-4'>
                    <div className='col-lg-5'>
                      <div className='me-lg-5'>
                        <div className='d-flex'>
                          <img
                            src={product.imageURL}
                            className='border rounded me-3'
                            alt={product.title}
                            style={{ width: '96px', height: '96px' }}
                          />
                          <div className=''>
                            <NavLink to={`/products/${product._id}`}>
                              {product.title}
                            </NavLink>
                            <p className='text-muted'>{product.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap'>
                      <div className=''>
                        <h6 className='h6'>&#8377;{product.price}</h6> <br />
                      </div>
                    </div>
                    <div className='col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2'>
                      <div className='float-md-end g-2'>
                        <span
                          className='btn btn-light border px-2 icon-hover-primary'
                          onClick={() => {
                            addToCartHandler(product);
                          }}
                        >
                          Add to Cart
                        </span>
                        <span
                          className='btn btn-light border text-danger icon-hover-danger'
                          onClick={() => {
                            deleteWishList(product);
                          }}
                        >
                          Remove
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>There are no products here</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WishList;
