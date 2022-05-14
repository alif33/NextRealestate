import React from "react";

const ReviewStatics = () => {
  return (
    <>
      <div className="d-flex align-items-center mb-2">
        <div className="text-nowrap fs-sm me-3">
          5<i className="fi-star text-muted ms-1 mt-n1" />
        </div>
        <div className="progress w-100">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: "70%" }}
            aria-valuenow={70}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <div
          className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2"
          style={{ width: "3rem" }}
        >
          70%
        </div>
      </div>
      <div className="d-flex align-items-center mb-2">
        <div className="text-nowrap fs-sm me-3">
          4<i className="fi-star text-muted ms-1 mt-n1" />
        </div>
        <div className="progress w-100">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: "15%" }}
            aria-valuenow={15}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <div
          className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2"
          style={{ width: "3rem" }}
        >
          15%
        </div>
      </div>
      <div className="d-flex align-items-center mb-2">
        <div className="text-nowrap fs-sm me-3">
          3<i className="fi-star text-muted ms-1 mt-n1" />
        </div>
        <div className="progress w-100">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: 0 }}
            aria-valuenow={0}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <div
          className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2"
          style={{ width: "3rem" }}
        >
          0%
        </div>
      </div>
      <div className="d-flex align-items-center mb-2">
        <div className="text-nowrap fs-sm me-3">
          2<i className="fi-star text-muted ms-1 mt-n1" />
        </div>
        <div className="progress w-100">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: "10%" }}
            aria-valuenow={10}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <div
          className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2"
          style={{ width: "3rem" }}
        >
          10%
        </div>
      </div>
      <div className="d-flex align-items-center mb-2">
        <div className="text-nowrap fs-sm me-3">
          1<i className="fi-star text-muted ms-1 mt-n1" />
        </div>
        <div className="progress w-100">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: "5%" }}
            aria-valuenow={5}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <div
          className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2"
          style={{ width: "3rem" }}
        >
          5%
        </div>
      </div>
    </>
  );
};

export default ReviewStatics;
