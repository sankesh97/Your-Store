import { useContext, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { NavLink } from 'react-router-dom';
import Card from '../../components/Card/Card';

const Login = () => {
  const { loginHandler } = useContext(AuthContext);
  const email = useRef('');
  const password = useRef('');

  return (
    <div className='d-flex align-items-center justify-content-center'>
      <Card>
        <h3>Login</h3>
        <form
          onSubmit={(event) =>
            loginHandler(event, email.current.value, password.current.value)
          }
        >
          <div className='mb-3'>
            <label htmlFor='loginEmail' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='loginEmail'
              ref={email}
              placeholder='Enter Your Email'
              aria-describedby='emailHelp'
            />
            <div id='emailHelp' className='form-text'>
              We&apos;ll never share your email with anyone else.
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='loginPassword' className='form-label'>
              Password
            </label>
            <input
              type='password'
              className='form-control'
              id='loginPassword'
              placeholder='Enter Your Password'
              ref={password}
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
        <br />
        <p>
          Not a User?{' '}
          <NavLink to='/register'>
            <strong>Register Here</strong>
          </NavLink>
        </p>
      </Card>
    </div>
  );
};
export default Login;
