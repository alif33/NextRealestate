import React from "react";
import styles from "./BlogUPload.module.css";
// import "./Blogupload.css"

const BlogUPload = (props) => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    imageHandler,
    category,
    setCategory,
  } = props;
  return (
    <>
      <form>
        <div>
          <label className="form-label" htmlFor="fname">
            Blog Title
          </label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Enter your blog title ..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mt-2">
          <label className="form-label" htmlFor="lname">
            Blog Description
          </label>
          <textarea
            type="text-area"
            id="lname"
            name="lastname"
            placeholder="Enter your blog description ..."
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mt-2">
          <label className="form-label" htmlFor="myFile">
            Upload photo
          </label>
          <input
            type="file"
            className={styles.input1}
            id="myFile"
            name="filename"
            onChange={imageHandler}
          />
        </div>
        <label className={styles.selector} htmlFor="country">
          Category
        </label>
        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          id="country"
          name="country"
        >
          <option value="australia">GUIDES</option>
          <option value="canada">TIPS & ADVICE</option>
          <option value="usa">LIFESTYLE</option>
        </select>

        {/* <input type="submit" className={[styles.input2, styles.input3]} value="Submit" /> */}
      </form>
    </>
  );
};

export default BlogUPload;
