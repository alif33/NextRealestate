import nc from 'next-connect';
import db from '../../../../utils/db';
import Blog from '../../../../models/Blog';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const blogs = await Blog.find({
    category
  })
    .populate({
      path: 'category'
    })
    .populate({
      path: 'postedBy',
    });
  await db.disconnect();
  res.send(blogs);
});

export default handler;