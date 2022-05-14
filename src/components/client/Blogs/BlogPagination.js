import React from "react";

const BlogPagination = () => {
  return (
    <>
      <nav className="pt-4 pb-2 border-top" aria-label="Blog pagination">
        <ul className="pagination mb-0">
          <li className="page-item d-sm-none">
            <span className="page-link page-link-static">1 / 8</span>
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

export default BlogPagination;
