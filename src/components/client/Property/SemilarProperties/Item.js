import React from "react";

const Item = ({property}) => {
  return (
    <>
      <div className="px-2">
        <div className="position-relative">
          <div className="position-relative mb-3">
            <button
              className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="Add to Wishlist"
            >
              <i className="fi-heart" />
            </button>
            <img
              style={{ height: "222px", width: '100%' }}
              className="rounded-3"
              src={property.images[0]}
              alt="Article img"
            />
          </div>
          <h3 className="mb-2 fs-lg">
            <a className="nav-link" href="#">
              {property.bedrooms} Bed {property.propertyType} | ₹ {property.monthlyRent}
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
    </>
  );
};

export default Item;
