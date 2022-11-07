import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    id: { type: String },
    userName: { type: String, required: true },
    name: { type: String, required: true },
    passWord: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    versionKey: false,
  },
);

const User = mongoose.model('users', userSchema);

export default User;
