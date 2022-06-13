import nc from "next-connect";
import Property from "../../../../models/Property";
import User from "../../../../models/User";
import { isAuth } from "../../../../utils/auth";
import db from "../../../../utils/db";

const handler = nc();

handler.use(isAuth).put(async (req, res) => {
  const { PID } = req.query;
  await db.connect();
  const property = await Property.find({ _id: PID });
  if (property.length > 0) {
    const alreadyExists = await User.findById({ _id: req.user._id });

    if (!alreadyExists.wishlists.includes(PID)) {
      const userUpdate = await User.findByIdAndUpdate(
        { _id: req.user._id },
        {
          $push: {
            wishlists: PID,
          },
        },
        { returnOriginal: false }
      );

      await db.disconnect();

      if (userUpdate) {
        res.send(userUpdate);
      } else {
        res.send({
          error: "Unauthorized",
        });
      }
    } else {
      res.send({
        error: "Already added on wishlisht",
      });
    }
  } else {
    res.send({
      error: "Property not found",
    });
  }
});

export default handler;
