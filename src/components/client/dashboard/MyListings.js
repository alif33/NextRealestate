import React from "react";

const MyListings = () => {
  return (
    <>
      <div className="tab-pane fade" id="mylistings" role="tabpanel">
        <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-4 pt-2">
          <h1 className="h3 mb-md-0" style={{ color: "grey" }}>
            My Listings
          </h1>
          {/* Sort*/}
          <div className="d-flex align-items-sm-center align-items-end">
            <div className="d-flex flex-sm-row flex-column align-items-sm-center w-100 pe-sm-2">
              <label
                className="mb-sm-0 mb-2 me-sm-2 pe-sm-1 text-nowrap"
                htmlFor="sortby"
              >
                <i className="fi-arrows-sort me-2" />
                Sort by:
              </label>
              <select
                className="form-select form-select-sm"
                id="sortby"
                style={{ minWidth: "180px" }}
              >
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>
            <a
              className="d-inline-block ms-sm-4 ms-3 mb-sm-0 mb-2 fs-sm fw-bold text-decoration-none text-nowrap"
              href="#"
            >
              <i className="fi-x fs-xs me-2 align-middle" />
              Clear all
            </a>
          </div>
        </div>
        {/* Favorites grid*/}
        <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4 gx-3 gx-lg-4">
          {/* Item*/}
          <div className="col pt-2">
            <div className="position-relative">
              <div className="position-relative mb-3">
                <button
                  className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5"
                  type="button"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Add to wishlist"
                >
                  <i className="fi-heart" />
                </button>
                <img
                  className="rounded-3"
                  src="img/rokye-website/catalog/07.jpg"
                  alt="Article img"
                />
              </div>
              <h3 className="mb-2 fs-lg">
                <a className="nav-link stretched-link" href="#">
                  2 Bed Apartment | ₹ 25000
                </a>
              </h3>
              <ul className="list-inline mb-0 fs-xs">
                <li className="list-inline-item pe-1">
                  <i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />
                  Om Residncy in Adalaj
                </li>
                <li className="list-inline-item pe-1">
                  <i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />
                  Semi-furnished
                </li>
              </ul>
            </div>
          </div>
          {/* Item*/}
          <div className="col pt-2">
            <div className="position-relative">
              <div className="position-relative mb-3">
                <button
                  className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5"
                  type="button"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Add to wishlist"
                >
                  <i className="fi-heart" />
                </button>
                <img
                  className="rounded-3"
                  src="img/rokye-website/catalog/08.jpg"
                  alt="Article img"
                />
              </div>
              <h3 className="mb-2 fs-lg">
                <a className="nav-link stretched-link" href="#">
                  2 Bed Apartment | ₹ 25000
                </a>
              </h3>
              <ul className="list-inline mb-0 fs-xs">
                <li className="list-inline-item pe-1">
                  <i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />
                  Om Residncy in Adalaj
                </li>
                <li className="list-inline-item pe-1">
                  <i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />
                  Semi-furnished
                </li>
              </ul>
            </div>
          </div>
          {/* Item*/}
          <div className="col pt-2">
            <div className="position-relative">
              <div className="position-relative mb-3">
                <button
                  className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5"
                  type="button"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Add to wishlist"
                >
                  <i className="fi-heart" />
                </button>
                <img
                  className="rounded-3"
                  src="img/rokye-website/catalog/09.jpg"
                  alt="Article img"
                />
              </div>
              <h3 className="mb-2 fs-lg">
                <a className="nav-link stretched-link" href="#">
                  2 Bed Apartment | ₹ 25000
                </a>
              </h3>
              <ul className="list-inline mb-0 fs-xs">
                <li className="list-inline-item pe-1">
                  <i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />
                  Om Residncy in Adalaj
                </li>
                <li className="list-inline-item pe-1">
                  <i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />
                  Semi-furnished
                </li>
              </ul>
            </div>
          </div>
          {/* Item*/}
          <div className="col pt-2">
            <div className="position-relative">
              <div className="position-relative mb-3">
                <button
                  className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5"
                  type="button"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Add to wishlist"
                >
                  <i className="fi-heart" />
                </button>
                <img
                  className="rounded-3"
                  src="img/rokye-website/catalog/10.jpg"
                  alt="Article img"
                />
              </div>
              <h3 className="mb-2 fs-lg">
                <a className="nav-link stretched-link" href="#">
                  2 Bed Apartment | ₹ 25000
                </a>
              </h3>
              <ul className="list-inline mb-0 fs-xs">
                <li className="list-inline-item pe-1">
                  <i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />
                  Om Residncy in Adalaj
                </li>
                <li className="list-inline-item pe-1">
                  <i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />
                  Semi-furnished
                </li>
              </ul>
            </div>
          </div>
          {/* Item*/}
          <div className="col pt-2">
            <div className="position-relative">
              <div className="position-relative mb-3">
                <button
                  className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5"
                  type="button"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Add to wishlist"
                >
                  <i className="fi-heart" />
                </button>
                <img
                  className="rounded-3"
                  src="img/rokye-website/catalog/06.jpg"
                  alt="Article img"
                />
              </div>
              <h3 className="mb-2 fs-lg">
                <a className="nav-link stretched-link" href="#">
                  2 Bed Apartment | ₹ 25000
                </a>
              </h3>
              <ul className="list-inline mb-0 fs-xs">
                <li className="list-inline-item pe-1">
                  <i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />
                  Om Residncy in Adalaj
                </li>
                <li className="list-inline-item pe-1">
                  <i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />
                  Semi-furnished
                </li>
              </ul>
            </div>
          </div>
          {/* Item*/}
          <div className="col pt-2">
            <div className="position-relative">
              <div className="position-relative mb-3">
                <button
                  className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5"
                  type="button"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Add to wishlist"
                >
                  <i className="fi-heart" />
                </button>
                <img
                  className="rounded-3"
                  src="img/rokye-website/catalog/11.jpg"
                  alt="Article img"
                />
              </div>
              <h3 className="mb-2 fs-lg">
                <a className="nav-link stretched-link" href="#">
                  2 Bed Apartment | ₹ 25000
                </a>
              </h3>
              <ul className="list-inline mb-0 fs-xs">
                <li className="list-inline-item pe-1">
                  <i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />
                  Om Residncy in Adalaj
                </li>
                <li className="list-inline-item pe-1">
                  <i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />
                  Semi-furnished
                </li>
              </ul>
            </div>
          </div>
          <a
            className="d-inline-block py-sm-2 fw-bold text-decoration-none"
            href="#"
          >
            <i className="fi-refresh me-2 align-middle" />
            Load more
          </a>
        </div>
      </div>
    </>
  );
};

export default MyListings;
