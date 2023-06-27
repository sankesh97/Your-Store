import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/AppContext';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const { fetchCartDetails, cartList, deleteCart, getCartTotals } =
    useContext(CartContext);
  useEffect(() => {
    fetchCartDetails();
  }, []);
  return (
    <>
      {/* <!-- cart + summary --> */}
      <section className='my-2'>
        <div className='container'>
          <div className='row'>
            {/* <!-- cart --> */}
            <div className='col-lg-9'>
              <div className='card border shadow-0'>
                <div className='m-4'>
                  <h4 className='card-title mb-4'>Your shopping cart</h4>
                  {cartList.length > 0 ? (
                    cartList.map((product) => (
                      <div key={product._id} className='row gy-3 mb-4'>
                        <div className='col-lg-5'>
                          <div className='me-lg-5'>
                            <div className='d-flex'>
                              <img
                                src={product.imageURL}
                                alt={product.title}
                                className='border rounded me-3'
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
                          <div className='px-3'>
                            <input type='text' value={product.qty} disabled />
                          </div>
                          <div className=''>
                            <h6 className='h6'>
                              {product.price * product.qty}
                            </h6>{' '}
                            <br />
                            <small className='text-muted text-nowrap'>
                              {' '}
                              {product.price} / per item{' '}
                            </small>
                          </div>
                        </div>
                        <div className='col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2'>
                          <div className='float-md-end'>
                            <a
                              href='#!'
                              className='btn btn-light border px-2 icon-hover-primary'
                            >
                              <i className='bi bi-heart fa-lg px-1 text-secondary'></i>
                            </a>
                            <span
                              onClick={() => {
                                deleteCart(product);
                              }}
                              className='btn btn-light border text-danger icon-hover-danger'
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

                <div className='border-top pt-4 mx-4 mb-4'>
                  <p>
                    <i className='bi bi-truck text-muted'></i> Free Delivery
                    within 1-2 weeks
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- cart --> */}
            {/* <!-- summary --> */}
            <div className='col-lg-3'>
              <div className='card shadow-0 border'>
                <div className='card-body'>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-2'>Total price:</p>
                    <p className='mb-2'>
                      {getCartTotals.totalPriceBeforeTaxes.toLocaleString(
                        'en-IN'
                      )}
                    </p>
                  </div>

                  <div className='d-flex justify-content-between'>
                    <p className='mb-2'>Tax:</p>
                    <p className='mb-2'>
                      {getCartTotals.taxes.toLocaleString('en-IN')}
                    </p>
                  </div>
                  <hr />
                  <div className='d-flex justify-content-between'>
                    <p className='mb-2'>Total price:</p>
                    <p className='mb-2 fw-bold'>
                      {getCartTotals.totalPrice.toLocaleString('en-IN')}
                    </p>
                  </div>

                  <div className='mt-3'>
                    <button className='btn btn-success w-100 shadow-0 mb-2'>
                      {' '}
                      Make Purchase{' '}
                    </button>
                    <NavLink to={`/shop`}>
                      <button className='btn btn-success w-100 shadow-0 mb-2'>
                        <i class='bi bi-backspace'></i> Back to shop
                      </button>{' '}
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- summary --> */}
          </div>
        </div>
      </section>
      {/* <!-- cart + summary --> */}
    </>
  );
};
export default Cart;
