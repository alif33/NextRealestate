import React from "react";

const PropertyBreadcrumb = () => {
  return (
    <>
      <nav className="mb-3 pt-md-3" aria-label="Breadcrumb">
        <ol className="breadcrumb breadcrumb-dark">
          <li className="breadcrumb-item">
            <a href="car-finder-home.html">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Property Single
          </li>
        </ol>
      </nav>
    </>
  );
};

export default PropertyBreadcrumb;
