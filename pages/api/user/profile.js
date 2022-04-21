import nc from 'next-connect';
import { isAuth } from '../../../utils/auth';

const handler = nc();
handler.use(isAuth);

handler.get(async (req, res) => {
    return res.send(req.user);
});

export default handler;
