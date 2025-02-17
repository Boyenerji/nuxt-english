import mongoose from 'mongoose';
// import Post from '~/server/models/Posts';

const PostSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 43200 
  },
});

// PostSchema.index({ createdAt: 1 }, { expireAfterSeconds: 43200 });

export default mongoose.model('PostsTimer', PostSchema);