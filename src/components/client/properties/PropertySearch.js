import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../../../store/propertySearch/actions";
const PropertySearch = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const searchData = {
      keywords: data.keywords,
      budget: null,
      bedroom: null
    }
    dispatch(setSearch(searchData));
  };
  return (
    <>
      <div className="offcanvas-header d-block pt-0 pt-lg-4 px-lg-0">
        <form
          className={`form-group mb-lg-2 ${errors.keywords && "border-danger"}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="input-group">
            <span className="input-group-text text-muted">
              <i className="fi-search" />
            </span>
            <input
              {...register("keywords", { required: true })}
              className="form-control"
              type="text"
              placeholder="Enter Locality"
            />
          </div>
          <button className="btn btn-primary d-lg-inline-block" type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default PropertySearch;
