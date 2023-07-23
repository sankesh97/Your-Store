import { NavLink } from 'react-router-dom';

import logo from '../../assets/your-Electronics-Logo.png';
import { useContext, useEffect } from 'react';
import { AuthContext, ProductContext } from '../../context/AppContext';

const Header = () => {
  const { logoutHandler } = useContext(AuthContext);
  const { fetchProducts, searchProduct } = useContext(ProductContext);
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg bg-dark text-white'>
          <div className='container d-flex justify-content-md-between py-2 flex-column flex-md-row'>
            <div className='py-2 py-md-0'>
              <NavLink className='navbar-brand text-white' to='/'>
                <img src={logo} alt='logo' style={{ maxWidth: '200px' }} />
              </NavLink>
            </div>
            <div className='py-2 py-md-0'>
              <form className='d-flex mx-auto'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Search for Product'
                  onChange={(event) => {
                    searchProduct(event.target.value);
                  }}
                />
              </form>
            </div>

            <div className='py-2 py-md-0'>
              <NavLink className='text-white' to='/products'>
                <i className='bi bi-shop fs-4 mx-2'></i>
              </NavLink>

              <NavLink className='text-white' to='/account'>
                <i className='bi bi-person-circle fs-4 mx-2'></i>
              </NavLink>

              <NavLink className='text-white' to='/wishlist'>
                <i className='bi bi-person-heart fs-4 mx-2'></i>
              </NavLink>

              <NavLink className='text-white' to='/cart'>
                <i className='bi bi-bag fs-4 mx-2'></i>
              </NavLink>

              {sessionStorage.getItem('token') ? (
                <button className='nav-item btn btn-primary'>
                  <span onClick={() => logoutHandler()}>Logout</span>
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
