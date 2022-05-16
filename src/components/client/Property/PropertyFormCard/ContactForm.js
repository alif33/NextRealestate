import React from "react";

const ContactForm = () => {
  return (
    <>
      <form className="needs-validation" noValidate>
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
          <div className="invalid-feedback">Please enter your name!</div>
        </div>
        <div className="mb-3">
          <input
            className="form-control mb-3"
            type="tel"
            placeholder="Phone*"
          />
          <div className="invalid-feedback">Invalid email address!</div>
        </div>
        <input
          className="form-control mb-3"
          type="email"
          placeholder="Email*"
          required
        />
        <div className="invalid-feedback">Invalid phone number!</div>
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
            id="form-submit"
            type="checkbox"
          />
          <label className="form-check-label" htmlFor="agree-to-terms">
            I agree to the <a href="#">Terms of use</a> and{" "}
            <a href="#">Privacy policy</a>
          </label>
        </div>
        <button className="btn btn-lg btn-primary d-block w-100" type="submit">
          Send request
        </button>
      </form>
    </>
  );
};

export default ContactForm;
