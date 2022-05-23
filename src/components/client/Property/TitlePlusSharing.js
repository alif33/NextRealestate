import React from "react";

const TitlePlusSharing = ({property}) => {
  return (
    <>
      <div
        className="d-sm-flex align-items-end align-items-md-center justify-content-between position-relative mb-4"
        style={{ zIndex: 1025 }}
      >
        <div className="me-3">
          <h2 className="h6 text-dark pt-4 mt-3 text-capitalize">
            {property.bedrooms} BHK {property.propertyType} in {property.areaName} {property.city}, {property.state}
          </h2>
          <div className="d-md-none">
            <div className="d-flex align-items-center mb-3"></div>
          </div>
        </div>
        <div className="text-nowrap pt-3 pt-sm-0">
          <button
            className="btn btn-icon btn-translucent-dark btn-xs rounded-circle mb-sm-2"
            type="button"
            data-bs-toggle="tooltip"
            title="Add to Wishlist"
          >
            <i className="fi-heart" />
          </button>
          <div
            className="dropdown d-inline-block"
            data-bs-toggle="tooltip"
            title="Share"
          >
            <div className="dropdown-menu dropdown-menu-dark dropdown-menu-end my-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitlePlusSharing;
