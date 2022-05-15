import React from "react";

const PropertySearch = () => {
  return (
    <>
      <div className="offcanvas-header d-block pt-0 pt-lg-4 px-lg-0">
        <form className="form-group mb-lg-2">
          <div className="input-group">
            <span className="input-group-text text-muted">
              <i className="fi-search" />
            </span>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Locality"
            />
          </div>
          <button
            className="btn btn-primary d-lg-inline-block d-none"
            type="button"
          >
            Search
          </button>
          <button
            className="btn btn-icon btn-primary rounded-circle flex-shrink-0 d-lg-none d-inline-flex"
            type="button"
          >
            <i className="fi-search mt-n2" />
          </button>
        </form>
      </div>
    </>
  );
};

export default PropertySearch;
