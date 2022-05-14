import nc from 'next-connect';
import User from '../../../models/User';
import { isAuth } from '../../../utils/auth';
import db from '../../../utils/db';


const handler = nc();

handler.use(isAuth).put(async (req, res) => {
    const { PID } = req.query;

    if(req.query?.PID){
        await db.connect();
        User.updateOne(
            { "_id": req.user._id }, 
            { $push: { 
                "wishlists": PID
            }},
            {returnOriginal: false}
        ).then(user=>res.send(user))
    }
});

export default handler;