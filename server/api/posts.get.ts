import Post from '~/server/models/Posts';
import PostsTimer from '~/server/models/PostsTimer';

export default defineEventHandler(async (event) => {
  try {
    const posts = await Post.aggregate([
      {
        $lookup: {
          from: 'poststimers', // Название коллекции PostsTimer в MongoDB
          localField: '_id',
          foreignField: 'postId',
          as: 'timer'
        }
      },
      {
        $match: {
          'timer.postId': { $exists: false }
        }
      },
      {
        $sample: { size: 1 } 
      }
    ]);

    if (posts.length === 0) {
      return []; // Возвращаем пустой массив
    }

    console.log(posts)

    return posts;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Ошибка сервера',
    });
  }
});