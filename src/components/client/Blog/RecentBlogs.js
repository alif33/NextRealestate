import React from "react";

const RecentBlogs = () => {
  return (
    <>
      <div className="card card-flush pb-3 pb-lg-0 mb-4">
        <div className="card-body">
          <h3 className="h5">Recent Posts</h3>
          <div className="d-flex align-items-start border-bottom border-light pb-3 mb-3">
            <a className="flex-shrink-0" href="#">
              <img
                className="rounded-3"
                src="img/rokye-website/blog/thumbs/01.jpg"
                width={80}
                alt="Image"
              />
            </a>
            <div className="ps-3">
              <a
                className="fs-xs text-uppercase text-primary text-decoration-none"
                href="#"
              >
                Guide
              </a>
              <h4 className="fs-base pt-1 mb-2">
                <a className="nav-link" href="#">
                  How to Post Resume from Your Smartphone
                </a>
              </h4>
              <div className="d-flex fs-xs">
                <span className="me-2 pe-1">
                  <i className="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle" />
                  May 08
                </span>
                <span>
                  <i className="fi-chat-circle opacity-70 mt-n1 me-1 align-middle" />
                  4 comments
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentBlogs;
