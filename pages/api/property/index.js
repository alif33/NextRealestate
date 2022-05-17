import nc from 'next-connect';
import multer from 'multer';
import Property from '../../../models/Property';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';
import { isAuth } from '../../../utils/auth';
import db from '../../../utils/db';


// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });
  
// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

const handler = nc();
// const upload = multer();

handler.use(isAuth).post(async (req, res) => {
    const {
        propertyCategory,
        propertyType,
        bedrooms,
        bathrooms,
        bikeParking,
        carParking,
        carpetArea,
        superArea,
        houseNumber,
        areaName,
        state,
        societyName,
        city,
        pinCode,
        floorNo,
        facing,
        furnishedStatus,
        availability,
        totalFloors,
        balconies,
        ageConstruction,
        tenantsPreferred,
        vegPermission,
        petsPermission,
        amenities,
        description,
        monthlyRent,
        maintenanceCharges,
        securityAmount,
        basis,
        propertyImage,
        propertyVideo,
        firstName,
        lastName,
        phoneNumber,
        email
    } = req.body;

    // const streamUpload = (req) => {
    //     return new Promise((resolve, reject) => {
    //       const stream = cloudinary.uploader.upload_stream((error, result) => {
    //         if (result) {
    //           resolve(result);
    //         } else {
    //           reject(error);
    //         }
    //       });
    //       streamifier.createReadStream(req.file.buffer).pipe(stream);
    //     });
    //   };


    // const { url } = await streamUpload(req);

    // if(url){
        await db.connect();
    
        const property = new Property({
            propertyCategory,
            propertyType,
            bedrooms,
            bathrooms,
            bikeParking,
            carParking,
            carpetArea,
            superArea,
            houseNumber,
            areaName,
            state,
            societyName,
            city,
            pinCode,
            floorNo,
            facing,
            furnishedStatus,
            availability,
            totalFloors,
            balconies,
            ageConstruction,
            tenantsPreferred,
            vegPermission,
            petsPermission,
            amenities,
            description,
            monthlyRent,
            maintenanceCharges,
            securityAmount,
            basis,
            propertyImage,
            propertyVideo,
            firstName,
            lastName,
            phoneNumber,
            email,
            _owner: req.user._id
        });
        
        if(await property.save()){
            await db.disconnect();
            res.send({
                success: true,
                message: 'Submitted successfully'
            })
        }
    // }

});

export default handler;
