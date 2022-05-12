import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    role: { type: String, required: true },
    role: { type: Number, required: false },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
