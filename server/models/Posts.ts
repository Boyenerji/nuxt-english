import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  russian: { type: String, required: true, trim: true },
  englishtext: { type: String, required: true, trim: true },
  rulestext: { type: String, required: false, trim: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Post', UserSchema);