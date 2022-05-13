import nc from 'next-connect';
import User from '../../../models/User';
import { isAuth } from '../../../utils/auth';
import db from '../../../utils/db';

const handler = nc();
handler.use(isAuth);

handler.use(isAuth).put(async (req, res) => {
    const { name, email, phoneNumber, password, updatePassword, image, wishlists } = req.body;
    await db.connect();
    if(updatePassword){
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(updatePassword, salt);
        const update = await User.updateOne(
            { "_id": req.user._id }, 
            { $set: { 
                "name": name,
                "email": email,
                "phoneNumber": phoneNumber,
                "password": hashedPassword,
                "image": image,
                "wishlists": wishlists
            } }
            )

        if(update.modifiedCount){
            await db.disconnect();
            res.send({
                success: true,
                message: 'User updated successfully'
            })
        }
    }else{
        const update = await User.updateOne(
            { "_id": req.user._id }, 
            { $set: { 
                "name": name,
                "email": email,
                "phoneNumber": phoneNumber,
                "password": password,
                "image": image,
                "wishlists": wishlists
            } }
            )

        if(update.modifiedCount){
            await db.disconnect();
            res.send({
                success: true,
                message: 'User updated successfully'
            })
        }
    }
});

export default handler;
