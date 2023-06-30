import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AppContext';

const Checkout = () => {
  const { fetchCartDetails, cartList, deleteCart, getCartTotals } =
    useContext(CartContext);
  const { loggedInUser } = useContext(AuthContext);

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
                        value={loggedInUser.lastName}
                        placeholder='Type here'
                        className='form-control'
                      />
                    </div>
                  </div>

                  <div className='col-6 mb-3'>
                    <p className='mb-0'>Phone</p>
                    <div className='form-outline'>
                      <input
                        type='tel'
                        id='typePhone'
                        value='+91 '
                        className='form-control'
                      />
                    </div>
                  </div>

                  <div className='col-6 mb-3'>
                    <p className='mb-0'>Email</p>
                    <div className='form-outline'>
                      <input
                        type='email'
                        id='typeEmail'
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
                  <div className='col-lg-4 mb-3'>
                    {/* <!-- Default checked radio --> */}
                    <div className='form-check h-100 border rounded-3'>
                      <div className='p-3'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='flexRadioDefault'
                          id='flexRadioDefault1'
                        />
                        <label
                          className='form-check-label'
                          htmlFor='flexRadioDefault1'
                        >
                          Express Shipping <br />
                          <small className='text-muted'>
                            Next - Day Delivery{' '}
                          </small>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 mb-3'>
                    {/* <!-- Default radio --> */}
                    <div className='form-check h-100 border rounded-3'>
                      <div className='p-3'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='flexRadioDefault'
                          id='flexRadioDefault2'
                        />
                        <label
                          className='form-check-label'
                          htmlFor='flexRadioDefault2'
                        >
                          Regular Shipping <br />
                          <small className='text-muted'>3-4 days </small>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 mb-3'>
                    {/* <!-- Default radio --> */}
                    <div className='form-check h-100 border rounded-3'>
                      <div className='p-3'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='flexRadioDefault'
                          id='flexRadioDefault3'
                        />
                        <label
                          className='form-check-label'
                          htmlFor='flexRadioDefault3'
                        >
                          Self pick-up <br />
                          <small className='text-muted'>
                            Come to our shop{' '}
                          </small>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-sm-8 mb-3'>
                    <p className='mb-0'>Address</p>
                    <div className='form-outline'>
                      <input
                        type='text'
                        id='typeText'
                        placeholder='Type here'
                        className='form-control'
                      />
                    </div>
                  </div>

                  <div className='col-sm-4 mb-3'>
                    <p className='mb-0'>City</p>
                    <select className='form-select'>
                      <option value='1'>New York</option>
                      <option value='2'>Moscow</option>
                      <option value='3'>Samarqand</option>
                    </select>
                  </div>

                  <div className='col-sm-4 mb-3'>
                    <p className='mb-0'>House</p>
                    <div className='form-outline'>
                      <input
                        type='text'
                        id='typeText'
                        placeholder='Type here'
                        className='form-control'
                      />
                    </div>
                  </div>

                  <div className='col-sm-4 col-6 mb-3'>
                    <p className='mb-0'>Postal code</p>
                    <div className='form-outline'>
                      <input
                        type='text'
                        id='typeText'
                        className='form-control'
                      />
                    </div>
                  </div>

                  <div className='col-sm-4 col-6 mb-3'>
                    <p className='mb-0'>Zip</p>
                    <div className='form-outline'>
                      <input
                        type='text'
                        id='typeText'
                        className='form-control'
                      />
                    </div>
                  </div>
                </div>

                <div className='form-check mb-3'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckDefault1'
                  />
                  <label
                    className='form-check-label'
                    htmlFor='flexCheckDefault1'
                  >
                    Save this address
                  </label>
                </div>

                <div className='mb-3'>
                  <p className='mb-0'>Message to seller</p>
                  <div className='form-outline'>
                    <textarea
                      className='form-control'
                      id='textAreaExample1'
                      rows='2'
                    ></textarea>
                  </div>
                </div>

                <div className='float-end'>
                  <button className='btn btn-light border'>Cancel</button>
                  <button className='btn btn-success shadow-0 border'>
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

              <div className='input-group mt-3 mb-4'>
                <input
                  type='text'
                  className='form-control border'
                  name=''
                  placeholder='Promo code'
                />
                <button className='btn btn-light text-primary border'>
                  Apply
                </button>
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
