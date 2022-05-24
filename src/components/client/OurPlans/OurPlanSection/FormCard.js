import React from 'react';
import ContactForm from "../../Property/PropertyFormCard/ContactForm";

const FormCard = () => {
    return (
        <>
           <div className="col-sm-12 col-md-4 mb-4">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex align-items-start justify-content-between">
                <a className="text-decoration-none">
                  <h5 className="mb-1">Rokye Realty</h5>
                </a>
                <div className="ms-4 flex-shrink-0">
                  <a className="text-decoration-none" />
                  <a
                    className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2"
                    href="#"
                  >
                    <i className="fi-facebook" />
                  </a>
                  <a
                    className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2"
                    href="#"
                  >
                    <i className="fi-twitter" />
                  </a>
                  <a
                    className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2"
                    href="#"
                  >
                    <i className="fi-instagram" />
                  </a>
                  <a
                    className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2"
                    href="#"
                  >
                    <i className="fi-youtube" />
                  </a>
                </div>
              </div>
              <ul className="list-unstyled border-bottom mb-4 pb-4">
                <li>
                  <a
                    className="nav-link fw-normal p-0"
                    href="mailto:floyd_miles@email.com"
                  >
                    <i className="fi-mail mt-n1 me-2 align-middle opacity-60" />
                    sales@rokye.com
                  </a>
                </li>
              </ul>
              {/* Contact form*/}

              <ContactForm />
              {/* <form className="needs-validation" noValidate>
                <div className="mb-3">
                  <label className="form-label" htmlFor="pr-study-field">
                    I am
                    <span className="text-danger" />
                  </label>
                  <select
                    className="form-select form-select-lg"
                    id="pr-education-level"
                    required
                  >
                    <option value disabled selected>
                      Choose
                    </option>
                    <option value="Associate Degree">Owner</option>
                    <option value="Associate Degree">Tenant </option>
                  </select>
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Name*"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your name!
                  </div>
                </div>
                <input
                  className="form-control mb-3"
                  type="tel"
                  placeholder="Phone*"
                />
                <div className="invalid-feedback">
                  Please provide valid Phone number!
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email*"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide valid email address!
                  </div>
                </div>
                <textarea
                  className="form-control mb-3"
                  rows={3}
                  placeholder="Message"
                  style={{ resize: "none" }}
                  defaultValue={""}
                />
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="agree-to-terms"
                    required
                  />
                  <label className="form-check-label" htmlFor="agree-to-terms">
                    I agree to the <a href="#">Terms of use</a> and{" "}
                    <a href="#">Privacy policy</a>
                  </label>
                </div>
                <button
                  className="btn btn-lg btn-primary d-block w-100"
                  type="submit"
                >
                  Send request
                </button>
              </form> */}
            </div>
          </div>
        </div>  
        </>
    );
};

export default FormCard;