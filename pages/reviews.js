import Layout from "../src/components/client/layout";

const Reviews = () => {
    return (
        <Layout>
             <div>
        <div className="modal fade" id="message-modal" tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="fs-base modal-title">Message to Floyd Miles</h3>
                <button className="btn-close ms-0" type="button" data-bs-dismiss="modal" />
              </div>
              <form className="modal-body needs-validation" noValidate>
                <div className="mb-4">
                  <textarea className="form-control" rows={6} placeholder="Type your message here" required defaultValue={""} />
                  <div className="invalid-feedback">Please type your message before sending.</div>
                </div>
                <button className="btn btn-primary mb-2" type="submit"><i className="fi-send me-2" />Send message</button>
              </form>
            </div>
          </div>
        </div>
        {/* Review modal*/}
        <div className="modal fade" id="modal-review" tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header d-block position-relative border-0 pb-0 px-sm-5 px-4">
                <h3 className="modal-title mt-4 text-center">Leave a review</h3>
                <button className="btn-close position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body px-sm-5 px-4">
                <form className="needs-validation" noValidate>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="review-name">Name <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" id="review-name" placeholder="Your name" required />
                    <div className="invalid-feedback">Please let us know your name.</div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="review-email">Email <span className="text-danger">*</span></label>
                    <input className="form-control" type="email" id="review-email" placeholder="Your email address" required />
                    <div className="invalid-feedback">Please provide a valid email address.</div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="review-rating">Rating <span className="text-danger">*</span></label>
                    <select className="form-select" id="review-rating" required>
                      <option value selected disabled>Choose rating</option>
                      <option value="5 stars">5 stars</option>
                      <option value="4 stars">4 stars</option>
                      <option value="3 stars">3 stars</option>
                      <option value="2 stars">2 stars</option>
                      <option value="1 star">1 star</option>
                    </select>
                    <div className="invalid-feedback">Please rate the property.</div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="review-text">Review <span className="text-danger">*</span></label>
                    <textarea className="form-control" id="review-text" rows={5} placeholder="Your review message" required defaultValue={""} />
                    <div className="invalid-feedback">Please write your review.</div>
                  </div>
                  <button className="btn btn-primary d-block w-100 mb-4" type="submit">Submit a review</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Page container*/}
        <div className="container mt-5 mb-md-4 py-5">
          {/* Breadcrumb*/}
          <nav className="mb-4 pt-md-3" aria-label="Breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="real-estate-home.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Reviews</li>
            </ol>
          </nav>
          <div className="row">
            {/* Sidebar (Agent's info)*/}
            <aside className="col-lg-3 col-md-4 mb-5">
              <div className="pe-lg-3"><img className="d-block rounded-circle mx-auto mx-md-0 mb-3" src="img/rokye-website/icontransperent.png" width={120} alt="Floyd Miles" />
                <h2 className="h4 text-center text-md-start mb-1">Rokye Realty</h2>
                <p className="text-center text-md-start mb-2 pb-1">Online Property Listing Company</p>
                <div className="d-flex justify-content-center justify-content-md-start border-bottom pb-4 mb-4"><span className="star-rating"><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /></span>
                  <div className="text-muted ms-2">(45 reviews)</div>
                </div>
                <div className="border-bottom pb-4 mb-4">
                  <p className="fs-sm mb-0">Rokye is a online real-estate platform that makes it possible to rent a residential property without paying any brokerage and you can avail our services without any advance payment, We believe in service first and pay later policy.</p>
                  <div className="collapse" id="seeMore">
                    <p className="fs-sm mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                  </div>
                  <div className="text-center text-md-start"><a className="collapse-label collapsed fs-sm" href="#seeMore" data-bs-toggle="collapse" data-bs-label-collapsed="Show more" data-bs-label-expanded="Show less" role="button" aria-expanded="false" aria-controls="seeMore" /></div>
                </div>
                <ul className="d-table list-unstyled mx-auto mx-md-0 mb-3 mb-md-4">
                  <li><a className="nav-link fw-normal p-0" href="mailto:floyd_miles@email.com"><i className="fi-mail text-primary mt-n1 me-2 align-middle" />sales@rokye.com</a></li>
                </ul>
                <div className="text-center text-md-start"><a className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" href="#"><i className="fi-facebook" /></a><a className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm" href="#"><i className="fi-twitter" /></a><a className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm" href="#"><i className="fi-instagram" /></a><a className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm" href="#"><i className="fi-youtube" /></a></div>
                <div className="text-center text-md-start pt-md-2 mt-4"><a className="btn btn-primary" href="#message-modal" data-bs-toggle="modal"><i className="fi-chat-left fs-sm me-2" />Contact us</a></div>
              </div>
            </aside>
            {/* Content*/}
            <div className="col-lg-9 col-md-8">
              <div className="d-flex align-items-center justify-content-between mb-4 pb-2">
                <h1 className="h2 text-center text-sm-start mb-0">Reviews (45)</h1><a className="btn btn-link btn-sm px-0" href="real-estate-vendor-properties.html"><i className="fi-arrow-left fs-xs mt-0 me-2" />Back to Offers</a>
              </div>
              {/* Reviews statistics*/}
              <div className="d-flex align-items-center mb-2">
                <div className="text-nowrap fs-sm me-3">5<i className="fi-star text-muted ms-1 mt-n1" /></div>
                <div className="progress w-100">
                  <div className="progress-bar bg-warning" role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <div className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2" style={{width: '3rem'}}>70%</div>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="text-nowrap fs-sm me-3">4<i className="fi-star text-muted ms-1 mt-n1" /></div>
                <div className="progress w-100">
                  <div className="progress-bar bg-warning" role="progressbar" style={{width: '15%'}} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <div className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2" style={{width: '3rem'}}>15%</div>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="text-nowrap fs-sm me-3">3<i className="fi-star text-muted ms-1 mt-n1" /></div>
                <div className="progress w-100">
                  <div className="progress-bar bg-warning" role="progressbar" style={{width: 0}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <div className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2" style={{width: '3rem'}}>0%</div>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="text-nowrap fs-sm me-3">2<i className="fi-star text-muted ms-1 mt-n1" /></div>
                <div className="progress w-100">
                  <div className="progress-bar bg-warning" role="progressbar" style={{width: '10%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <div className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2" style={{width: '3rem'}}>10%</div>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="text-nowrap fs-sm me-3">1<i className="fi-star text-muted ms-1 mt-n1" /></div>
                <div className="progress w-100">
                  <div className="progress-bar bg-warning" role="progressbar" style={{width: '5%'}} aria-valuenow={5} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <div className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2" style={{width: '3rem'}}>5%</div>
              </div>
              {/* Sorting + add review button*/}
              <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between border-bottom py-4 mt-3 mb-4">
                <div className="d-flex align-items-center me-sm-4 mb-sm-0 mb-3">
                  <label className="me-2 pe-1 text-nowrap" htmlFor="review-sorting"><i className="fi-arrows-sort text-muted mt-n1 me-2" />Sort by:</label>
                  <select className="form-select" id="review-sorting">
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>High rating</option>
                    <option>Low rating</option>
                  </select>
                </div><a className="btn btn-outline-primary" href="#modal-review" data-bs-toggle="modal"><i className="fi-edit me-1" />Add review</a>
              </div>
              {/* Review*/}
              <div className="mb-4 pb-4 border-bottom">
                <div className="d-flex justify-content-between mb-3">
                  <div className="d-flex align-items-center pe-2"><img className="rounded-circle me-1" src="img/rokye-website/Avtar.png" width={48} alt="Avatar" />
                    <div className="ps-2">
                      <h6 className="fs-base mb-0">Kristin Watson</h6><span className="star-rating"><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /></span>
                    </div>
                  </div><span className="text-muted fs-sm">Jan 17, 2021</span>
                </div>
                <p>Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis.</p>
                <div className="d-flex align-items-center">
                  <button className="btn-like" type="button"><i className="fi-like" /><span>(3)</span></button>
                  <div className="border-end me-1">&nbsp;</div>
                  <button className="btn-dislike" type="button"><i className="fi-dislike" /><span>(0)</span></button>
                </div>
              </div>
              {/* Review*/}
              <div className="mb-4 pb-4 border-bottom">
                <div className="d-flex justify-content-between mb-3">
                  <div className="d-flex align-items-center pe-2"><img className="rounded-circle me-1" src="img/rokye-website/Avtar.png" width={48} alt="Avatar" />
                    <div className="ps-2">
                      <h6 className="fs-base mb-0">Darrell Steward</h6><span className="star-rating"><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star" /><i className="star-rating-icon fi-star" /><i className="star-rating-icon fi-star" /></span>
                    </div>
                  </div><span className="text-muted fs-sm">Dec 1, 2020</span>
                </div>
                <p>Vel dictum nunc ut tristique. Egestas diam amet, ut proin hendrerit. Dui accumsan at phasellus tempus consequat dignissim.</p>
                <div className="d-flex align-items-center">
                  <button className="btn-like" type="button"><i className="fi-like" /><span>(0)</span></button>
                  <div className="border-end me-1">&nbsp;</div>
                  <button className="btn-dislike" type="button"><i className="fi-dislike" /><span>(1)</span></button>
                </div>
              </div>
              {/* Review*/}
              <div className="mb-4 pb-4 border-bottom">
                <div className="d-flex justify-content-between mb-3">
                  <div className="d-flex align-items-center pe-2"><img className="rounded-circle me-1" src="img/rokye-website/Avtar.png" width={48} alt="Avatar" />
                    <div className="ps-2">
                      <h6 className="fs-base mb-0">Cody Fisher</h6><span className="star-rating"><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /></span>
                    </div>
                  </div><span className="text-muted fs-sm">Oct  28, 2020</span>
                </div>
                <p>Viverra nunc blandit sapien non imperdiet sit. Purus tempus elementum aliquam eu urna. A aenean duis non egestas at libero porttitor integer eget. Sed dictum lobortis laoreet gravida.</p>
                <div className="d-flex align-items-center">
                  <button className="btn-like" type="button"><i className="fi-like" /><span>(2)</span></button>
                  <div className="border-end me-1">&nbsp;</div>
                  <button className="btn-dislike" type="button"><i className="fi-dislike" /><span>(1)</span></button>
                </div>
              </div>
              {/* Review*/}
              <div className="mb-4 pb-4 border-bottom">
                <div className="d-flex justify-content-between mb-3">
                  <div className="d-flex align-items-center pe-2"><img className="rounded-circle me-1" src="img/rokye-website/Avtar.png" width={48} alt="Avatar" />
                    <div className="ps-2">
                      <h6 className="fs-base mb-0">Ralph Edwards</h6><span className="star-rating"><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star" /></span>
                    </div>
                  </div><span className="text-muted fs-sm">Sep 14, 2020</span>
                </div>
                <p>Elementum nisl, egestas nam consectetur nisl, at pellentesque cras. Non sed ac vivamus dolor dignissim ut. Nisl sapien blandit pulvinar sagittis donec sociis ipsum arcu est. Tempus, rutrum morbi scelerisque tempor mi. Etiam urna, cras bibendum leo nec faucibus velit. Tempor lectus dignissim at auctor integer neque quam amet.</p>
                <div className="d-flex align-items-center">
                  <button className="btn-like" type="button"><i className="fi-like" /><span>(0)</span></button>
                  <div className="border-end me-1">&nbsp;</div>
                  <button className="btn-dislike" type="button"><i className="fi-dislike" /><span>(0)</span></button>
                </div>
              </div>
              {/* Review*/}
              <div className="mb-4 pb-4 border-bottom">
                <div className="d-flex justify-content-between mb-3">
                  <div className="d-flex align-items-center pe-2"><img className="rounded-circle me-1" src="img/rokye-website/Avtar.png" width={48} alt="Avatar" />
                    <div className="ps-2">
                      <h6 className="fs-base mb-0">Guy Hawkins</h6><span className="star-rating"><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /></span>
                    </div>
                  </div><span className="text-muted fs-sm">Dec 1, 2020</span>
                </div>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis morbi venenatis ut est.</p>
                <div className="d-flex align-items-center">
                  <button className="btn-like" type="button"><i className="fi-like" /><span>(1)</span></button>
                  <div className="border-end me-1">&nbsp;</div>
                  <button className="btn-dislike" type="button"><i className="fi-dislike" /><span>(3)</span></button>
                </div>
              </div>
              {/* Pagination*/}
              <nav className="mt-2" aria-label="Reviews pagination">
                <ul className="pagination">
                  <li className="page-item d-sm-none"><span className="page-link page-link-static">1 / 5</span></li>
                  <li className="page-item active d-none d-sm-block" aria-current="page"><span className="page-link">1<span className="visually-hidden">(current)</span></span></li>
                  <li className="page-item d-none d-sm-block"><a className="page-link" href="#">2</a></li>
                  <li className="page-item d-none d-sm-block"><a className="page-link" href="#">3</a></li>
                  <li className="page-item d-none d-sm-block">...</li>
                  <li className="page-item d-none d-sm-block"><a className="page-link" href="#">8</a></li>
                  <li className="page-item"><a className="page-link" href="#" aria-label="Next"><i className="fi-chevron-right" /></a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        	</div>
        </Layout>
    );
};

export default Reviews;