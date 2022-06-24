
import nc from "next-connect";
import db from "../../../../utils/db";
import { onError } from "../../../../utils/error";
import jwt from 'jsonwebtoken';

const handler = nc({ onError });

handler.put(async (req, res) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if (err) {
            res.status(401).json({ 
                success: true,
                message: 'Something went wrong. Please try again.' 
            });
        } else {
            res.send(decode);
        }
      });
  
    // await db.connect();


});

export default handler;