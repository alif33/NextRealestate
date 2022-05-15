import nc from 'next-connect';
import db from '../../../utils/db';
import Blog from '../../../models/Blog';
import { isAuth } from '../../../utils/auth';

const handler = nc();


handler.post(async (req, res) => {
  if(req.query._id){
    const { name, email, comment } = req.body;
    await Blog.findOneAndUpdate(
      { "_id": req.query._id }, 
      { $push: { 
          "comments": {
            name, email, comment
          }
      }},
      {returnOriginal: false}
  ).then(blog=>res.send({
    success: true,
    message: 'Comment added successfully'
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