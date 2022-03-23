import Layout from "../src/components/client/layout";

const Reviews = () => {
    return (
        <Layout>
          <div className="container-fluid mt-5 pt-5 p-0">
            <div className="row g-0 mt-n3">
              {/* Filters sidebar (Offcanvas on mobile)*/}
              <aside className="col-lg-4 col-xl-3 border-top-lg border-end-lg shadow-sm px-3 px-xl-4 px-xxl-5 pt-lg-2" style={{marginLeft: '160px'}}>
                <div className="sticky-top pt-5">
                  <div className="offcanvas offcanvas-start offcanvas-collapse" id="filters-sidebar">
                    <div className="offcanvas-header d-flex d-lg-none align-items-center">
                      <h2 className="h5 mb-0">Filters</h2>
                      <button className="btn-close" type="button" data-bs-dismiss="offcanvas" />
                    </div>
                    {/* Search form*/}
                    <div className="offcanvas-header d-block pt-0 pt-lg-4 px-lg-0">
                      <form className="form-group mb-lg-2">
                        <div className="input-group"><span className="input-group-text text-muted"><i className="fi-search" /></span>
                          <input className="form-control" type="text" placeholder="Enter Locality" />
                        </div>
                        <button className="btn btn-primary d-lg-inline-block d-none" type="button">Search</button>
                        <button className="btn btn-icon btn-primary rounded-circle flex-shrink-0 d-lg-none d-inline-flex" type="button"><i className="fi-search mt-n2" /></button>
                      </form>
                    </div>
                    {/* Nav tabs*/}
                    <div className="offcanvas-header d-block py-lg-0 py-0 px-lg-0">
                      <ul className="nav nav-pills" role="tablist">
                        <li className="nav-item"><a className="nav-link d-flex align-items-center active" href="#categories" data-bs-toggle="tab" role="tab"><i className="fi-list me-2" />Filters</a></li>
                        <li className="nav-item"><a className="nav-link d-flex align-items-center" href="#filters" data-bs-toggle="tab" role="tab"><i className="fi-filter-alt-horizontal me-2" />Premium Filters</a></li>
                      </ul>
                    </div>
                    <div className="offcanvas-body py-lg-4">
                      {/* Tabs content*/}
                      <div className="tab-content">
                        {/* Categories*/}
                        <div className="tab-pane fade show active" id="categories" role="tabpanel">
                          <div className="pb-4 mb-2">
                            <select className="form-select mb-2">
                              <option value disabled selected>Property type</option>
                              <option value="Associate Degree">Apartment</option>
                              <option value="Associate Degree">Villa/House</option>
                            </select>
                            <select className="form-select mb-2">
                              <option value disabled selected>Bedroom</option>
                              <option value="Associate Degree">1 BHK</option>
                              <option value="Associate Degree">2 BHK </option>
                              <option value="Associate Degree">3 BHK</option>
                              <option value="Associate Degree">3+ BHK</option>
                            </select>
                            <select className="form-select mb-2">
                              <option value disabled selected>Bathroom</option>
                              <option value="Associate Degree">1 Bath</option>
                              <option value="Associate Degree">2 Bath</option>
                              <option value="Associate Degree">3 Bath</option>
                              <option value="Associate Degree">3+ Bath</option>
                            </select>
                            <select className="form-select mb-2">
                              <option value disabled selected>Budget</option>
                              <option value="Associate Degree">₹5000 &nbsp; &nbsp; - &nbsp; ₹10000</option>
                              <option value="Associate Degree">₹10000 &nbsp; - &nbsp; ₹15000</option>
                              <option value="Associate Degree">₹15000 &nbsp; - &nbsp; ₹20000</option>
                              <option value="Associate Degree">₹20000 &nbsp; - &nbsp; ₹25000</option>
                              <option value="Associate Degree">₹25000 &nbsp; - &nbsp; ₹30000</option>
                              <option value="Associate Degree">₹30000 &nbsp; - &nbsp; ₹35000</option>
                              <option value="Associate Degree">₹35000 &nbsp; - &nbsp; ₹40000</option>
                              <option value="Associate Degree">₹35000 &nbsp; - &nbsp; ₹40000</option>
                              <option value="Associate Degree">₹40000 &nbsp; - &nbsp; ₹50000</option>
                              <option value="Associate Degree">₹50000 &nbsp; - &nbsp; ₹60000</option>
                              <option value="Associate Degree">₹60000 &nbsp; - &nbsp; ₹70000</option>
                              <option value="Associate Degree">₹70000 &nbsp; - &nbsp; ₹85000</option>
                              <option value="Associate Degree">₹70000 &nbsp; - &nbsp; ₹85000</option>
                              <option value="Associate Degree">₹85000 &nbsp; - &nbsp; ₹ 1 Lac</option>
                              <option value="Associate Degree">₹1 Lac &nbsp; &nbsp; - &nbsp; ₹2 Lac</option>
                              <option value="Associate Degree">₹2 Lac &nbsp; &nbsp; - &nbsp; ₹3 Lac</option>
                              <option value="Associate Degree">₹3 Lac &nbsp; &nbsp; - &nbsp; ₹4+ Lac</option>
                            </select>
                            <select className="form-select mb-2">
                              <option value disabled selected>Furnishing</option>
                              <option value="Associate Degree">Furnished</option>
                              <option value="Associate Degree">Unfurnished </option>
                              <option value="Associate Degree">Semi-furnished</option>
                            </select>
                            <select className="form-select mb-2">
                              <option value disabled selected>Tenant preferred</option>
                              <option value="Associate Degree">Family</option>
                              <option value="Associate Degree">Bachelors</option>
                              <option value="Associate Degree">Bachelors/Family</option>
                            </select>
                            <select className="form-select mb-2">
                              <option value disabled selected>Availability</option>
                              <option value="Associate Degree">Immediately</option>
                              <option value="Associate Degree">Within 15 days</option>
                              <option value="Associate Degree">Within 30 days</option>
                            </select>
                            <select className="form-select mb-2">
                              <option value disabled selected>Age of construction</option>
                              <option value="Associate Degree">New construction</option>
                              <option value="Associate Degree">Less than 5 years old</option>
                              <option value="Associate Degree">5 to 10 years old</option>
                              <option value="Associate Degree">10 to 15 years old</option>
                              <option value="Associate Degree">15 to 20 years old</option>
                              <option value="Associate Degree">20+ years old</option>
                            </select>
                          </div>
                        </div>
                        {/* Filters*/}
                        <div className="tab-pane fade" id="filters" role="tabpanel">
                          <div className="pb-4 mb-2">
                            <select className="form-select mb-2">
                              <option value disabled selected>Floor no</option>
                              <option value="Associate Degree">Basement</option>
                              <option value="Associate Degree">1</option>
                              <option value="Associate Degree">2</option>
                              <option value="Associate Degree">3</option>
                              <option value="Associate Degree">4</option>
                              <option value="Associate Degree">5</option>
                              <option value="Associate Degree">5+</option>
                            </select>
                            <select className="form-select mb-2">
                              <option value disabled selected>Facing</option>
                              <option value="Associate Degree">East</option>
                              <option value="Associate Degree">North</option>
                              <option value="Associate Degree">West</option>
                              <option value="Associate Degree">South</option>
                              <option value="Associate Degree">North-East</option>
                              <option value="Associate Degree">North-West</option>
                              <option value="Associate Degree">South-East</option>
                              <option value="Associate Degree">South-West</option>
                            </select>
                            <select className="form-select mb-2">
                              <option value disabled selected>Non-veg</option>
                              <option value="Associate Degree">Allowed</option>
                              <option value="Associate Degree">Not allowed</option>
                            </select>
                            <select className="form-select mb-0">
                              <option value disabled selected>Pets</option>
                              <option value="Associate Degree">Allowed</option>
                              <option value="Associate Degree">Not allowed</option>
                            </select>
                          </div>
                          <div className="pb-0 mb-2">
                            <h3 className="h6">Amenities</h3>
                            <div className="overflow-auto" data-simplebar data-simplebar-auto-hide="false" style={{height: '11rem'}}>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="parking" />
                                <label className="form-check-label fs-sm" htmlFor="parking">Lift</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="restaurant" />
                                <label className="form-check-label fs-sm" htmlFor="restaurant">Gas pipeline</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="pet-friendly" />
                                <label className="form-check-label fs-sm" htmlFor="pet-friendly">24X7 Water supply</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="room-service" />
                                <label className="form-check-label fs-sm" htmlFor="room-service">24X7 Security</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="fitness-center" />
                                <label className="form-check-label fs-sm" htmlFor="fitness-center">Car parking</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="free-wifi" />
                                <label className="form-check-label fs-sm" htmlFor="free-wifi">Visitor parking</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="spa-lounge" />
                                <label className="form-check-label fs-sm" htmlFor="spa-lounge">Children's play area</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="bar" />
                                <label className="form-check-label fs-sm" htmlFor="bar">Landscape garden</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="swimming-pool" />
                                <label className="form-check-label fs-sm" htmlFor="swimming-pool">Tree planting</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="parking" />
                                <label className="form-check-label fs-sm" htmlFor="parking">Air conditioning</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="restaurant" />
                                <label className="form-check-label fs-sm" htmlFor="restaurant">CCTV</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="pet-friendly" />
                                <label className="form-check-label fs-sm" htmlFor="pet-friendly">Fire safety</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="room-service" />
                                <label className="form-check-label fs-sm" htmlFor="room-service">Internet services</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="fitness-center" />
                                <label className="form-check-label fs-sm" htmlFor="fitness-center">Gym</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="free-wifi" />
                                <label className="form-check-label fs-sm" htmlFor="free-wifi">Club house</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="spa-lounge" />
                                <label className="form-check-label fs-sm" htmlFor="spa-lounge">Swimming pool</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="bar" />
                                <label className="form-check-label fs-sm" htmlFor="bar">Rain water harvesting</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="swimming-pool" />
                                <label className="form-check-label fs-sm" htmlFor="swimming-pool">Sewage treatment plant</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="fitness-center" />
                                <label className="form-check-label fs-sm" htmlFor="fitness-center">House keeping</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="free-wifi" />
                                <label className="form-check-label fs-sm" htmlFor="free-wifi">Power backup</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="spa-lounge" />
                                <label className="form-check-label fs-sm" htmlFor="spa-lounge">Shopping center</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="bar" />
                                <label className="form-check-label fs-sm" htmlFor="bar">Park</label>
                              </div>
                            </div>
                          </div>
                          <div className="border-top py-2">
                            <button className="btn btn-outline-primary" type="button"><i className="fi-rotate-right me-2" />Reset filters</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
              {/* Page content*/}
              <div className="col-lg-8 col-xl-7 position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5">
                {/* Breadcrumb*/}
                <nav className="mb-3 pt-md-2" aria-label="Breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="city-guide-home-v1.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Property list</li>
                  </ol>
                </nav>
                {/* Title*/}
                <div className="d-sm-flex align-items-center justify-content-between pb-3 pb-sm-4">
                  <h1 className="h2 mb-sm-0">Property for rent</h1><a className="d-inline-block fw-bold text-decoration-none py-1" href="#" data-bs-toggle-class="invisible" data-bs-target="#map" />
                </div>
                {/* Sorting*/}
                <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch my-2">
                  <div className="d-flex align-items-center flex-shrink-0">
                    <label className="fs-sm me-2 pe-1 text-nowrap" htmlFor="sortby"><i className="fi-arrows-sort text-muted mt-n1 me-2" />Sort by:</label>
                    <select className="form-select form-select-sm" id="sortby">
                      <option>Newest</option>
                      <option>Rent Low to High</option>
                      <option>Rent High to Low</option>
                    </select>
                  </div>
                  <hr className="d-none d-sm-block w-100 mx-4" />
                  <div className="d-none d-sm-flex align-items-center flex-shrink-0 text-muted"><i className="fi-check-circle me-2" /><span className="fs-sm mt-n1">0 results</span></div>
                </div>
                {/* Catalog grid*/}
                {/* Item*/}
                <div className="card card-hover card-horizontal border-0 shadow-sm mb-4">
                  <div className="card-img-top position-relative" style={{backgroundImage: 'url(img/rokye-website/catalog/16.jpg)'}}><a className="stretched-link" href="real-estate-single.html" />
                    <div className="position-absolute start-0 top-0 pt-3 ps-3"><span className="d-table badge bg-success mb-1">Verified</span></div>
                    <div className="position-absolute end-0 top-0 pt-3 pe-3 zindex-5">
                      <button className="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart" /></button>
                    </div>
                  </div>
                  <div className="card-body position-relative pb-3">
                    <h3 className="h6 mb-2 fs-base"><a className="nav-link stretched-link" href="real-estate-single.html">2 Bed Apartment | 1500 sq.ft</a></h3>
                    <p className="mb-4 fs-sm text-muted">Devnandan residency in Adalaj</p>
                    <div className="border-bottom mb-2">
                      <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li className="col fw-normal"><i className="fi-bed mt-n1 me-2 fs-lg align-middle" />Semi-furnished</li>
                        <li className="col fw-normal"><i className="fi-users mt-n1 me-2 fs-lg align-middle" />Bachelor/Family</li>
                      </ul>
                    </div>
                    <div className>
                      <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li className="col fw-normal"><i className="fi-cash mt-n1 me-2 fs-lg align-middle" />₹24000 Rent</li>
                        <li className="col fw-normal"><i className="fi-wallet mt-n1 me-2 fs-lg align-middle" />₹48000 Deposit</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Item*/}
                <div className="card card-hover card-horizontal border-0 shadow-sm mb-4">
                  <div className="card-img-top position-relative" style={{backgroundImage: 'url(img/rokye-website/catalog/16.jpg)'}}><a className="stretched-link" href="real-estate-single.html" />
                    <div className="position-absolute start-0 top-0 pt-3 ps-3"><span className="d-table badge bg-success mb-1">Verified</span></div>
                    <div className="position-absolute end-0 top-0 pt-3 pe-3 zindex-5">
                      <button className="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart" /></button>
                    </div>
                  </div>
                  <div className="card-body position-relative pb-3">
                    <h3 className="h6 mb-2 fs-base"><a className="nav-link stretched-link" href="real-estate-single.html">2 Bed Apartment | 1500 sq.ft</a></h3>
                    <p className="mb-4 fs-sm text-muted">Devnandan residency in Adalaj</p>
                    <div className="border-bottom mb-2">
                      <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li className="col fw-normal"><i className="fi-bed mt-n1 me-2 fs-lg align-middle" />Semi-furnished</li>
                        <li className="col fw-normal"><i className="fi-users mt-n1 me-2 fs-lg align-middle" />Bachelor/Family</li>
                      </ul>
                    </div>
                    <div className>
                      <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li className="col fw-normal"><i className="fi-cash mt-n1 me-2 fs-lg align-middle" />₹24000 Rent</li>
                        <li className="col fw-normal"><i className="fi-wallet mt-n1 me-2 fs-lg align-middle" />₹48000 Deposit</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Item*/}
                <div className="card card-hover card-horizontal border-0 shadow-sm mb-4">
                  <div className="card-img-top position-relative" style={{backgroundImage: 'url(img/rokye-website/catalog/16.jpg)'}}><a className="stretched-link" href="real-estate-single.html" />
                    <div className="position-absolute start-0 top-0 pt-3 ps-3"><span className="d-table badge bg-success mb-1">Verified</span></div>
                    <div className="position-absolute end-0 top-0 pt-3 pe-3 zindex-5">
                      <button className="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart" /></button>
                    </div>
                  </div>
                  <div className="card-body position-relative pb-3">
                    <h3 className="h6 mb-2 fs-base"><a className="nav-link stretched-link" href="real-estate-single.html">2 Bed Apartment | 1500 sq.ft</a></h3>
                    <p className="mb-4 fs-sm text-muted">Devnandan residency in Adalaj</p>
                    <div className="border-bottom mb-2">
                      <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li className="col fw-normal"><i className="fi-bed mt-n1 me-2 fs-lg align-middle" />Semi-furnished</li>
                        <li className="col fw-normal"><i className="fi-users mt-n1 me-2 fs-lg align-middle" />Bachelor/Family</li>
                      </ul>
                    </div>
                    <div className>
                      <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li className="col fw-normal"><i className="fi-cash mt-n1 me-2 fs-lg align-middle" />₹24000 Rent</li>
                        <li className="col fw-normal"><i className="fi-wallet mt-n1 me-2 fs-lg align-middle" />₹48000 Deposit</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Item*/}
                <div className="card card-hover card-horizontal border-0 shadow-sm mb-4">
                  <div className="card-img-top position-relative" style={{backgroundImage: 'url(img/rokye-website/catalog/16.jpg)'}}><a className="stretched-link" href="real-estate-single.html" />
                    <div className="position-absolute start-0 top-0 pt-3 ps-3"><span className="d-table badge bg-success mb-1">Verified</span></div>
                    <div className="position-absolute end-0 top-0 pt-3 pe-3 zindex-5">
                      <button className="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart" /></button>
                    </div>
                  </div>
                  <div className="card-body position-relative pb-3">
                    <h3 className="h6 mb-2 fs-base"><a className="nav-link stretched-link" href="real-estate-single.html">2 Bed Apartment | 1500 sq.ft</a></h3>
                    <p className="mb-4 fs-sm text-muted">Devnandan residency in Adalaj</p>
                    <div className="border-bottom mb-2">
                      <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li className="col fw-normal"><i className="fi-bed mt-n1 me-2 fs-lg align-middle" />Semi-furnished</li>
                        <li className="col fw-normal"><i className="fi-users mt-n1 me-2 fs-lg align-middle" />Bachelor/Family</li>
                      </ul>
                    </div>
                    <div className>
                      <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li className="col fw-normal"><i className="fi-cash mt-n1 me-2 fs-lg align-middle" />₹24000 Rent</li>
                        <li className="col fw-normal"><i className="fi-wallet mt-n1 me-2 fs-lg align-middle" />₹48000 Deposit</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Item*/}
                <div className="card card-hover card-horizontal border-0 shadow-sm mb-4">
                  <div className="card-img-top position-relative" style={{backgroundImage: 'url(img/rokye-website/catalog/16.jpg)'}}><a className="stretched-link" href="real-estate-single.html" />
                    <div className="position-absolute start-0 top-0 pt-3 ps-3"><span className="d-table badge bg-success mb-1">Verified</span></div>
                    <div className="position-absolute end-0 top-0 pt-3 pe-3 zindex-5">
                      <button className="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart" /></button>
                    </div>
                  </div>
                  <div className="card-body position-relative pb-3">
                    <h3 className="h6 mb-2 fs-base"><a className="nav-link stretched-link" href="real-estate-single.html">2 Bed Apartment | 1500 sq.ft</a></h3>
                    <p className="mb-4 fs-sm text-muted">Devnandan residency in Adalaj</p>
                    <div className="border-bottom mb-2">
                      <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li className="col fw-normal"><i className="fi-bed mt-n1 me-2 fs-lg align-middle" />Semi-furnished</li>
                        <li className="col fw-normal"><i className="fi-users mt-n1 me-2 fs-lg align-middle" />Bachelor/Family</li>
                      </ul>
                    </div>
                    <div className>
                      <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li className="col fw-normal"><i className="fi-cash mt-n1 me-2 fs-lg align-middle" />₹24000 Rent</li>
                        <li className="col fw-normal"><i className="fi-wallet mt-n1 me-2 fs-lg align-middle" />₹48000 Deposit</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Item*/}
                <div className="card card-hover card-horizontal border-0 shadow-sm mb-4">
                  <div className="card-img-top position-relative" style={{backgroundImage: 'url(img/rokye-website/catalog/16.jpg)'}}><a className="stretched-link" href="real-estate-single.html" />
                    <div className="position-absolute start-0 top-0 pt-3 ps-3"><span className="d-table badge bg-success mb-1">Verified</span></div>
                    <div className="position-absolute end-0 top-0 pt-3 pe-3 zindex-5">
                      <button className="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart" /></button>
                    </div>
                  </div>
                  <div className="card-body position-relative pb-3">
                    <h3 className="h6 mb-2 fs-base"><a className="nav-link stretched-link" href="real-estate-single.html">2 Bed Apartment | 1500 sq.ft</a></h3>
                    <p className="mb-4 fs-sm text-muted">Devnandan residency in Adalaj</p>
                    <div className="border-bottom mb-2">
                      <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li className="col fw-normal"><i className="fi-bed mt-n1 me-2 fs-lg align-middle" />Semi-furnished</li>
                        <li className="col fw-normal"><i className="fi-users mt-n1 me-2 fs-lg align-middle" />Bachelor/Family</li>
                      </ul>
                    </div>
                    <div className>
                      <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li className="col fw-normal"><i className="fi-cash mt-n1 me-2 fs-lg align-middle" />₹24000 Rent</li>
                        <li className="col fw-normal"><i className="fi-wallet mt-n1 me-2 fs-lg align-middle" />₹48000 Deposit</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Item*/}
                <div className="card card-hover card-horizontal border-0 shadow-sm mb-4">
                  <div className="card-img-top position-relative" style={{backgroundImage: 'url(img/rokye-website/catalog/16.jpg)'}}><a className="stretched-link" href="real-estate-single.html" />
                    <div className="position-absolute start-0 top-0 pt-3 ps-3"><span className="d-table badge bg-success mb-1">Verified</span></div>
                    <div className="position-absolute end-0 top-0 pt-3 pe-3 zindex-5">
                      <button className="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart" /></button>
                    </div>
                  </div>
                  <div className="card-body position-relative pb-3">
                    <h3 className="h6 mb-2 fs-base"><a className="nav-link stretched-link" href="real-estate-single.html">2 Bed Apartment | 1500 sq.ft</a></h3>
                    <p className="mb-4 fs-sm text-muted">Devnandan residency in Adalaj</p>
                    <div className="border-bottom mb-2">
                      <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li className="col fw-normal"><i className="fi-bed mt-n1 me-2 fs-lg align-middle" />Semi-furnished</li>
                        <li className="col fw-normal"><i className="fi-users mt-n1 me-2 fs-lg align-middle" />Bachelor/Family</li>
                      </ul>
                    </div>
                    <div className>
                      <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li className="col fw-normal"><i className="fi-cash mt-n1 me-2 fs-lg align-middle" />₹24000 Rent</li>
                        <li className="col fw-normal"><i className="fi-wallet mt-n1 me-2 fs-lg align-middle" />₹48000 Deposit</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Item*/}
                <div className="card card-hover card-horizontal border-0 shadow-sm mb-4">
                  <div className="card-img-top position-relative" style={{backgroundImage: 'url(img/rokye-website/catalog/16.jpg)'}}><a className="stretched-link" href="real-estate-single.html" />
                    <div className="position-absolute start-0 top-0 pt-3 ps-3"><span className="d-table badge bg-success mb-1">Verified</span></div>
                    <div className="position-absolute end-0 top-0 pt-3 pe-3 zindex-5">
                      <button className="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart" /></button>
                    </div>
                  </div>
                  <div className="card-body position-relative pb-3">
                    <h3 className="h6 mb-2 fs-base"><a className="nav-link stretched-link" href="real-estate-single.html">2 Bed Apartment | 1500 sq.ft</a></h3>
                    <p className="mb-4 fs-sm text-muted">Devnandan residency in Adalaj</p>
                    <div className="border-bottom mb-2">
                      <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li className="col fw-normal"><i className="fi-bed mt-n1 me-2 fs-lg align-middle" />Semi-furnished</li>
                        <li className="col fw-normal"><i className="fi-users mt-n1 me-2 fs-lg align-middle" />Bachelor/Family</li>
                      </ul>
                    </div>
                    <div className>
                      <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li className="col fw-normal"><i className="fi-cash mt-n1 me-2 fs-lg align-middle" />₹24000 Rent</li>
                        <li className="col fw-normal"><i className="fi-wallet mt-n1 me-2 fs-lg align-middle" />₹48000 Deposit</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Item*/}
                <div className="card card-hover card-horizontal border-0 shadow-sm mb-4">
                  <div className="card-img-top position-relative" style={{backgroundImage: 'url(img/rokye-website/catalog/16.jpg)'}}><a className="stretched-link" href="real-estate-single.html" />
                    <div className="position-absolute start-0 top-0 pt-3 ps-3"><span className="d-table badge bg-success mb-1">Verified</span></div>
                    <div className="position-absolute end-0 top-0 pt-3 pe-3 zindex-5">
                      <button className="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart" /></button>
                    </div>
                  </div>
                  <div className="card-body position-relative pb-3">
                    <h3 className="h6 mb-2 fs-base"><a className="nav-link stretched-link" href="real-estate-single.html">2 Bed Apartment | 1500 sq.ft</a></h3>
                    <p className="mb-4 fs-sm text-muted">Devnandan residency in Adalaj</p>
                    <div className="border-bottom mb-2">
                      <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li className="col fw-normal"><i className="fi-bed mt-n1 me-2 fs-lg align-middle" />Semi-furnished</li>
                        <li className="col fw-normal"><i className="fi-users mt-n1 me-2 fs-lg align-middle" />Bachelor/Family</li>
                      </ul>
                    </div>
                    <div className>
                      <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li className="col fw-normal"><i className="fi-cash mt-n1 me-2 fs-lg align-middle" />₹24000 Rent</li>
                        <li className="col fw-normal"><i className="fi-wallet mt-n1 me-2 fs-lg align-middle" />₹48000 Deposit</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Item*/}
                <div className="card card-hover card-horizontal border-0 shadow-sm mb-4">
                  <div className="card-img-top position-relative" style={{backgroundImage: 'url(img/rokye-website/catalog/16.jpg)'}}><a className="stretched-link" href="real-estate-single.html" />
                    <div className="position-absolute start-0 top-0 pt-3 ps-3"><span className="d-table badge bg-success mb-1">Verified</span></div>
                    <div className="position-absolute end-0 top-0 pt-3 pe-3 zindex-5">
                      <button className="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart" /></button>
                    </div>
                  </div>
                  <div className="card-body position-relative pb-3">
                    <h3 className="h6 mb-2 fs-base"><a className="nav-link stretched-link" href="real-estate-single.html">2 Bed Apartment | 1500 sq.ft</a></h3>
                    <p className="mb-4 fs-sm text-muted">Devnandan residency in Adalaj</p>
                    <div className="border-bottom mb-2">
                      <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li className="col fw-normal"><i className="fi-bed mt-n1 me-2 fs-lg align-middle" />Semi-furnished</li>
                        <li className="col fw-normal"><i className="fi-users mt-n1 me-2 fs-lg align-middle" />Bachelor/Family</li>
                      </ul>
                    </div>
                    <div className>
                      <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li className="col fw-normal"><i className="fi-cash mt-n1 me-2 fs-lg align-middle" />₹24000 Rent</li>
                        <li className="col fw-normal"><i className="fi-wallet mt-n1 me-2 fs-lg align-middle" />₹48000 Deposit</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Pagination*/}
                <nav className="border-top pb-md-4 pt-4" aria-label="Pagination">
                  <ul className="pagination mb-1">
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
        </Layout>
    );
};

export default Reviews;