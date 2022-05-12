import React from "react";
import dateFormat from "dateformat";
const ContactsCard = ({ data }) => {
    console.log(data);
  return (
    <div className="col-12">
      <div className="card mb-4">
        <div className="card-body">
          <div className="mb-1">
            <div className="d-flex justify-content-between">
              <h6 className="text-success py-1">{data.role}</h6>
              <h6 className="text-warning py-1">{dateFormat(data.createdAt, "mmm d, yyyy")}</h6>
            </div>
            <h4 className="card-subtitle text-uppercase">{data.name}</h4>
            <p className="mb-0">Phone: {data.phone}</p>
            <p className="mb-0">Email: {data.email}</p>
          </div>
          <p className="card-text">{data.message}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactsCard;
