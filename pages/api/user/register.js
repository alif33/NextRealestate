import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import User from '../../../models/User';
import db from '../../../utils/db';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    isAdmin: false,
  });
  const user = await newUser.save();
  await db.disconnect();

  const token = signToken(user);
  res.send({
      success: true,
      message: 'Registered successfully'
    // token,
    // _id: user._id,
    // name: user.name,
    // email: user.email,
    // isAdmin: user.isAdmin,
  });
});

export default handler;
