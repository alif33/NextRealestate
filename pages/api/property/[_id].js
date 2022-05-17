import nc from 'next-connect';
import Property from '../../../models/Property';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const property = await Property.findById(req.query._id);
  await db.disconnect();
  res.send(property);
});

export default handler;
