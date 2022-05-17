import React from "react";

const PropertyGalary = () => {
  return (
    <>
      <div className="tns-carousel-wrapper">
        <div className="tns-slides-count text-dark">
          <i className="fi-image fs-lg me-2" />
          <div className="ps-1">
            <span className="tns-current-slide fs-5 fw-bold" />
            <span className="fs-5 fw-bold">/</span>
            <span className="tns-total-slides fs-5 fw-bold" />
          </div>
        </div>
        <div
          className="tns-carousel-inner"
          data-carousel-options='{"navAsThumbnails": true, "navContainer": "#thumbnails", "gutter": 12, "responsive": {"0":{"controls": false},"500":{"controls": true}}}'
        >
          <div>
            <img
              className="rounded-3"
              src="img/rokye-website/single/01.jpg"
              alt="Image"
            />
          </div>
          <div>
            <img
              className="rounded-3"
              src="img/rokye-website/single/02.jpg"
              alt="Image"
            />
          </div>
          <div>
            <img
              className="rounded-3"
              src="img/rokye-website/single/03.jpg"
              alt="Image"
            />
          </div>
          <div>
            <img
              className="rounded-3"
              src="img/rokye-website/single/04.jpg"
              alt="Image"
            />
          </div>
          <div>
            <img
              className="rounded-3"
              src="img/rokye-website/single/05.jpg"
              alt="Image"
            />
          </div>
          <div>
            <img
              className="rounded-3"
              src="img/rokye-website/single/06.jpg"
              alt="Image"
            />
          </div>
          <div>
            <img
              className="rounded-3"
              src="img/rokye-website/single/07.jpg"
              alt="Image"
            />
          </div>
          <div>
            <img
              className="rounded-3"
              src="img/rokye-website/single/08.jpg"
              alt="Image"
            />
          </div>
        </div>
      </div>
      <ul className="tns-thumbnails" id="thumbnails">
        <li className="tns-thumbnail">
          <img src="img/rokye-website/single/th01.jpg" alt="Thumbnail" />
        </li>
        <li className="tns-thumbnail">
          <img src="img/rokye-website/single/th02.jpg" alt="Thumbnail" />
        </li>
        <li className="tns-thumbnail">
          <img src="img/rokye-website/single/th03.jpg" alt="Thumbnail" />
        </li>
        <li className="tns-thumbnail">
          <img src="img/rokye-website/single/th04.jpg" alt="Thumbnail" />
        </li>
        <li className="tns-thumbnail">
          <img src="img/rokye-website/single/th05.jpg" alt="Thumbnail" />
        </li>
        <li className="tns-thumbnail">
          <img src="img/rokye-website/single/th06.jpg" alt="Thumbnail" />
        </li>
        <li className="tns-thumbnail">
          <img src="img/rokye-website/single/th07.jpg" alt="Thumbnail" />
        </li>
        <li className="tns-thumbnail">
          <img src="img/rokye-website/single/th08.jpg" alt="Thumbnail" />
        </li>
        <li className="tns-thumbnail">
          <a
            className="d-flex flex-column align-items-center justify-content-center w-100 h-100 bg-faded-dark rounded text-dark text-decoration-none"
            href="https://www.youtube.com/watch?v=0ffN2hgKzOE"
            data-bs-toggle="darkbox"
          >
            <i className="fi-play-circle fs-5" />
            <span className="opacity-70 mt-1">Play video</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default PropertyGalary;
