import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CheckoutContext } from '../../context/CheckoutContext';

const OrderSummary = () => {
  const { checkoutData } = useContext(CheckoutContext);
  const { currentAddress } = checkoutData;
  const loggedInUser = JSON.parse(sessionStorage.getItem('user'));

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
                  <h4 className='card-title mb-4'>Order Summary</h4>
                  {checkoutData.cartList.length > 0 ? (
                    checkoutData.cartList.map((product) => (
                      <div key={product._id} className='row gy-3 mb-4'>
                        <div className='col-lg-5 col-md-6'>
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
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-2 col-sm-6 col-md-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap jusitfy-content-between'>
                          <div className='px-3'>
                            <input type='text' value={product.qty} disabled />
                          </div>
                          <div className=''>
                            <h6 className='h6'>
                              &#x20B9;{product.price * product.qty}
                            </h6>{' '}
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
            {/* <!-- cart --> */}
            {/* <!-- summary --> */}
            <div className='col-lg-3'>
              <div className='card shadow-0 border'>
                <div className='card-body'>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-2'>Name:</p>
                    <p className='mb-2 fw-bold'>
                      {loggedInUser.firstName + ' ' + loggedInUser.lastName}
                    </p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-2'>Address:</p>
                    <p className='mb-2 text-end'>
                      {currentAddress.streetAddress} <br />
                      House No. {currentAddress.house}
                      <br />
                      {currentAddress.city} - {currentAddress.postal}
                      <br />
                      Phone no. {currentAddress.phone}
                    </p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-2'>Order Number</p>
                    <p className='mb-2 fw-bold'>
                      #{Math.round(Math.random() * 100)}
                    </p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-2'>Total price:</p>
                    <p className='mb-2 fw-bold'>
                      &#x20B9;
                      {checkoutData.getCartTotals.totalPrice
                        ? checkoutData.getCartTotals.totalPrice.toLocaleString(
                            'en-IN'
                          )
                        : '0'}
                    </p>
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
export default OrderSummary;
