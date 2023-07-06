import { NavLink } from 'react-router-dom';

import logo from '../../assets/your-Electronics-Logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../context/AppContext';

const Header = () => {
  const { logoutHandler } = useContext(AuthContext);
  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg bg-dark text-white'>
          <div className='container py-2 '>
            <NavLink className='navbar-brand text-white' to='/'>
              <img src={logo} alt='logo' style={{ maxWidth: '200px' }} />
            </NavLink>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              data-bs-theme='dark'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <form className='d-flex mx-auto' role='search'>
                <input
                  className='form-control me-2'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                />
                <button className='btn btn-light' type='submit'>
                  Search
                </button>
              </form>
            </div>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <NavLink className='text-white' to='/products'>
                  <i className='bi bi-shop fs-4 mx-2'></i>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='text-white' to='/account'>
                  <i className='bi bi-person-circle fs-4 mx-2'></i>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='text-white' to='/wishlist'>
                  <i className='bi bi-person-heart fs-4 mx-2'></i>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='text-white' to='/cart'>
                  <i className='bi bi-bag fs-4 mx-2'></i>
                </NavLink>
              </li>
              <li className='nav-item btn btn-primary'>
                {sessionStorage.getItem('token') ? (
                  <span onClick={() => logoutHandler()}>Logout</span>
                ) : (
                  <NavLink className='text-white' to='/login'>
                    Login/Register
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
