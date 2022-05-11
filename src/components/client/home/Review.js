import Slider from 'react-slick';

function Review(){

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return(
        <section className="container pt-lg-2 pb-5 mb-md-4" style={{marginTop: '-40px'}}>
        <div className="d-flex align-items-center justify-content-between mb-4 pb-2">
          <h2 className="h3 mt-md-4">Testimonials</h2><a className="btn btn-link fw-normal ms-sm-3 p-0" href="city-guide-catalog.html">View all<i className="fi-arrow-long-right ms-2" /></a>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0"><img className="d-block mx-auto" src="img/rokye-website/reviews.svg" alt="Illustration" /></div>
          <div className="col-lg-1 d-none d-lg-block">
            <hr className="hr-vertical mx-auto" />
          </div>
          <div className="col-md-8 col-lg-7">
            <div className="tns-carousel-wrapper overflow-hidden">
              <Slider {...settings}>
                <div className="p-3">
                  <div className="card border-0">
                    <blockquote className="blockquote card-body">
                      <footer className="d-flex align-items-center"><img className src="img/rokye-website/Avtar.png" width={90} />
                        <div className="ps-5">
                          <h6 className="fs-base mb-0">Bharat Mer</h6>
                          <div className="text-muted fw-normal fs-sm">Ahmedabad</div>
                        </div>
                      </footer>
                      <div className="pt-5">
                      </div>
                      <p>Eu&nbsp;massa, pharetra massa integer. Sed molestie sollicitudin morbi ultrices. Odio is&nbsp;euismodtelle faucibus. Venenatis nunc, tristique turpis cras sodales. In&nbsp;dui, viverra et&nbsp;ac. Id&nbsp;justo, varius nunc, faucibus erat proin elit. Amet diam, aliquet nec quis&nbsp;vel. Donec ut&nbsp;quisque in&nbsp;lorem sapien luctus pellentesque.</p>
                    </blockquote>
                  </div>
                </div>
                <div className="p-3">
                  <div className="card border-0">
                    <blockquote className="blockquote card-body">
                      <footer className="d-flex align-items-center"><img className src="img/rokye-website/Avtar.png" width={90} />
                        <div className="ps-5">
                          <h6 className="fs-base mb-0">Ajay Verma</h6>
                          <div className="text-muted fw-normal fs-sm">Delhi</div>
                        </div>
                      </footer>
                      <div className="pt-5">
                      </div>
                      <p>Eu&nbsp;massa, pharetra massa integer. Sed molestie sollicitudin morbi ultrices. Odio is&nbsp;euismodtelle faucibus. Venenatis nunc, tristique turpis cras sodales. In&nbsp;dui, viverra et&nbsp;ac. Id&nbsp;justo, varius nunc, faucibus erat proin elit. Amet diam, aliquet nec quis&nbsp;vel. Donec ut&nbsp;quisque in&nbsp;lorem sapien luctus pellentesque.</p>
                    </blockquote>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="tns-carousel-controls justify-content-center justify-content-md-start my-2 ms-md-2" id="agents-carousel-controls">
              <button className="mx-2" type="button"><i className="fi-chevron-left" /></button>
              <button className="mx-2" type="button"><i className="fi-chevron-right" /></button>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Review;