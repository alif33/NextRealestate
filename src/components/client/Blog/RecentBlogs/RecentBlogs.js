import React from "react";
import RecentBlog from "./RecentBlog";

const RecentBlogs = () => {
  
  return (
    <>
      <div className="card card-flush pb-3 pb-lg-0 mb-4">
        <div className="card-body">
          <h3 className="h5">Recent Posts</h3>
          <RecentBlog />
        </div>
      </div>
    </>
  );
};

export default RecentBlogs;
