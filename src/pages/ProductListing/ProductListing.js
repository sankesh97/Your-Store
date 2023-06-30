import { useContext, useEffect, useState } from 'react';
import {
  CartContext,
  CategoryContext,
  ProductContext,
  WishListContext,
} from '../../context/AppContext';
import { NavLink, useParams } from 'react-router-dom';
import toaster from '../../context/Toaster';

const ProductListing = () => {
  const { categoriesSelection } = useParams();

  // Context Files
  const { productList, fetchProducts } = useContext(ProductContext);
  const { categoryList, fetchCategories } = useContext(CategoryContext);
  const { addToCartHandler, cartList } = useContext(CartContext);
  const { addWishList } = useContext(WishListContext);

  // Local states
  const [sortProduct, setSortProduct] = useState();
  const [showCategories, setshowCategories] = useState(
    categoriesSelection ? [categoriesSelection] : []
  );
  const [rating, setRating] = useState(0);

  const categoryHandler = (event, selectedCategory) => {
    if (event.target.checked) {
      setshowCategories((prevState) => [...prevState, selectedCategory]);
    } else {
      setshowCategories((prevState) => {
        return prevState.filter((element) => element !== selectedCategory);
      });
    }
  };

  const filterClearHandler = () => {
    setSortProduct('');
    setshowCategories([]);
    setRating(0);
    toaster('SUCCESS', 'Filters have been cleared');
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    // <!-- sidebar + content -->
    <section className=''>
      <div className='container'>
        <div className='row'>
          {/* <!-- sidebar --> */}
          <div className='col-lg-3'>
            {/* <!-- Toggle button --> */}
            <button
              className='btn btn-outline-secondary mb-3 w-100 d-lg-none'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#FilterContent'
              aria-controls='FilterContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span>Show filter</span>
            </button>
            {/* <!-- Collapsible wrapper --> */}
            <div className='collapse card d-lg-block mb-5' id='FilterContent'>
              <div className='d-flex justify-content-around py-2'>
                <span>Product Filter</span>
                <span onClick={() => filterClearHandler()}>
                  <strong>CLEAR</strong>
                </span>
              </div>
              <div className='accordion' id='accordionPanelsStayOpenExample'>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingOne'>
                    <button
                      className='accordion-button text-dark bg-light'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#panelsStayOpen-collapseOne'
                      aria-expanded='true'
                      aria-controls='panelsStayOpen-collapseOne'
                    >
                      Sort Price
                    </button>
                  </h2>
                  <div
                    id='panelsStayOpen-collapseOne'
                    className='accordion-collapse collapse show'
                    aria-labelledby='headingOne'
                  >
                    <div className='accordion-body'>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='flexRadioDefault'
                          id='flexRadioDefault1'
                          checked={sortProduct === 'HTL'}
                          onChange={() => {
                            setSortProduct('HTL');
                          }}
                        />
                        <label
                          className='form-check-label'
                          htmlFor='flexRadioDefault1'
                        >
                          High to Low
                        </label>
                      </div>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='flexRadioDefault'
                          id='flexRadioDefault1'
                          checked={sortProduct === 'LTH'}
                          onChange={() => {
                            setSortProduct('LTH');
                          }}
                        />
                        <label
                          className='form-check-label'
                          htmlFor='flexRadioDefault1'
                        >
                          Low to High
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingTwo'>
                    <button
                      className='accordion-button text-dark bg-light'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#panelsStayOpen-collapseTwo'
                      aria-expanded='true'
                      aria-controls='panelsStayOpen-collapseTwo'
                    >
                      Categories
                    </button>
                  </h2>
                  <div
                    id='panelsStayOpen-collapseTwo'
                    className='accordion-collapse collapse show'
                    aria-labelledby='headingTwo'
                  >
                    <div className='accordion-body'>
                      <div>
                        {categoryList.map(({ _id, category }) => {
                          return (
                            <div key={_id} className='form-check'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                value={category}
                                checked={showCategories.includes(category)}
                                id='flexCheckDefault'
                                onChange={(event) => {
                                  categoryHandler(event, category);
                                }}
                              />
                              <label
                                className='form-check-label'
                                htmlFor='flexCheckDefault'
                              >
                                {category}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingThree'>
                    <button
                      className='accordion-button text-dark bg-light'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#panelsStayOpen-collapseFive'
                      aria-expanded='false'
                      aria-controls='panelsStayOpen-collapseFive'
                    >
                      Ratings
                    </button>
                  </h2>
                  <div
                    id='panelsStayOpen-collapseFive'
                    className='accordion-collapse collapse show'
                    aria-labelledby='headingThree'
                  >
                    <div className='accordion-body'>
                      {/* <!-- Default checkbox --> */}
                      <div className='form-check'>
                        <div className='d-flex justify-content-between'>
                          <span>
                            <i className='bi bi-star'></i> 0
                          </span>
                          <span>
                            <i className='bi bi-star'></i> 5
                          </span>
                        </div>
                        <input
                          type='range'
                          className='form-range'
                          id='ratingsRange'
                          min='0'
                          max='5'
                          step='1'
                          value={rating}
                          onChange={(event) => setRating(event.target.value)}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- sidebar -->*/}
          {/*<!-- content --> */}
          <div className='col-lg-9'>
            {productList
              .sort((a, b) => {
                if (sortProduct === 'LTH') {
                  return a.price - b.price;
                } else if (sortProduct === 'HTL') {
                  return b.price - a.price;
                }
              })
              .filter((product) =>
                showCategories.length > 0
                  ? showCategories.includes(product.category)
                  : true
              )
              .filter((product) => product.rating >= rating)
              .map((product) => (
                <div
                  key={product._id}
                  className='row justify-content-center mb-3'
                >
                  <div className='col-md-12'>
                    <div className='card shadow-0 border rounded-3'>
                      <div className='card-body'>
                        <div className='row g-0'>
                          <div className='col-xl-3 col-md-4 d-flex justify-content-center'>
                            <div className='bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0'>
                              <NavLink to={`/products/${product._id}`}>
                                <img
                                  src={product.imageURL}
                                  alt={product.title}
                                  className='w-100'
                                />
                              </NavLink>
                            </div>
                          </div>
                          <div className='col-xl-6 col-md-5 col-sm-7'>
                            <NavLink to={`/products/${product._id}`}>
                              <h5>{product.title}</h5>
                            </NavLink>
                            <div className='d-flex flex-row'>
                              <div className='text-warning mb-1 me-2'>
                                <i className='bi bi-star'></i>
                                <span className='ms-1'>{product.rating}</span>
                              </div>
                            </div>

                            <p className='text mb-4 mb-md-0'>
                              <NavLink to={`/products/${product._id}`}>
                                {product.description}
                              </NavLink>
                            </p>
                          </div>
                          <div className='col-xl-3 col-md-3 col-sm-5'>
                            <div className='d-flex flex-row align-items-center mb-1'>
                              <h4 className='mb-1 me-1'>
                                &#8377;{product.price}
                              </h4>
                            </div>
                            <div className='mt-4'>
                              <button
                                className='btn btn-primary shadow-0 mx-2'
                                type='button'
                                onClick={() => {
                                  addToCartHandler(product);
                                }}
                              >
                                {cartList.find(({ _id }) => _id === product._id)
                                  ? 'Go To Cart'
                                  : 'Add To Cart'}
                              </button>
                              <span
                                onClick={() => {
                                  addWishList(product);
                                }}
                                className='btn btn-light border mx-2 pt-2 icon-hover'
                              >
                                <i className='bi bi-heart px-1'></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductListing;
