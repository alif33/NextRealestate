import React from "react";

const ReferEarnCard = () => {
  return (
    <div className="col-12 col-md-4 col-lg-3">
      <div className="card mb-4">
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <h6 className="card-subtitle text-muted mb-2">Card subtitle</h6>
          <p className="card-text">
            {" "}
            Some quick example text to build on the card title and make up the
            bulk of the content.{" "}
          </p>
          <a href="#" target="_self" className="card-link">
            {" "}
            Card link{" "}
          </a>
          <a href="#" target="_self" className="card-link">
            {" "}
            Another link{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReferEarnCard;
