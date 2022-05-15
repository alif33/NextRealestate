import nc from 'next-connect';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';
import Blog from '../../../models/Blog';
import db from '../../../utils/db';
import { isAuth } from '../../../utils/auth';
import slugify from 'slugify';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
  
export const config = {
    api: {
        bodyParser: false,
    },
};

const handler = nc();
const upload = multer();

handler.use(isAuth, upload.single('image')).post(async (req, res) => {
    const { title, body, category, tags } = req.body;

    const streamUpload = (req) => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream((error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          });
          streamifier.createReadStream(req.file.buffer).pipe(stream);
        });
      };
      const { url } = await streamUpload(req);
      
      if(url)
      {
        await db.connect();

        const blog = new Blog({
            title,
            slug: slugify(title, '-'), 
            body, 
            category, 
            tags, 
            image: url,
            postedBy: req.user._id
        });
        if(await blog.save()){
            await db.disconnect();
            res.send({
                success: true,
                message: 'Blog submitted successfully'
            })
        }
      }

});

export default handler;
