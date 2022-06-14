import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import User from '../../../models/User';
import Property from '../../../models/Property';
import db from '../../../utils/db';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const user = await User.findOne({ email: req.body.email }).populate("wishlists", {Property});
  await db.disconnect();
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    const token = signToken(user);
    res.send({
      success: true,
      token,
      user
    });
  } else {
    res.status(401).send({ message: 'Invalid email or password' });
  }
});

export default handler;
