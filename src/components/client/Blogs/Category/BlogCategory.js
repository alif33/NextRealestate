import React from "react";

const BlogCategory = () => {
  return (
    <>
      <div className="card card-flush pb-2 pb-lg-0 mb-4">
        <div className="card-body">
          <h3 className="h5">Categories</h3>
          <a
            className="nav-link fw-normal d-flex justify-content-between py-1 px-0"
            href="#"
          >
            Housing Trends<span className="text-muted ms-2">(2)</span>
          </a>
          <a
            className="nav-link fw-normal d-flex justify-content-between py-1 px-0"
            href="#"
          >
            Relocation Information
            <span className="text-muted ms-2">(4)</span>
          </a>
          <a
            className="nav-link fw-normal d-flex justify-content-between py-1 px-0"
            href="#"
          >
            Home Maintenance
            <span className="text-muted ms-2">(5)</span>
          </a>
          <a
            className="nav-link fw-normal d-flex justify-content-between py-1 px-0"
            href="#"
          >
            Home Decor<span className="text-muted ms-2">(1)</span>
          </a>
          <a
            className="nav-link fw-normal d-flex justify-content-between py-1 px-0"
            href="#"
          >
            Rent or Buy<span className="text-muted ms-2">(8)</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default BlogCategory;
