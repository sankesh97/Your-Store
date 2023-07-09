import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/AppContext';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const {
    fetchCartDetails,
    cartList,
    deleteCart,
    getCartTotals,
    incrementCart,
    decrementCart,
  } = useContext(CartContext);
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
                        <div className='col-lg-4'>
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
                        <div className='col-lg-4 col-sm-6 col-6 d-flex  flex-row flex-lg-column flex-xl-row text-nowrap'>
                          <div className='px-1'>
                            <div class='input-group mb-3'>
                              <span
                                class='input-group-text'
                                id='basic-addon1'
                                onClick={() => {
                                  decrementCart(product);
                                }}
                              >
                                -
                              </span>
                              <input
                                type='text'
                                value={product.qty}
                                disabled
                                class='form-control text-center'
                                placeholder='Username'
                                aria-label='Username'
                                aria-describedby='basic-addon1'
                              ></input>

                              <span
                                class='input-group-text'
                                id='basic-addon1'
                                onClick={() => {
                                  incrementCart(product);
                                }}
                              >
                                +
                              </span>
                            </div>
                          </div>
                          <div className='m-2'>
                            <h6>
                              Rs.{' '}
                              {(product.price * product.qty).toLocaleString(
                                'en-IN'
                              )}
                            </h6>{' '}
                          </div>
                        </div>
                        <div className='col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2'>
                          <div className='float-md-end'>
                            <a
                              href='#!'
                              className='btn btn-light border px-2 icon-hover-primary'
                            >
                              Move to Cart
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
                      {getCartTotals.totalPriceBeforeTaxes
                        ? getCartTotals.totalPriceBeforeTaxes.toLocaleString(
                            'en-IN'
                          )
                        : '0'}
                    </p>
                  </div>

                  <div className='d-flex justify-content-between'>
                    <p className='mb-2'>Tax:</p>
                    <p className='mb-2'>
                      {getCartTotals.taxes
                        ? getCartTotals.taxes.toLocaleString('en-IN')
                        : '0'}
                    </p>
                  </div>
                  <hr />
                  <div className='d-flex justify-content-between'>
                    <p className='mb-2'>Total price:</p>
                    <p className='mb-2 fw-bold'>
                      {getCartTotals.totalPrice
                        ? getCartTotals.totalPrice.toLocaleString('en-IN')
                        : '0'}
                    </p>
                  </div>

                  <div className='mt-3'>
                    <NavLink to={cartList.length ? `/checkout` : ''}>
                      <button className='btn btn-primary w-100 shadow-0 mb-2'>
                        {' '}
                        Checkout{' '}
                      </button>
                    </NavLink>
                    <NavLink to={`/products`}>
                      <button className='btn btn-primary w-100 shadow-0 mb-2'>
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
