import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { CheckoutContext } from '../../context/CheckoutContext';

const Checkout = () => {
  const { fetchCartDetails, cartList, getCartTotals } = useContext(CartContext);
  const { checkOutHandler } = useContext(CheckoutContext);
  const loggedInUser = JSON.parse(sessionStorage.getItem('user'));
  const [currentAddress, setCurrentAddress] = useState();

  useEffect(() => {
    fetchCartDetails();
  }, []);

  return (
    <section className='bg-light py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-8 col-lg-8 mb-4'>
            {/* <!-- Checkout --> */}
            <div className='card shadow-0 border'>
              <div className='p-4'>
                <h5 className='card-title mb-3'>Checkout</h5>
                <div className='row'>
                  <div className='col-6 mb-3'>
                    <p className='mb-0'>First name</p>
                    <div className='form-outline'>
                      <input
                        type='text'
                        id='typeText'
                        readOnly
                        disabled
                        value={loggedInUser.firstName}
                        placeholder='Type here'
                        className='form-control'
                      />
                    </div>
                  </div>

                  <div className='col-6'>
                    <p className='mb-0'>Last name</p>
                    <div className='form-outline'>
                      <input
                        type='text'
                        id='typeText'
                        readOnly
                        disabled
                        value={loggedInUser.lastName}
                        placeholder='Type here'
                        className='form-control'
                      />
                    </div>
                  </div>

                  <div className='col-12 mb-3'>
                    <p className='mb-0'>Email</p>
                    <div className='form-outline'>
                      <input
                        type='email'
                        id='typeEmail'
                        readOnly
                        disabled
                        value={loggedInUser.email}
                        placeholder='example@gmail.com'
                        className='form-control'
                      />
                    </div>
                  </div>
                </div>

                <hr className='my-4' />

                <h5 className='card-title mb-3'>Shipping info</h5>

                <div className='row mb-3'>
                  {loggedInUser.address.map((address) => {
                    return (
                      <div className='col-lg-4 mb-3'>
                        <div className='form-check h-100 border rounded-3'>
                          <div className='p-3'>
                            <input
                              className='form-check-input'
                              type='radio'
                              name='flexRadioDefault'
                              value={address}
                              onChange={() => {
                                setCurrentAddress(address);
                              }}
                              id='flexRadioDefault2'
                            />
                            <label
                              className='form-check-label'
                              htmlFor='flexRadioDefault2'
                            >
                              {address.streetAddress} <br />
                              House No. {address.house}
                              <br />
                              {address.city} - {address.postal}
                              <br />
                              Phone no. {address.phone}
                            </label>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className='float-end'>
                  <button className='btn btn-light border'>Cancel</button>
                  <button
                    onClick={() => {
                      checkOutHandler(
                        loggedInUser,
                        cartList,
                        currentAddress,
                        getCartTotals
                      );
                    }}
                    className='btn btn-primary shadow-0 border'
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Checkout --> */}
          </div>
          <div className='col-xl-4 col-lg-4 d-flex justify-content-center justify-content-lg-end'>
            <div className='ms-lg-4 mt-4 mt-lg-0' style={{ maxWidth: '320px' }}>
              <h6 className='mb-3'>Summary</h6>
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
                <p className='mb-2'>Shipping:</p>
                <p className='mb-2 text-success'>Free</p>
              </div>
              <div className='d-flex justify-content-between'>
                <p className='mb-2'>Taxes:</p>
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

              <hr />
              <h6 className='text-dark my-4'>Items in cart</h6>
              {cartList ? (
                cartList.map((product) => (
                  <div
                    key={product._id}
                    className='d-flex align-items-center mb-4'
                  >
                    <div className='me-3 position-relative'>
                      <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary'>
                        1
                      </span>
                      <img
                        src={product.imageURL}
                        style={{ height: '96px', width: '96x' }}
                        className='img-sm rounded border'
                        alt={product.title}
                      />
                    </div>
                    <div className=''>
                      <Link href='#' className='nav-link'>
                        {product.title}
                      </Link>
                      <div className='price text-muted '>
                        Total:{' '}
                        {(product.qty * product.price).toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>There is some error processing you request</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Checkout;
