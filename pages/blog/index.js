import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AddComment from "../../src/components/client/Blog/AddComment/AddComment";
import BlogComment from "../../src/components/client/Blog/BlogComment/BlogComment";
import BlogMeta from "../../src/components/client/Blog/BlogMeta";
import BlogTagShare from "../../src/components/client/Blog/BlogTagShare";
import SingleBlogSidebar from "../../src/components/client/Blog/SingleBlogSidebar";
import Layout from "../../src/components/client/layout";
import { getData } from "../../__lib__/helpers/HttpService";

function Blog({blog}) {

  return (
    <Layout>
      <div className="container mt-5 pt-5">
        <nav className="mb-3 mb-md-4 pt-md-3" aria-label="Breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Blog
            </li>
          </ol>
        </nav>
        <h1 className="h2 pb-3 text-capitalize" style={{ color: "grey" }}>
          {blog?.title}
        </h1>
        <img
          className="rounded-3"
          src="img/rokye-website/blog/14.jpg"
          alt="Image"
        />
        <div className="row mt-4 pt-3">
          {/* Post content*/}
          <p>{blog?.body}</p>
          <div className="col-lg-8">
            {/* Post meta*/}
            <BlogMeta />
            {/* Tags + Sharing*/}
            <BlogTagShare tags={blog?.tags} />
            {/* Comments*/}
            <div className="mb-4 mb-md-5" id="comments">
              <h3 className="mb-4 pb-2">3 comments</h3>
              {/* Comment*/}
              <BlogComment />
            </div>
          </div>
          {/* Sidebar*/}
          <SingleBlogSidebar postedBy={blog?.postedBy} />
        </div>
      </div>
      <AddComment />
    </Layout>
  );
}
export default Blog;

export async function getServerSideProps(context) {
    const blog = await getData(`/blog/${context.query.id}`)
      return {
        props: {
            blog: blog || {}
        },
      };
    }
    