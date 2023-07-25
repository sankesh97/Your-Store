import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AppContext';
import { NavLink } from 'react-router-dom';
import Card from '../../components/Card/Card';

const Register = () => {
  const { registerHandler } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const email = useRef('');
  const password = useRef('');
  const firstName = useRef('');
  const lastName = useRef('');

  return (
    <div className='d-flex align-items-center justify-content-center'>
      <Card>
        <h3>Register</h3>
        <form
          onSubmit={(event) => {
            registerHandler(event, {
              email: email.current.value,
              password: password.current.value,
              firstName: firstName.current.value,
              lastName: lastName.current.value,
            });
          }}
        >
          <div className='mb-3'>
            <label htmlFor='firstName' className='form-label'>
              First Name<span className='text-danger'>*</span>
            </label>
            <input
              type='text'
              className='form-control'
              id='firstName'
              ref={firstName}
              placeholder='Enter your First Name'
              required
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='lastName' className='form-label'>
              Last Name<span className='text-danger'>*</span>
            </label>
            <input
              type='text'
              className='form-control'
              id='lastName'
              ref={lastName}
              placeholder='Enter your Last Name'
              required
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='loginEmail' className='form-label'>
              Email address<span className='text-danger'>*</span>
            </label>
            <input
              type='email'
              className='form-control'
              id='email'
              ref={email}
              aria-describedby='emailHelp'
              placeholder='Enter your Email'
              required
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='loginPassword' className='form-label'>
              Password<span className='text-danger'>*</span>
            </label>
            <div className='input-group'>
              <input
                type={showPass ? 'text' : 'password'}
                className='form-control'
                id='loginPassword'
                ref={password}
                placeholder='Enter your password'
                required
              />
              <span
                class='input-group-text'
                onClick={() => {
                  setShowPass(!showPass);
                }}
                style={{ cursor: 'pointer' }}
              >
                {showPass ? (
                  <i class='bi bi-eye'></i>
                ) : (
                  <i class='bi bi-eye-slash'></i>
                )}
              </span>
            </div>
          </div>

          <div className='mb-3'>
            <label htmlFor='loginPassword' className='form-label'>
              Confirm Password<span className='text-danger'>*</span>
            </label>
            <div className='input-group'>
              <input
                type={showPass ? 'text' : 'password'}
                className='form-control'
                id='confirmPassword'
                placeholder='Confirm your password'
                ref={password}
                required
              />
              <span
                class='input-group-text'
                onClick={() => {
                  setShowPass(!showPass);
                }}
                style={{ cursor: 'pointer' }}
              >
                {showPass ? (
                  <i class='bi bi-eye'></i>
                ) : (
                  <i class='bi bi-eye-slash'></i>
                )}
              </span>
            </div>
          </div>

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
        <br />
        <p>
          Already have an account?{' '}
          <NavLink to='/login'>
            <strong>Login Here</strong>
          </NavLink>
        </p>
      </Card>
    </div>
  );
};
export default Register;
