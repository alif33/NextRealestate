import React from "react";

const ShortAndReviewButton = () => {
  return (
    <>
      <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between border-bottom py-4 mt-3 mb-4">
        <div className="d-flex align-items-center me-sm-4 mb-sm-0 mb-3">
          <label className="me-2 pe-1 text-nowrap" htmlFor="review-sorting">
            <i className="fi-arrows-sort text-muted mt-n1 me-2" />
            Sort by:
          </label>
          <select className="form-select" id="review-sorting">
            <option>Newest</option>
            <option>Oldest</option>
            <option>High rating</option>
            <option>Low rating</option>
          </select>
        </div>
        <a
          className="btn btn-outline-primary"
          href="#modal-review"
          data-bs-toggle="modal"
        >
          <i className="fi-edit me-1" />
          Add review
        </a>
      </div>
    </>
  );
};

export default ShortAndReviewButton;
