import nc from 'next-connect';
import db from '../../../utils/db';
import Blog from '../../../models/Blog';
import { isAuth } from '../../../utils/auth';

const handler = nc();


handler.post(async (req, res) => {
  if(req.query._id){
    const { name, email, comment, _time } = req.body;
    await Blog.findOneAndUpdate(
      { "_id": req.query._id }, 
      { $push: { 
          "comments": {
            name, email, comment, _time
          }
      }},
      {returnOriginal: false}
  ).then(blog=>res.send({
    success: true,
    message: 'Comment added sucessfully',
    blog
  }))
  }
});

handler.get(async (req, res) => {
    if(req.query._id){
        await db.connect();
        const blogs = await Blog.findOne({
          _id: req.query._id 
        })
          .populate({
            path: 'category',
            select: 'categoryName categorySlug'
          })
          .populate({
            path: 'postedBy',
            select: 'name email'
          });
        await db.disconnect();
        res.send(blogs);
    }
});

export default handler;



handler.delete(async (req, res) => {
  await db.connect();
  const blog = await Blog.findById(req.query.id);
  if (blog) {
    await blog.remove();
    await db.disconnect();
    res.send({ message: 'Blog Deleted' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Blog Not Found' });
  }
});