import Post from '~/server/models/Posts';


export default defineEventHandler(async (event) => {
  try {
    const posts = await Post.find();
    return posts;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Ошибка сервера',
    });
  }
});