import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const CompanyProfile = () => {
    const {reviews} = useSelector(state => state)
  return (
    <>
      <aside className="col-lg-3 col-md-4 mb-5">
        <div className="pe-lg-3">
          <img
            className="d-block rounded-circle mx-auto mx-md-0 mb-3"
            src="img/rokye-website/icontransperent.png"
            width={120}
            alt="Floyd Miles"
          />
          <h2 className="h4 text-center text-md-start mb-1">Rokye Realty</h2>
          <p className="text-center text-md-start mb-2 pb-1">
            Online Property Listing Company
          </p>
          <div className="d-flex justify-content-center justify-content-md-start border-bottom pb-4 mb-4">
            <span className="star-rating">
              <i className="star-rating-icon fi-star-filled active" />
              <i className="star-rating-icon fi-star-filled active" />
              <i className="star-rating-icon fi-star-filled active" />
              <i className="star-rating-icon fi-star-filled active" />
              <i className="star-rating-icon fi-star-filled active" />
            </span>
            <div className="text-muted ms-2">({reviews.reviewList?.length} reviews)</div>
          </div>
          <div className="border-bottom pb-4 mb-4">
            <p className="fs-sm mb-0">
              Rokye is a online real-estate platform that makes it possible to
              rent a residential property without paying any brokerage and you
              can avail our services without any advance payment, We believe in
              service first and pay later policy.
            </p>
            <div className="collapse" id="seeMore">
              <p className="fs-sm mb-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium dolor laudantium, totam rem aperiam, eaque ipsa quae
                ab illo inventore veritatis.
              </p>
            </div>
            <div className="text-center text-md-start">
              <a
                className="collapse-label collapsed fs-sm"
                href="#seeMore"
                data-bs-toggle="collapse"
                data-bs-label-collapsed="Show more"
                data-bs-label-expanded="Show less"
                role="button"
                aria-expanded="false"
                aria-controls="seeMore"
              />
            </div>
          </div>
          <ul className="d-table list-unstyled mx-auto mx-md-0 mb-3 mb-md-4">
            <li>
              <a
                className="nav-link fw-normal p-0"
                href="mailto:floyd_miles@email.com"
              >
                <i className="fi-mail text-primary mt-n1 me-2 align-middle" />
                sales@rokye.com
              </a>
            </li>
          </ul>
          <div className="text-center text-md-start">
            <Link href="https://www.facebook.com/rokyerealty">
            <a
            target="_blank"
              className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2"
              
            >
              <i className="fi-facebook" />
            </a>
            </Link>
           <Link href="https://twitter.com/rokyerealty">
           <a
           target="_blank"
              className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm"
            >
              <i className="fi-twitter" />
            </a>
           </Link>

            <Link href="https://www.instagram.com/rokyerealty">
            <a
            target="_blank"
              className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm"
            >
              <i className="fi-instagram" />
            </a>
            </Link>
           <Link href="#">
           <a
           target="_blank"
              className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm"
            >
              <i className="fi-youtube" />
            </a>
           </Link>
          </div>
          <div className="text-center text-md-start pt-md-2 mt-4">
            <Link href="/contact-us">
            <a
              className="btn btn-primary"
              // href="#message-modal"
              // data-bs-toggle="modal"
            >
              <i className="fi-chat-left fs-sm me-2" />
              Contact us
            </a>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default CompanyProfile;
