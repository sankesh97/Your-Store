const Footer = () => {
  return (
    <>
      <div className='container-fluid bg-dark text-light'>
        <div className='row gy-3'>
          <div className='col'>
            <p>Copyright 2023 © Your Electronic Store. All right reserved.</p>
          </div>
          <div className='col text-end'>
            <p>
              <i className='bi bi-facebook'></i>&nbsp;&nbsp;&nbsp;
              <i className='bi bi-instagram'></i>&nbsp;&nbsp;&nbsp;
              <i className='bi bi-twitter'></i>&nbsp;&nbsp;&nbsp;
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
