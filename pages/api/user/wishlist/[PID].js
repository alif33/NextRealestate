import nc from "next-connect";
import Property from "../../../../models/Property";
import { isAuth } from "../../../../utils/auth";
import db from "../../../../utils/db";

const handler = nc();

handler.use(isAuth).put(async (req, res) => {
  const { PID } = req.query;
  await db.connect();
  const property = await Property.find({ _id: 'dfdfdfdfasd' });
   db.disconnect();
  console.log(property);
  //   if (property) {
  //     const userUpdate = await User.updateOne(
  //       { _id: req.user._id },
  //       {
  //         $push: {
  //           wishlists: PID,
  //         },
  //       },
  //       { returnOriginal: false }
  //     );
  //     await db.disconnect();
  //     res.send(userUpdate);
  //   } else {
  //     res.send({
  //       error: "Property not found",
  //     });
  //   }
});

export default handler;
