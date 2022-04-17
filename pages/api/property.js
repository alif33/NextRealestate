import nc from 'next-connect';
import Property from '../../models/Property';
import db from '../../utils/db';

const handler = nc();

handler.post(async (req, res) => {
    const data = req.body;
    await db.connect();
    
    const property = new Property({
        ...data
    });


    if(await property.save()){
        await db.disconnect();
        res.send({
            success: true,
            message: 'Submitted successfully'
        })
    }
});

export default handler;
