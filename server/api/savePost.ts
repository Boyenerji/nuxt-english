// server/api/savePost.js
import mongoose from 'mongoose';
import PostsTimer from '~/server/models/PostsTimer';
import Posts from '../models/Posts';

export default defineEventHandler(async (event) => {

  try {
    const body = await readBody(event);
    const { postId } = body;

    if (!postId) {
      return { error: 'postId is required' };
    }

    const doc = new PostsTimer({
      postId: postId,
    });

    const currentDate = new Date();
    console.log("Ot" + currentDate);
    currentDate.setHours(currentDate.getHours() + 6);
    console.log('Posle' + currentDate);

    const addCreateAtDo = await Posts.findOneAndUpdate(
      { _id: postId },
      { $set: { createdDo: currentDate } },
    );

    if (!addCreateAtDo) {
      return { message: 'Document not found' };
    }

    await doc.save();
    return { message: 'Document saved', doc };
  } catch (error) {
    console.error('Error in savePost API:', error);
    return { error: 'Internal Server Error' };
  }

});