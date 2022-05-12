import React from "react";
import dateFormat from "dateformat";
const ReferEarnCard = ({ refer }) => {
  return (
    <div className="col-12">
      <div className="card mb-4">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="w-75 pe-2">
              <div className="d-flex justify-content-between">
                <h6 className="card-title">
                  {refer._name} <small className="text-success">Client</small>
                </h6>
                <h6 className="text-warning">{dateFormat(refer.createdAt, "mmm d, yyyy")}</h6>
              </div>
              <h6 className="card-title mb-1">Phone: {refer._phone}</h6>
              <p className="card-text">{refer.message}</p>
            </div>
            <div className="w-25 border-start ps-2">
              <h6 className="card-title mb-1">
                {refer.name_} <small className="text-success">Referral</small>
              </h6>
              <h6 className="card-title">Phone: {refer.phone_}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferEarnCard;
