// server/api/savePost.js
import mongoose from 'mongoose';
import PostsTimer from '~/server/models/PostsTimer';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { postId } = body;

  const doc = new PostsTimer({
    postId: postId, // Сохраняем ObjectId из модели Post
  });

  await doc.save();
  return { message: 'Document saved', doc };
});