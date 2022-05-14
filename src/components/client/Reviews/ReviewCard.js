import React from "react";

const ReviewCard = () => {
  return (
    <>
      <div className="mb-4 pb-4 border-bottom">
        <div className="d-flex justify-content-between mb-3">
          <div className="d-flex align-items-center pe-2">
            <img
              className="rounded-circle me-1"
              src="img/rokye-website/Avtar.png"
              width={48}
              alt="Avatar"
            />
            <div className="ps-2">
              <h6 className="fs-base mb-0">Kristin Watson</h6>
              <span className="star-rating">
                <i className="star-rating-icon fi-star-filled active" />
              </span>
            </div>
          </div>
          <span className="text-muted fs-sm">Jan 17, 2021</span>
        </div>
        <p>
          Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper
          nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl
          tellus sodales lectus dictum tristique proin vitae. Odio fermentum
          viverra tortor quis.
        </p>
        {/* <div className="d-flex align-items-center">
          <button className="btn-like" type="button">
            <i className="fi-like" />
            <span>(3)</span>
          </button>
          <div className="border-end me-1">&nbsp;</div>
          <button className="btn-dislike" type="button">
            <i className="fi-dislike" />
            <span>(0)</span>
          </button>
        </div> */}
      </div>
    </>
  );
};

export default ReviewCard;
