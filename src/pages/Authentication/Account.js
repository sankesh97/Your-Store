import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Account = () => {
  const loggedInUser = JSON.parse(sessionStorage.getItem('user'));
  const { addressHandler } = useContext(AuthContext);
  const [currentMessage, SetCurrentMessage] = useState();
  const [currentAddress, setCurrentAddress] = useState({
    id: '',
    streetAddress: '',
    city: '',
    house: '',
    postal: '',
    phone: '',
  });

  const clearForm = () => {
    setCurrentAddress({
      id: '',
      streetAddress: '',
      city: '',
      house: '',
      postal: '',
      phone: '',
    });
  };

  const onChangeHandler = (e) => {
    setCurrentAddress((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    console.log(currentAddress);
  };

  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col mb-4'>
            {/* <!-- Checkout --> */}
            <div className='card shadow-0 border'>
              <div className='p-4'>
                <h5 className='card-title mb-3'>My Account</h5>
                <div className='row'>
                  <div className='col-6 mb-3'>
                    <p className='mb-0'>First name</p>
                    <div className='form-outline'>
                      <input
                        type='text'
                        readOnly
                        disabled
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
                        readOnly
                        disabled
                        id='typeText'
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
                        readOnly
                        disabled
                        id='typeEmail'
                        value={loggedInUser.email}
                        placeholder='example@gmail.com'
                        className='form-control'
                      />
                    </div>
                  </div>
                </div>

                <hr className='my-4' />

                <h5 className=' mb-3'>Address</h5>
                <div className='row mb-3 g-2'>
                  {loggedInUser.address &&
                    loggedInUser.address.map((address) => (
                      <div key={address.id} className='col-lg-4 mb-3'>
                        <div className='card'>
                          <div className='card-body'>
                            <p>
                              <strong>Street Address:</strong>{' '}
                              {address.streetAddress}
                            </p>
                            <p>
                              <strong>House/Flat No:</strong> {address.house}
                            </p>
                            <p>
                              <strong>City:</strong>
                              {address.city}
                            </p>
                            <p>
                              <strong>Postal Code:</strong>
                              {address.postal}
                            </p>
                            <p>
                              <strong>Phone Number:</strong>
                              {address.phone}
                            </p>
                            <button
                              className='btn btn-primary'
                              onClick={() => {
                                SetCurrentMessage('Edit Address');
                                setCurrentAddress({
                                  id: address.id,
                                  streetAddress: address.streetAddress,
                                  city: address.city,
                                  house: address.house,
                                  postal: address.postal,
                                  phone: address.phone,
                                });
                              }}
                            >
                              Edit Address
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  <div className='col-lg-4 mb-3 d-flex flex-column justify-content-center align-items-center'>
                    <i
                      onClick={() => {
                        clearForm();
                        SetCurrentMessage('Add New Address');
                      }}
                      className='bi bi-plus-circle fs-3'
                    ></i>
                    <p>Add New Address</p>
                  </div>
                </div>
                <br />
                <h4>
                  {currentMessage === 'Edit Address'
                    ? 'Edit Address'
                    : 'Add New Address'}
                </h4>
                <div className='row'>
                  <div className='col-sm-8 mb-3'>
                    <p className='mb-0'>Address</p>
                    <div className='form-outline'>
                      <input
                        type='text'
                        id='streetAddress'
                        value={currentAddress.streetAddress}
                        className='form-control'
                        onChange={(e) => {
                          onChangeHandler(e);
                        }}
                      />
                    </div>
                  </div>

                  <div className='col-sm-4 mb-3'>
                    <p className='mb-0'>City</p>
                    <input
                      type='text'
                      value={currentAddress.city}
                      id='city'
                      className='form-control'
                      onChange={(e) => {
                        onChangeHandler(e);
                      }}
                    />
                  </div>

                  <div className='col-sm-4 mb-3'>
                    <p className='mb-0'>House</p>
                    <div className='form-outline'>
                      <input
                        type='text'
                        id='house'
                        value={currentAddress.house}
                        className='form-control'
                        onChange={(e) => {
                          onChangeHandler(e);
                        }}
                      />
                    </div>
                  </div>

                  <div className='col-sm-4 col-6 mb-3'>
                    <p className='mb-0'>Postal code</p>
                    <div className='form-outline'>
                      <input
                        type='text'
                        id='postal'
                        value={currentAddress.postal}
                        className='form-control'
                        onChange={(e) => {
                          onChangeHandler(e);
                        }}
                      />
                    </div>
                  </div>

                  <div className='col-sm-4 col-6 mb-3'>
                    <p className='mb-0'>Phone Number</p>
                    <div className='form-outline'>
                      <input
                        type='tel'
                        id='phone'
                        value={currentAddress.phone}
                        className='form-control'
                        onChange={(e) => {
                          onChangeHandler(e);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className='d-grid gap-2 d-md-block'>
                  <button className='btn btn-light border mx-1'>Cancel</button>
                  <button
                    onClick={() => {
                      addressHandler(currentAddress);
                    }}
                    className='btn btn-success shadow-0 border mx-1'
                  >
                    Add/Edit Address
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Account;
