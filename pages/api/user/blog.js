import nc from 'next-connect';
import Blog from '../../../models/Blog';
import Contact from '../../../models/Contact';
import db from '../../../utils/db';

const handler = nc();

handler.post(async (req, res) => {

    const { title, body, postedBy, category, tags, image } = req.body;

    await db.connect();

    const blog = new Blog({
        title, body, postedBy, category, tags, image
    });
    if(await blog.save()){
        await db.disconnect();
        res.json({
            message: 'Blog added successfully'
        })
    }
});

export default handler;
