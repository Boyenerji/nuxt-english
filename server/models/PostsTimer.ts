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
    expires: 14400 
  },
});

export default mongoose.model('PostsTimer', PostSchema);