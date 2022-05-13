import nc from 'next-connect';
import Blog from '../../../models/Blog';
import Contact from '../../../models/Contact';
import { isAuth } from '../../../utils/auth';
import db from '../../../utils/db';

const handler = nc();

handler.use(isAuth).post(async (req, res) => {

    const { title, body, category, tags, image } = req.body;

    await db.connect();

    const blog = new Blog({
        title, 
        body, 
        category, 
        tags, 
        image,
        postedBy: req.admin._id
    });
    if(await blog.save()){
        await db.disconnect();
        res.json({
            message: 'Blog added successfully'
        })
    }
});

export default handler;
