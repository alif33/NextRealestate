import nc from 'next-connect';
import Blog from '../../models/Blog';
import Contact from '../../models/Contact';
import db from '../../utils/db';

const handler = nc();

handler.post(async (req, res) => {

    const { title, body, postedBy, category } = req.body;

    // res.json({
    //     category
    // })
    await db.connect();

    const blog = new Blog({
        title, body, postedBy, category
    });
    if(await blog.save()){
        await db.disconnect();
        res.json({
            message: 'Submitted successfully'
        })
    }
});

export default handler;
