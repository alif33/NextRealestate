import { useState } from "react";
import BlogCard from "../src/components/client/Blogs/BlogCard";
import BlogCard2 from "../src/components/client/Blogs/BlogCard2";
import BlogPagination from "../src/components/client/Blogs/BlogPagination";
import BlogSearch from "../src/components/client/Blogs/BlogSearch";
import BlogShorted from "../src/components/client/Blogs/BlogShorted";
import BlogCategory from "../src/components/client/Blogs/Category/BlogCategory";
import FeturedPosts from "../src/components/client/Blogs/FeturedPost/BlogFeturedPosts";
import Subcriber from "../src/components/client/Blogs/Subcriber";
import BlogTags from "../src/components/client/Blogs/Tags/BlogTags";
import Layout from "../src/components/client/layout";
import { getData } from "../__lib__/helpers/HttpService";

function Blogs({ blogs, tags }) {
  const [search, setSearch] = useState(null);
  const shorted = blogs.slice(blogs?.length - 2, blogs?.length);
  const shorted2 = blogs.slice(1, blogs.length - 2);
  const reversed = shorted2.reverse();

  const handleSearch = (e) => {
    setSearch(e);
  };
  const filtered = blogs?.filter((val) => {
    if (!search) {
      return [];
    } else if (
      val.title.toLowerCase().includes(search?.toLowerCase()) ||
      val.category?.categoryName.toLowerCase().includes(search?.toLowerCase())
    ) {
      return val;
    }
  });
  console.log(search);
  console.log(filtered.length === blogs.length || filtered.length === 0);

  return (
    <Layout>
      <div className="container mt-5 mb-md-4 py-5">
        {/* Breadcrumb + Page title*/}
        <nav className="mb-3 mb-md-4 pt-md-3" aria-label="Breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="job-board-home-v1.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Blog
            </li>
          </ol>
        </nav>
        <h1 className="pb-3" style={{ color: "grey" }}>
          Real estate journey
        </h1>
        <div className="row">
          {/* List of articles*/}
          <div className="col-lg-8">
            {!search && (
              <div className="border-bottom pb-2">
                <div className="row">
                  {/* Item*/}
                  {shorted.map((short, i) => (
                    <BlogCard key={i} blog={short} />
                  ))}
                </div>
              </div>
            )}
            <div className="pt-4 pb-2 mt-2">
              {/* Item*/}
              {!search &&
                reversed.map((blog, i) => <BlogCard2 key={i} blog={blog} />)}
              {search && (filtered.length === blogs.length || filtered.length === 0 ? <div>Blog not found</div> :
                filtered.map((blog, i) => <BlogCard2 key={i} blog={blog} />))}
              {/* {search && filtered.length === blogs.length || filtered.length === 0 ? <div>Blog not found</div> :
                filtered.map((blog, i) => <BlogCard2 key={i} blog={blog} />)} */}
            </div>
            {/* Pagination*/}
            <BlogPagination />
          </div>
          {/* Sidebar*/}
          <aside className="col-lg-4">
            <div
              className="offcanvas offcanvas-end offcanvas-collapse"
              id="blog-sidebar"
            >
              <div className="offcanvas-header shadow-sm mb-2">
                <h2 className="h5 mb-0">Sidebar</h2>
                <button
                  className="btn-close"
                  type="button"
                  data-bs-dismiss="offcanvas"
                />
              </div>
              <div className="offcanvas-body">
                {/* Sort*/}
                <BlogShorted blogs={blogs} />
                {/* Search*/}
                <BlogSearch handleSearch={handleSearch} />
                {/* Categories*/}
                <BlogCategory blogs={blogs} />
                {/* Tags*/}
                <BlogTags tags={tags} />
                {/* Fetured posts (carousel)*/}
                <FeturedPosts />
                {/* Subscription form*/}
                <Subcriber />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
export default Blogs;

export async function getServerSideProps() {
  const blogs = await getData("/blogs");
  const tags = await getData("/tags");

  return {
    props: {
      blogs,
      tags,
    },
  };
}
