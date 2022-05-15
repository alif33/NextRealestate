import React from "react";
import Costing from "./Costing";
import Feature from "./Feature";

const SingleContent = ({property}) => {
  return (
    <>
      <div className="card-body position-relative pb-3">
        <h3 className="h6 mb-2 fs-base">
          <a className="nav-link stretched-link" href="real-estate-single.html">
            {property.bedrooms} Bed {property.propertyType}| 1500 sq.ft
          </a>
        </h3>
        <p className="mb-4 fs-sm text-muted">Devnandan residency in Adalaj</p>
       <Feature property={property}/>
       <Costing property={property}/>
      </div>
    </>
  );
};

export default SingleContent;
