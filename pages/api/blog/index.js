import nc from 'next-connect';
import Blog from '../../../models/Blog';
import db from '../../../utils/db';

const handler = nc();

handler.post(async (req, res) => {
    const { title, body, postedBy, category, tags } = req.body;
    await db.connect();

    const blog = new Blog({
        title, body, postedBy, category, tags
    });
    if(await blog.save()){
        await db.disconnect();
        res.send({
            success: true,
            message: 'Blog submitted successfully'
        })
    }
});

export default handler;
