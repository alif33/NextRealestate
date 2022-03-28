import nc from 'next-connect';
import Category from '../../models/Category';
import db from '../../utils/db';

const handler = nc();

handler.post(async (req, res) => {
    const { categoryName, categorySlug } = req.body;
    await db.connect();

    const category = new Category({
        categoryName, categorySlug
    });
    
    if(await category.save()){
        await db.disconnect();
        res.json({
            message: 'Category created successfully'
        })
    }
});

export default handler;
