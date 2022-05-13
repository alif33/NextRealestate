import React from "react";
import InfoInput from "./InfoInput";

const PersonalInfo = () => {
  return (
    <>
      <div
        className="tab-pane fade show active"
        id="personalinfo"
        role="tabpanel"
      >
        <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-4 pt-2">
          <h1 className="h3 mb-0" style={{ color: "grey" }}>
            Personal Info
          </h1>
        </div>
        <div className="border rounded-3 p-3 mb-2" id="personal-info">
          {/* Name*/}
          <InfoInput
            label="Full name"
            propertyValue="Jahid Hasan"
            fieldName="name"
            fieldtype="text"
            collapse="#name-collapse"
          />
          {/* Phone number*/}
          <InfoInput
            label="Phone number"
            propertyValue="01745782856"
            fieldName="phone"
            fieldtype="text"
            collapse="#phone-collapse"
          />

          {/* Email*/}
          <InfoInput
            label="Email"
            propertyValue="Jahid0734@gmail.com"
            fieldName="email"
            fieldtype="text"
            collapse="#email-collapse"
          />
          <InfoInput
            label="Password"
            propertyValue="********"
            fieldName="password"
            fieldtype="password"
            collapse="#passwrod-collapse"
          />
        </div>
        <div className="d-flex align-items-center justify-content-between mt-4">
          <button className="btn btn-primary px-3 px-sm-4" type="button">
            Save changes
          </button>
          <button className="btn btn-link btn-sm px-0" type="button">
            <i className="fi-trash me-2" />
            Delete account
          </button>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
