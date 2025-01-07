import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  desc: { type: String, required: false, trim: true },
});

export default mongoose.model('Post', UserSchema);