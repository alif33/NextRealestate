import React from "react";

const PropertiesNavTab = () => {
  return (
    <>
      <div className="offcanvas-header d-block py-lg-0 py-0 px-lg-0">
        <ul className="nav nav-pills" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link d-flex align-items-center active"
              href="#categories"
              data-bs-toggle="tab"
              role="tab"
            >
              <i className="fi-list me-2" />
              Filters
            </a>
          </li>
          {/* <li className="nav-item">
            <a
              className="nav-link d-flex align-items-center"
              href="#filters"
              data-bs-toggle="tab"
              role="tab"
            >
              <i className="fi-filter-alt-horizontal me-2" />
              Premium Filters
            </a>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default PropertiesNavTab;
