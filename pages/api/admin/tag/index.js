import nc from 'next-connect';
import db from '../../../../utils/db';
import { onError } from '../../../../utils/error';
import slugify from 'slugify';
import Tag from '../../../../models/Tag';
  
const handler = nc({ onError });

handler.post(async (req, res) => {
    const { 
      tagName
    } = req.body;

    await db.connect();
        const tag = new Tag({
          tagName,
          tagSlug: slugify(`${ tagName }`, '-')
        });
        if(await tag.save()){
            await db.disconnect();
             return res.send({
                success: true,
                message: 'Tag added successfully'
            })
        }
});

export default handler;
  