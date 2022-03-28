import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
    {
        categoryName: {
            type: String,
            required: true,
            trim: true,
        },
        categorySlug: {
            type: String,
            required: true,
            // unique: true,
        }
    },
    { timestamps: true }
);

export default mongoose.models.Category || mongoose.model('Category', categorySchema);

