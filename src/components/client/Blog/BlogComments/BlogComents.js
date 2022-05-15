import React from 'react';
import { useSelector } from 'react-redux';
import BlogComment from './BlogComment';

const BlogComents = () => {
    const {blog} = useSelector(state => state);
    const {blogData} = blog;
    console.log(blog)
    return (
        <>
           <div className="mb-4 mb-md-5" id="comments">
              <h3 className="mb-4 pb-2">{blog?.comments?.length} comments</h3>
              {/* Comment*/}
              {blogData?.comments?.map((comment, i) => (
                <BlogComment key={i} comment={comment} />
              ))}
            </div> 
        </>
    );
};

export default BlogComents;