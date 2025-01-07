import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  russian: { type: String, required: true, trim: true },
  englishtext: { type: String, required: false, trim: true },
});

export default mongoose.model('Post', UserSchema);