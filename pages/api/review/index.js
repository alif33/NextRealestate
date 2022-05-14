// import nc from 'next-connect';
// import Review from '../../models/Review';
// import { isAuth } from '../../utils/auth';
// import db from '../../utils/db';

// const handler = nc();

// handler.use(isAuth).post(async (req, res) => {
//     const { rating, body } = req.body;
//     await db.connect();

//     const review = new Review({
//         user: req.user_id, rating, body
//     });
    
//     if(await review.save()){
//         await db.disconnect();
//         res.json({
//             message: 'Submitted successfully'
//         })
//     }
// });

// export default handler;


import nc from 'next-connect';
import Review from '../../../models/Review';
import db from '../../../utils/db';

const handler = nc();

handler.post(async (req, res) => {
    const { name, email, body, rating } = req.body;
    await db.connect();

    const review = new Review({
        name, email, body, rating
    });
    if(await review.save()){
        await db.disconnect();
        res.send({
            success: true,
            message: 'Review add success'
        })
    }
});

export default handler;

