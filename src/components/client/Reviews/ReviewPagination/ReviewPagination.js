import React from "react";

const ReviewPagination = () => {
  return (
    <>
      <nav className="mt-2" aria-label="Reviews pagination">
        <ul className="pagination">
          <li className="page-item d-sm-none">
            <span className="page-link page-link-static">1 / 5</span>
          </li>
          <li
            className="page-item active d-none d-sm-block"
            aria-current="page"
          >
            <span className="page-link">
              1<span className="visually-hidden">(current)</span>
            </span>
          </li>
          <li className="page-item d-none d-sm-block">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item d-none d-sm-block">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item d-none d-sm-block">...</li>
          <li className="page-item d-none d-sm-block">
            <a className="page-link" href="#">
              8
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <i className="fi-chevron-right" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ReviewPagination;
