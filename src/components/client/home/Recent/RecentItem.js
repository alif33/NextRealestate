import React from "react";
import queryString from "query-string";
import Link from "next/link";
const RecentItem = ({ recent }) => {
  const {
    bedrooms,
    propertyType,
    monthlyRent,
    furnishedStatus,
    areaName,
    city,
    state,
    images,
  } = recent;

  const query = queryString.stringify(
    {
      bedrooms: recent.bedrooms + " " + "bed",
      propertyType: recent.propertyType,
      addresss: recent.areaName + " " + recent.city + " " + recent.state,
      id: recent._id,
    },
    { sort: false }
  );

  return (
    <>
      <div className="px-3">
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
            style={{height: '250px', width: '100%'}}
            className="rounded-3" src={images[0]} alt="Article img" />
          </div>
          <h3 className="mb-2 fs-lg">
            <Link href={`property?${query}`}>
              <a className="nav-link">
                {bedrooms} Bed {propertyType} | ₹ {monthlyRent}
              </a>
            </Link>
          </h3>
          <ul className="list-inline mb-0 fs-xs">
            <li className="list-inline-item pe-1">
              <i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle " />
              <span className="text-capitalize">
                {areaName} {city} in {state}
              </span>
            </li>
            <li className="list-inline-item pe-1">
              <i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />
              {furnishedStatus}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RecentItem;
