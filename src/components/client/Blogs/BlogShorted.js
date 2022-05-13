import React from "react";

const BlogShorted = ({blogs}) => {

 
  
  return (
    <>
      <div className="d-flex align-items-center mb-4">
        <label className="me-2 mb-0 text-nowrap" htmlFor="sortby">
          <i className="fi-arrows-sort mt-n1 me-2 align-middle opacity-70" />
          Sort by:
        </label>
        <select className="form-select" id="sortby">
          <option>Newest</option>
          <option>Oldest</option>
          <option>Popular</option>
        </select>
      </div>
    </>
  );
};

export default BlogShorted;
