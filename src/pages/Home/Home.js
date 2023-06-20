import { useContext, useEffect } from 'react';

import Card from '../../components/Card/Card';

import { CategoryContext } from '../../context/AppContext';
import './Home.css';
import slideOne from '../../assets/slide-1.jpg';
import slideTwo from '../../assets/slide-2.jpg';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const { categoryList, fetchCategories } = useContext(CategoryContext);
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      {/* Slider Section */}
      <section className='container'>
        <div
          id='HomeSliderCaptions'
          className='carousel slide'
          data-bs-ride='false'
        >
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#HomeSliderCaptions'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#HomeSliderCaptions'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img src={slideOne} className='d-block w-100' alt='...' />
            </div>
            <div className='carousel-item'>
              <img src={slideTwo} className='d-block w-100' alt='...' />
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#HomeSliderCaptions'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#HomeSliderCaptions'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </section>
      {/* Categories Section */}
      <section className='text-center py-5'>
        <h2 className='h2 mb-5'>Our Products</h2>
        <div className='container'>
          <div className='row gy-5 justify-content-around'>
            {categoryList.length &&
              categoryList.map(({ id, category, description, imgLink }) => (
                <div key={id} className='col-md-6 d-flex align-items-stretch'>
                  <Card imgLink={imgLink}>
                    <NavLink to={'/products/category/' + category}>
                      <h2>{category}</h2>
                      <p>{description}</p>
                    </NavLink>
                  </Card>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
