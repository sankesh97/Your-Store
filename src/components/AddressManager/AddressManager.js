import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const AddressManager = () => {
  const { addressManager } = useContext(AuthContext);

  return (
    <>
      <div className='row mb-3'>
        {addressManager ? (
          addressManager.map((item) => `${item.city}`)
        ) : (
          <p>'No Addresses are present, Please add one'</p>
        )}
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
              <label className='form-check-label' htmlFor='flexRadioDefault1'>
                Express Shipping <br />
                <small className='text-muted'>Next - Day Delivery </small>
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
              <label className='form-check-label' htmlFor='flexRadioDefault2'>
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
              <label className='form-check-label' htmlFor='flexRadioDefault3'>
                Self pick-up <br />
                <small className='text-muted'>Come to our shop </small>
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
          <input
            type='text'
            id='typeText'
            placeholder='Type here'
            className='form-control'
          />
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
            <input type='text' id='typeText' className='form-control' />
          </div>
        </div>

        <div className='col-sm-4 col-6 mb-3'>
          <p className='mb-0'>Zip</p>
          <div className='form-outline'>
            <input type='text' id='typeText' className='form-control' />
          </div>
        </div>
      </div>

      <div className='float-end'>
        <button className='btn btn-light border'>Cancel</button>
        <button className='btn btn-success shadow-0 border'>Add Address</button>
      </div>
    </>
  );
};
export default AddressManager;
