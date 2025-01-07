

import Post from '~/server/models/Posts';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  console.log(body);

  try {
    const post = await Post.create(body);
    return post;
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Ошибка при создании поста',
    });
  }
});