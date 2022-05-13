import React from "react";

const Subcriber = () => {
  return (
    <>
      <div className="card card-flush mb-4">
        <div className="card-body">
          <h4 className="h5 mb-3">Stay Informed</h4>
          <p className="fs-sm mb-3">
            Subscribe to our newsletter and be the first to see the latest posts
            and tips.
          </p>
          <form className="form-group">
            <div className="input-group input-group-sm">
              <span className="input-group-text text-muted">
                <i className="fi-mail" />
              </span>
              <input
                className="form-control"
                type="email"
                placeholder="Your email"
              />
            </div>
            <button className="btn btn-primary btn-sm" type="button">
              Sign up
            </button>
          </form>
          <div className="form-check pt-3">
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
        </div>
      </div>
    </>
  );
};

export default Subcriber;
