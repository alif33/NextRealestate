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
                <option  selcted>Bedroom</option>
                <option value="1" >1 BHK</option>
                <option value="2" >2 BHK</option>
                <option value="3" >3+ BHK</option>
              </select>
            </div>
            <hr className="d-sm-none my-2" />
            <div className="dropdown w-sm-50" data-bs-toggle="select">
             <select className="form-select">
                <option selcted >Budget</option>
                <option value="" >₹5000 - ₹10000</option>
                <option value="" >₹10000 - ₹15000</option>
                <option value="" >₹20000 - ₹25000</option>
                <option value="" >₹25000 - ₹30000</option>
                <option value="" >₹30000 - ₹40000</option>
                <option value="" >₹50000 - ₹50000</option>
                <option value="" >₹50000 - ₹60000</option>
                <option value="" >₹60000 - ₹70000</option>
                <option value="" >₹75000 - ₹1 Lac</option>
                <option value="" >₹1 Lac - ₹2 Lac</option>
                <option value="" >₹2 Lac - ₹3 Lac</option>
            
             </select>
            
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
