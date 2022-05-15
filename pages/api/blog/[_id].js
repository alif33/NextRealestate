import nc from 'next-connect';
import db from '../../../utils/db';
import Blog from '../../../models/Blog';

const handler = nc();

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