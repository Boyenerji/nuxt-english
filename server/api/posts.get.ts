import Post from '~/server/models/Posts';


export default defineEventHandler(async (event) => {
  try {
    // const posts = await Post.find();

    const posts = Post.aggregate([{ $sample: { size: 1 } }])

    return posts;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Ошибка сервера',
    });
  }
});