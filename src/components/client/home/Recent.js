import Slider from 'react-slick';

function Recent(){

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return(
        <section className="container pb-5 mb-lg-4 pt-5">
          <div className="d-flex align-items-center justify-content-between pb-2">
            <h2 className="h3 mt-md-4">Recently added</h2><a className="btn btn-link fw-normal ms-sm-3 p-0" href="city-guide-catalog.html">View all<i className="fi-arrow-long-right ms-2" /></a>
          </div>
          <div className="tns-carousel-wrapper tns-controls-outside-xxl tns-nav-outside mb-xxl-2 overflow-hidden">
            <Slider {...settings}>
              <div className='px-2'>
                <div  className="position-relative">
                  <div className="position-relative mb-3">
                    <button className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart" /></button><img className="rounded-3" src="img/rokye-website/catalog/09.jpg" alt="Article img" />
                  </div>
                  <h3 className="mb-2 fs-lg"><a className="nav-link stretched-link" href="#">2 Bed Apartment | ₹ 25000</a></h3>
                  <ul className="list-inline mb-0 fs-xs">
                    <li className="list-inline-item pe-1"><i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />Om Residncy in Adalaj</li>
                    <li className="list-inline-item pe-1"><i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />Semi-furnished</li>
                  </ul>
                </div>
              </div>


              <div className='px-2'>
                <div  className="position-relative">
                  <div className="position-relative mb-3">
                    <button className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart" /></button><img className="rounded-3" src="img/rokye-website/catalog/08.jpg" alt="Article img" />
                  </div>
                  <h3 className="mb-2 fs-lg"><a className="nav-link stretched-link" href="#">2 Bed Apartment | ₹ 25000</a></h3>
                  <ul className="list-inline mb-0 fs-xs">
                    <li className="list-inline-item pe-1"><i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />Om Residncy in Adalaj</li>
                    <li className="list-inline-item pe-1"><i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />Semi-furnished</li>
                  </ul>
                </div>
              </div>

              <div className='px-2'>
                <div style={{ width: '95% !important'}} className="position-relative">
                  <div className="position-relative mb-3">
                    <button className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart" /></button><img className="rounded-3" src="img/rokye-website/catalog/11.jpg" alt="Article img" />
                  </div>
                  <h3 className="mb-2 fs-lg"><a className="nav-link stretched-link" href="#">2 Bed Apartment | ₹ 25000</a></h3>
                  <ul className="list-inline mb-0 fs-xs">
                    <li className="list-inline-item pe-1"><i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />Om Residncy in Adalaj</li>
                    <li className="list-inline-item pe-1"><i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />Semi-furnished</li>
                  </ul>
                </div>
              </div>

              <div className='px-2'>
                <div style={{ width: '95% !important'}} className="position-relative">
                  <div className="position-relative mb-3">
                    <button className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart" /></button><img className="rounded-3" src="img/rokye-website/catalog/10.jpg" alt="Article img" />
                  </div>
                  <h3 className="mb-2 fs-lg"><a className="nav-link stretched-link" href="#">2 Bed Apartment | ₹ 25000</a></h3>
                  <ul className="list-inline mb-0 fs-xs">
                    <li className="list-inline-item pe-1"><i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />Om Residncy in Adalaj</li>
                    <li className="list-inline-item pe-1"><i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />Semi-furnished</li>
                  </ul>
                </div>
              </div>
            </Slider>
          </div>
      </section>
    )
}
export default Recent;