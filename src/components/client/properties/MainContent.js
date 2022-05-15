import React from 'react';
import PropertiesPagination from './Pagination/PropertiesPagination';
import Property from './SingleProperty/Property';
import PropertySorting from './PropertySorting';

const MainContent = ({properties}) => {
    return (
        <>
            <div className="col-lg-8 col-xl-7 position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5">
            {/* Breadcrumb*/}
            <nav className="mb-3 pt-md-2" aria-label="Breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Property list
                </li>
              </ol>
            </nav>
            {/* Title*/}
            <div className="d-sm-flex align-items-center justify-content-between pb-3 pb-sm-4">
              <h1 className="h2 mb-sm-0">Property for rent</h1>
              <a
                className="d-inline-block fw-bold text-decoration-none py-1"
                href="#"
                data-bs-toggle-class="invisible"
                data-bs-target="#map"
              />
            </div>
            {/* Sorting*/}
            <PropertySorting />

            {properties?.map((item, index) => (
              <Property key={index} property={item} />
            ))}
            {/* pagination here */}
            <PropertiesPagination />
          </div>
        </>
    );
};

export default MainContent;