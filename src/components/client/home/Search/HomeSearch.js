import React from "react";
import { useForm } from "react-hook-form";
const HomeSearch = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form className="form-group d-block">
        <div className="row g-0">
          <div className="col-md-10 d-sm-flex align-items-center">
            <div className="input-group border-end-lg border-dark">
              <span className="input-group-text text-muted ps-2 ps-sm-3">
                <i className="fi-search" />
              </span>
              <input
                className="form-control"
                type="text"
                name="keywords"
                placeholder="Enter city or locality name"
              />
            </div>
            <hr className="d-sm-none my-2" />
            <div
              className="dropdown w-sm-50 border-end-sm"
              data-bs-toggle="select"
            >
              <select className="form-select">
                <option>
                Bedroom
                </option>
              </select>
              
            </div>
            <hr className="d-sm-none my-2" />
            <div className="dropdown w-sm-50" data-bs-toggle="select">
              <button
                className="btn btn-lg btn-link dropdown-toggle ps-2 ps-sm-3"
                type="button"
                data-bs-toggle="dropdown"
              >
                <i className="fi-cash me-2" />
                <span className="dropdown-toggle-label">Budget</span>
              </button>
              <input type="hidden" />
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="dropdown-item-label">
                      ₹5000 &nbsp; &nbsp;
                      <span className="dash"> - &nbsp; ₹10000</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="dropdown-item-label">
                      ₹10000 &nbsp;
                      <span className="dash"> - &nbsp; ₹15000</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="dropdown-item-label">
                      ₹15000 &nbsp;
                      <span className="dash"> - &nbsp; ₹20000</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="dropdown-item-label">
                      ₹20000 &nbsp;
                      <span className="dash"> - &nbsp; ₹25000</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="dropdown-item-label">
                      ₹25000 &nbsp;
                      <span className="dash"> - &nbsp; ₹30000</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="dropdown-item-label">
                      ₹30000 &nbsp;
                      <span className="dash"> - &nbsp; ₹40000</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="dropdown-item-label">
                      ₹40000 &nbsp;
                      <span className="dash"> - &nbsp; ₹50000</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="dropdown-item-label">
                      ₹50000 &nbsp;
                      <span className="dash"> - &nbsp; ₹60000</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="dropdown-item-label">
                      ₹60000 &nbsp;
                      <span className="dash"> - &nbsp; ₹70000</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="dropdown-item-label">
                      ₹75000 &nbsp;
                      <span className="dash"> - &nbsp; ₹1 Lac</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="dropdown-item-label">
                      ₹1 Lac &nbsp;&nbsp;
                      <span className="dash"> - &nbsp; ₹2 Lac</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="dropdown-item-label">
                      ₹2 Lac &nbsp;&nbsp;
                      <span className="dash"> - &nbsp; ₹3 Lac</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="d-md-none mt-2" />
          <div className="col-md-2 d-sm-flex align-items-center pt-3 pt-md-0">
            <button
              className="btn btn-lg btn-icon btn-primary px-3 w-100"
              type="button"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default HomeSearch;
