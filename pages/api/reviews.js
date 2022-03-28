import nc from 'next-connect';
import db from '../../utils/db';
import Review from '../../models/Review';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const reviews = await Review.find({}).populate('user', ['name', 'email']);
  await db.disconnect();
  res.send(reviews);
});

export default handler;
