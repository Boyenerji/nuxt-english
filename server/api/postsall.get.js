import Post from '~/server/models/Posts';


// export default defineEventHandler(async (event) => {
//   try {
//     const posts = await Post.find();

//     if (posts.length === 0) {
//       return [];
//     }

//     return posts;
//   } catch (error) {
//     throw createError({
//       statusCode: 500,
//       statusMessage: 'Ошибка сервера',
//     });
//   }
// });



export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const limit = parseInt(query.limit) || 10; // Количество постов на странице
  const skip = parseInt(query.skip) || 0; 
  
  console.log(query);

  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 }) 
      .limit(limit)
      .skip(skip);

    console.log(posts);

    const total = await Post.countDocuments(); 

    return {
      posts,
      total,
    };
  } catch (error) {
    return { error: 'Failed to fetch posts.' };
  }
});
