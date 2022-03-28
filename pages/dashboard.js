import Layout from "../src/components/client/layout";

const Dashboard = () => {
    return (
        <Layout>
            {/* Page container*/}
            <div className="container mt-5 mb-md-4 py-5">
                {/* Breadcrumbs*/}
                <nav className="mb-4 pt-md-3" aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="city-guide-home-v1.html">Home</a></li>
                    <li className="breadcrumb-item"><a href="city-guide-account-info.html">Account</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Personal info</li>
                </ol>
                </nav>
                {/* Account header*/}
                <div className="d-flex align-items-center justify-content-between pb-4 mb-2">
                <div className="d-flex align-items-center">
                    <div className="position-relative flex-shrink-0"><img className="rounded-circle border border-white" src="img/rokye-website/avtar.png" width={100} alt="Annette Black" />
                    <button className="btn btn-icon btn-light btn-xs rounded-circle shadow-sm position-absolute end-0 bottom-0" type="button" data-bs-toggle="tooltip" title="Change image"><i className="fi-pencil fs-xs" /></button>
                    </div>
                    <div className="ps-3 ps-sm-4">
                    <h3 className="h4 mb-2">Annette Black</h3><span className="star-rating"><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /><i className="star-rating-icon fi-star-filled active" /></span>
                    </div>
                </div><a className="nav-link p-0 d-none d-md-block" href="#"><i className="fi-logout mt-n1 me-2" />Sign out</a>
                </div>
                {/* Page content*/}
                <div className="card card-body p-4 p-md-5 shadow-sm">
                {/* Account nav*/}
                <div className="mt-md-n3 mb-4"><a className="btn btn-outline-primary btn-lg rounded-pill w-100 d-md-none" href="#account-nav" data-bs-toggle="collapse"><i className="fi-align-justify me-2" />Account Menu</a>
                    <div className="collapse d-md-block" id="account-nav">
                    <ul className="nav nav-pills flex-column flex-md-row pt-3 pt-md-0 pb-md-4 border-bottom-md">
                        <li className="nav-item mb-md-0 me-md-2 pe-md-1"><a className="nav-link d-flex align-items-center active" href="#personalinfo" data-bs-toggle="tab" role="tab"><i className="fi-user mt-n1 me-2 fs-base" />Personal Info</a></li>
                        <li className="nav-item mb-md-0 me-md-2 pe-md-1"><a className="nav-link d-flex align-items-center" href="#mylistings" data-bs-toggle="tab" role="tab"><i className="fi-list mt-n1 me-2 fs-base" />My listings</a></li>
                        <li className="nav-item mb-md-0 me-md-2 pe-md-1"><a className="nav-link d-flex align-items-center" href="#wishlist" data-bs-toggle="tab" role="tab"><i className="fi-heart mt-n1 me-2 fs-base" />Wishlist</a></li>
                        <li className="nav-item d-md-none"><a className="nav-link" href="#"><i className="fi-logout mt-n1 me-2 fs-base" />Sign Out</a></li>
                    </ul>
                    </div>
                </div>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="personalinfo" role="tabpanel">
                    <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-4 pt-2">
                        <h1 className="h3 mb-0" style={{color: 'grey'}}>Personal Info</h1>
                    </div>
                    <div className="border rounded-3 p-3 mb-2" id="personal-info">
                        {/* Name*/}
                        <div className="border-bottom pb-3 mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="pe-2">
                            <label className="form-label fw-bold">Full name</label>
                            <div id="name-value">Annette Black</div>
                            </div>
                            <div className="me-n3" data-bs-toggle="tooltip" title="Edit"><a className="nav-link py-0" href="#name-collapse" data-bs-toggle="collapse"><i className="fi-edit" /></a></div>
                        </div>
                        <div className="collapse" id="name-collapse" data-bs-parent="#personal-info">
                            <input className="form-control mt-3" type="text" data-bs-binded-element="#name-value" data-bs-unset-value="Not specified" defaultValue="Annette Black" />
                        </div>
                        </div>
                        {/* Phone number*/}
                        <div className="border-bottom pb-3 mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="pe-2">
                            <label className="form-label fw-bold">Phone number</label>
                            <div id="phone-value">(302) 555-0107</div>
                            </div>
                            <div className="me-n3" data-bs-toggle="tooltip" title="Edit"><a className="nav-link py-0" href="#phone-collapse" data-bs-toggle="collapse"><i className="fi-edit" /></a></div>
                        </div>
                        <div className="collapse" id="phone-collapse" data-bs-parent="#personal-info">
                            <input className="form-control mt-3" type="text" data-bs-binded-element="#phone-value" data-bs-unset-value="Not specified" defaultValue="(302) 555-0107" />
                        </div>
                        </div>
                        {/* Email*/}
                        <div className="border-bottom pb-3 mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="pe-2">
                            <label className="form-label fw-bold">Email</label>
                            <div id="email-value">annette_black@email.com</div>
                            </div>
                            <div className="me-n3" data-bs-toggle="tooltip" title="Edit"><a className="nav-link py-0" href="#email-collapse" data-bs-toggle="collapse"><i className="fi-edit" /></a></div>
                        </div>
                        <div className="collapse" id="email-collapse" data-bs-parent="#personal-info">
                            <input className="form-control mt-3" type="email" data-bs-binded-element="#email-value" data-bs-unset-value="Not specified" defaultValue="annette_black@email.com" />
                        </div>
                        </div>
                        {/* Password*/}
                        <div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="pe-2">
                            <label className="form-label fw-bold">Password</label>
                            <div>********</div>
                            </div>
                            <div className="me-n3" data-bs-toggle="tooltip" title="Edit"><a className="nav-link py-0" href="#company-collapse" data-bs-toggle="collapse"><i className="fi-edit" /></a></div>
                        </div>
                        <div className="collapse" id="company-collapse" data-bs-parent="#personal-info">
                            <div className="password-toggle mt-3">
                            <input className="form-control" type="password" id="pass-visibility" defaultValue="hidden@password" />
                            <label className="password-toggle-btn" aria-label="Show/hide password">
                                <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator" />
                            </label>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-4">
                        <button className="btn btn-primary px-3 px-sm-4" type="button">Save changes</button>
                        <button className="btn btn-link btn-sm px-0" type="button"><i className="fi-trash me-2" />Delete account</button>
                    </div>
                    </div>
                    {/* My listings*/}
                    <div className="tab-pane fade" id="mylistings" role="tabpanel">
                    <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-4 pt-2">
                        <h1 className="h3 mb-md-0" style={{color: 'grey'}}>My Listings</h1>
                        {/* Sort*/}
                        <div className="d-flex align-items-sm-center align-items-end">
                        <div className="d-flex flex-sm-row flex-column align-items-sm-center w-100 pe-sm-2">
                            <label className="mb-sm-0 mb-2 me-sm-2 pe-sm-1 text-nowrap" htmlFor="sortby"><i className="fi-arrows-sort me-2" />Sort by:</label>
                            <select className="form-select form-select-sm" id="sortby" style={{minWidth: '180px'}}>
                            <option>Newest</option>
                            <option>Oldest</option>
                            </select>
                        </div><a className="d-inline-block ms-sm-4 ms-3 mb-sm-0 mb-2 fs-sm fw-bold text-decoration-none text-nowrap" href="#"><i className="fi-x fs-xs me-2 align-middle" />Clear all</a>
                        </div>
                    </div>
                    {/* Favorites grid*/}
                    <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4 gx-3 gx-lg-4">
                        {/* Item*/}
                        <div className="col pt-2">
                        <div className="position-relative">
                            <div className="position-relative mb-3">
                            <button className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="fi-heart" /></button><img className="rounded-3" src="img/rokye-website/catalog/07.jpg" alt="Article img" />
                            </div>
                            <h3 className="mb-2 fs-lg"><a className="nav-link stretched-link" href="#">2 Bed Apartment | ₹ 25000</a></h3>
                            <ul className="list-inline mb-0 fs-xs">
                            <li className="list-inline-item pe-1"><i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />Om Residncy in Adalaj</li>
                            <li className="list-inline-item pe-1"><i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />Semi-furnished</li>
                            </ul>
                        </div>
                        </div>
                        {/* Item*/}
                        <div className="col pt-2">
                        <div className="position-relative">
                            <div className="position-relative mb-3">
                            <button className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="fi-heart" /></button><img className="rounded-3" src="img/rokye-website/catalog/08.jpg" alt="Article img" />
                            </div>
                            <h3 className="mb-2 fs-lg"><a className="nav-link stretched-link" href="#">2 Bed Apartment | ₹ 25000</a></h3>
                            <ul className="list-inline mb-0 fs-xs">
                            <li className="list-inline-item pe-1"><i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />Om Residncy in Adalaj</li>
                            <li className="list-inline-item pe-1"><i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />Semi-furnished</li>
                            </ul>
                        </div>
                        </div>
                        {/* Item*/}
                        <div className="col pt-2">
                        <div className="position-relative">
                            <div className="position-relative mb-3">
                            <button className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="fi-heart" /></button><img className="rounded-3" src="img/rokye-website/catalog/09.jpg" alt="Article img" />
                            </div>
                            <h3 className="mb-2 fs-lg"><a className="nav-link stretched-link" href="#">2 Bed Apartment | ₹ 25000</a></h3>
                            <ul className="list-inline mb-0 fs-xs">
                            <li className="list-inline-item pe-1"><i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />Om Residncy in Adalaj</li>
                            <li className="list-inline-item pe-1"><i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />Semi-furnished</li>
                            </ul>
                        </div>
                        </div>
                        {/* Item*/}
                        <div className="col pt-2">
                        <div className="position-relative">
                            <div className="position-relative mb-3">
                            <button className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="fi-heart" /></button><img className="rounded-3" src="img/rokye-website/catalog/10.jpg" alt="Article img" />
                            </div>
                            <h3 className="mb-2 fs-lg"><a className="nav-link stretched-link" href="#">2 Bed Apartment | ₹ 25000</a></h3>
                            <ul className="list-inline mb-0 fs-xs">
                            <li className="list-inline-item pe-1"><i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />Om Residncy in Adalaj</li>
                            <li className="list-inline-item pe-1"><i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />Semi-furnished</li>
                            </ul>
                        </div>
                        </div>
                        {/* Item*/}
                        <div className="col pt-2">
                        <div className="position-relative">
                            <div className="position-relative mb-3">
                            <button className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="fi-heart" /></button><img className="rounded-3" src="img/rokye-website/catalog/06.jpg" alt="Article img" />
                            </div>
                            <h3 className="mb-2 fs-lg"><a className="nav-link stretched-link" href="#">2 Bed Apartment | ₹ 25000</a></h3>
                            <ul className="list-inline mb-0 fs-xs">
                            <li className="list-inline-item pe-1"><i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />Om Residncy in Adalaj</li>
                            <li className="list-inline-item pe-1"><i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />Semi-furnished</li>
                            </ul>
                        </div>
                        </div>
                        {/* Item*/}
                        <div className="col pt-2">
                        <div className="position-relative">
                            <div className="position-relative mb-3">
                            <button className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="fi-heart" /></button><img className="rounded-3" src="img/rokye-website/catalog/11.jpg" alt="Article img" />
                            </div>
                            <h3 className="mb-2 fs-lg"><a className="nav-link stretched-link" href="#">2 Bed Apartment | ₹ 25000</a></h3>
                            <ul className="list-inline mb-0 fs-xs">
                            <li className="list-inline-item pe-1"><i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />Om Residncy in Adalaj</li>
                            <li className="list-inline-item pe-1"><i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />Semi-furnished</li>
                            </ul>
                        </div>
                        </div><a className="d-inline-block py-sm-2 fw-bold text-decoration-none" href="#"><i className="fi-refresh me-2 align-middle" />Load more</a>
                    </div>
                    </div>
                    {/* My Wishlist*/}
                    <div className="tab-pane fade" id="wishlist" role="tabpanel">
                    <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-4 pt-2">
                        <h1 className="h3 mb-md-0" style={{color: 'grey'}}>My Wishlist</h1>
                        {/* Sort*/}
                        <div className="d-flex align-items-sm-center align-items-end">
                        <div className="d-flex flex-sm-row flex-column align-items-sm-center w-100 pe-sm-2">
                            <label className="mb-sm-0 mb-2 me-sm-2 pe-sm-1 text-nowrap" htmlFor="sortby"><i className="fi-arrows-sort me-2" />Sort by:</label>
                            <select className="form-select form-select-sm" id="sortby" style={{minWidth: '180px'}}>
                            <option>Newest</option>
                            <option>Oldest</option>
                            </select>
                        </div><a className="d-inline-block ms-sm-4 ms-3 mb-sm-0 mb-2 fs-sm fw-bold text-decoration-none text-nowrap" href="#"><i className="fi-x fs-xs me-2 align-middle" />Clear all</a>
                        </div>
                    </div>
                    {/* Favorites grid*/}
                    <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4 gx-3 gx-lg-4">
                        {/* Item*/}
                        <div className="col pt-2">
                        <div className="position-relative">
                            <div className="position-relative mb-3">
                            <button className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Remove from Favorites"><i className="fi-heart-filled" /></button><img className="rounded-3" src="img/rokye-website/catalog/07.jpg" alt="Article img" />
                            </div>
                            <h3 className="mb-2 fs-lg"><a className="nav-link stretched-link" href="#">2 Bed Apartment | ₹ 25000</a></h3>
                            <ul className="list-inline mb-0 fs-xs">
                            <li className="list-inline-item pe-1"><i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />Om Residncy in Adalaj</li>
                            <li className="list-inline-item pe-1"><i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />Semi-furnished</li>
                            </ul>
                        </div>
                        </div>
                        {/* Item*/}
                        <div className="col pt-2">
                        <div className="position-relative">
                            <div className="position-relative mb-3">
                            <button className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Remove from Favorites"><i className="fi-heart-filled" /></button><img className="rounded-3" src="img/rokye-website/catalog/08.jpg" alt="Article img" />
                            </div>
                            <h3 className="mb-2 fs-lg"><a className="nav-link stretched-link" href="#">2 Bed Apartment | ₹ 25000</a></h3>
                            <ul className="list-inline mb-0 fs-xs">
                            <li className="list-inline-item pe-1"><i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />Om Residncy in Adalaj</li>
                            <li className="list-inline-item pe-1"><i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />Semi-furnished</li>
                            </ul>
                        </div>
                        </div>
                        {/* Item*/}
                        <div className="col pt-2">
                        <div className="position-relative">
                            <div className="position-relative mb-3">
                            <button className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Remove from Favorites"><i className="fi-heart-filled" /></button><img className="rounded-3" src="img/rokye-website/catalog/09.jpg" alt="Article img" />
                            </div>
                            <h3 className="mb-2 fs-lg"><a className="nav-link stretched-link" href="#">2 Bed Apartment | ₹ 25000</a></h3>
                            <ul className="list-inline mb-0 fs-xs">
                            <li className="list-inline-item pe-1"><i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />Om Residncy in Adalaj</li>
                            <li className="list-inline-item pe-1"><i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />Semi-furnished</li>
                            </ul>
                        </div>
                        </div>
                        {/* Item*/}
                        <div className="col pt-2">
                        <div className="position-relative">
                            <div className="position-relative mb-3">
                            <button className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Remove from Favorites"><i className="fi-heart-filled" /></button><img className="rounded-3" src="img/rokye-website/catalog/10.jpg" alt="Article img" />
                            </div>
                            <h3 className="mb-2 fs-lg"><a className="nav-link stretched-link" href="#">2 Bed Apartment | ₹ 25000</a></h3>
                            <ul className="list-inline mb-0 fs-xs">
                            <li className="list-inline-item pe-1"><i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />Om Residncy in Adalaj</li>
                            <li className="list-inline-item pe-1"><i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />Semi-furnished</li>
                            </ul>
                        </div>
                        </div>
                        {/* Item*/}
                        <div className="col pt-2">
                        <div className="position-relative">
                            <div className="position-relative mb-3">
                            <button className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Remove from Favorites"><i className="fi-heart-filled" /></button><img className="rounded-3" src="img/rokye-website/catalog/06.jpg" alt="Article img" />
                            </div>
                            <h3 className="mb-2 fs-lg"><a className="nav-link stretched-link" href="#">2 Bed Apartment | ₹ 25000</a></h3>
                            <ul className="list-inline mb-0 fs-xs">
                            <li className="list-inline-item pe-1"><i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />Om Residncy in Adalaj</li>
                            <li className="list-inline-item pe-1"><i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />Semi-furnished</li>
                            </ul>
                        </div>
                        </div>
                        {/* Item*/}
                        <div className="col pt-2">
                        <div className="position-relative">
                            <div className="position-relative mb-3">
                            <button className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Remove from Favorites"><i className="fi-heart-filled" /></button><img className="rounded-3" src="img/rokye-website/catalog/11.jpg" alt="Article img" />
                            </div>
                            <h3 className="mb-2 fs-lg"><a className="nav-link stretched-link" href="#">2 Bed Apartment | ₹ 25000</a></h3>
                            <ul className="list-inline mb-0 fs-xs">
                            <li className="list-inline-item pe-1"><i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />Om Residncy in Adalaj</li>
                            <li className="list-inline-item pe-1"><i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />Semi-furnished</li>
                            </ul>
                        </div>
                        </div><a className="d-inline-block py-sm-2 fw-bold text-decoration-none" href="#"><i className="fi-refresh me-2 align-middle" />Load more</a>
                    </div>
                    </div>
                </div>
                </div> 
            </div>
        </Layout>
    );
};

export default Dashboard;