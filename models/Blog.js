import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            min: 100
        },
        body: {
            type: String,
            required: true,
            trim: true
        },
        postedBy: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User', 
            required: true 
        },
        category: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Category', 
            required: true  
        },
        tags: [
            
        ]
    },
    { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model('Blog', blogSchema);

