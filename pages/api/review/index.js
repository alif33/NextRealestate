import nc from 'next-connect';
import Review from '../../models/Review';
import { isAuth } from '../../utils/auth';
import db from '../../utils/db';

const handler = nc();

handler.use(isAuth).post(async (req, res) => {
    const { rating, body } = req.body;
    await db.connect();

    const review = new Review({
        user: req.user_id, rating, body
    });
    
    if(await review.save()){
        await db.disconnect();
        res.json({
            message: 'Submitted successfully'
        })
    }
});

export default handler;
