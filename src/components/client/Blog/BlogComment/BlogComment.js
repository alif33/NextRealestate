import React from "react";
import BlogComReply from "./BlogComReply";

const BlogComment = () => {
  return (
    <>
      <div className="border-bottom pb-4 mb-4">
        <p>
          Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper
          nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl
          tellus sodales lectus dictum tristique proin vitae. Odio fermentum
          viverra tortor quis reprehenderit in voluptate velit.
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center pe-2">
            <img
              className="rounded-circle me-1"
              src="img/rokye-website/Avtar.png"
              width={48}
              alt="Avatar"
            />
            <div className="ps-2">
              <h6 className="fs-base mb-0">Daniel Adams</h6>
              <span className="text-muted fs-sm">3 days ago</span>
            </div>
          </div>
          <button className="btn btn-link btn-sm" type="button">
            <i className="fi-reply fs-lg me-2" />
            <span className="fw-normal">Reply</span>
          </button>
        </div>
        {/* Reply to comment*/}
       <BlogComReply/>
      </div>
    </>
  );
};

export default BlogComment;
