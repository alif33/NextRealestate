import nc from 'next-connect';
import Review from '../../models/Review';
import db from '../../utils/db';

const handler = nc();

handler.post(async (req, res) => {
    const { _id, rating, body } = req.body;
    await db.connect();

    const review = new Review({
        user: _id, rating, body
    });
    
    if(await review.save()){
        await db.disconnect();
        res.json({
            message: 'Submitted successfully'
        })
    }
});

export default handler;
