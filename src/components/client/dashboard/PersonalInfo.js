import React from "react";

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
          <div className="border-bottom pb-3 mb-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className="pe-2">
                <label className="form-label fw-bold">Full name</label>
                <div id="name-value">Annette Black</div>
              </div>
              <div className="me-n3" data-bs-toggle="tooltip" title="Edit">
                <a
                  className="nav-link py-0"
                  href="#name-collapse"
                  data-bs-toggle="collapse"
                >
                  <i className="fi-edit" />
                </a>
              </div>
            </div>
            <div
              className="collapse"
              id="name-collapse"
              data-bs-parent="#personal-info"
            >
              <input
                className="form-control mt-3"
                type="text"
                data-bs-binded-element="#name-value"
                data-bs-unset-value="Not specified"
                defaultValue="Annette Black"
              />
            </div>
          </div>
          {/* Phone number*/}
          <div className="border-bottom pb-3 mb-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className="pe-2">
                <label className="form-label fw-bold">Phone number</label>
                <div id="phone-value">(302) 555-0107</div>
              </div>
              <div className="me-n3" data-bs-toggle="tooltip" title="Edit">
                <a
                  className="nav-link py-0"
                  href="#phone-collapse"
                  data-bs-toggle="collapse"
                >
                  <i className="fi-edit" />
                </a>
              </div>
            </div>
            <div
              className="collapse"
              id="phone-collapse"
              data-bs-parent="#personal-info"
            >
              <input
                className="form-control mt-3"
                type="text"
                data-bs-binded-element="#phone-value"
                data-bs-unset-value="Not specified"
                defaultValue="(302) 555-0107"
              />
            </div>
          </div>
          {/* Email*/}
          <div className="border-bottom pb-3 mb-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className="pe-2">
                <label className="form-label fw-bold">Email</label>
                <div id="email-value">annette_black@email.com</div>
              </div>
              <div className="me-n3" data-bs-toggle="tooltip" title="Edit">
                <a
                  className="nav-link py-0"
                  href="#email-collapse"
                  data-bs-toggle="collapse"
                >
                  <i className="fi-edit" />
                </a>
              </div>
            </div>
            <div
              className="collapse"
              id="email-collapse"
              data-bs-parent="#personal-info"
            >
              <input
                className="form-control mt-3"
                type="email"
                data-bs-binded-element="#email-value"
                data-bs-unset-value="Not specified"
                defaultValue="annette_black@email.com"
              />
            </div>
          </div>
          {/* Password*/}
          <div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="pe-2">
                <label className="form-label fw-bold">Password</label>
                <div>********</div>
              </div>
              <div className="me-n3" data-bs-toggle="tooltip" title="Edit">
                <a
                  className="nav-link py-0"
                  href="#company-collapse"
                  data-bs-toggle="collapse"
                >
                  <i className="fi-edit" />
                </a>
              </div>
            </div>
            <div
              className="collapse"
              id="company-collapse"
              data-bs-parent="#personal-info"
            >
              <div className="password-toggle mt-3">
                <input
                  className="form-control"
                  type="password"
                  id="pass-visibility"
                  defaultValue="hidden@password"
                />
                <label
                  className="password-toggle-btn"
                  aria-label="Show/hide password"
                >
                  <input className="password-toggle-check" type="checkbox" />
                  <span className="password-toggle-indicator" />
                </label>
              </div>
            </div>
          </div>
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
