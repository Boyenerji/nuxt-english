import Post from '~/server/models/Posts';
import PostsTimer from '~/server/models/PostsTimer';

export default defineEventHandler(async (event) => {

    try {
        const countPost = await Post.countDocuments(); // Получаем количество записей из первой модели
        const countPostsTimer = await PostsTimer.countDocuments(); // Получаем количество записей из второй модели

        if (countPost != 0 && countPostsTimer != 0) {
            const difference = countPost - countPostsTimer;
            console.log(`Количество записей в ModelOne: ${countPost}`);
            console.log(`Количество записей в ModelTwo: ${countPostsTimer}`);
            console.log(`Разница: ${difference}`);
            return difference
        }
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Ошибка сервера',
        });
    }



//   try {
//     const posts = await Post.aggregate([
//       {
//         $lookup: {
//           from: 'poststimers', // Название коллекции PostsTimer в MongoDB
//           localField: '_id',
//           foreignField: 'postId',
//           as: 'timer'
//         }
//       },
//       {
//         $match: {
//           'timer.postId': { $exists: false }
//         }
//       },
//       {
//         $sample: { size: 1 } 
//       }
//     ]);

//     if (posts.length === 0) {
//       return []; // Возвращаем пустой массив
//     }

//     return posts;
//   } catch (error) {
//     throw createError({
//       statusCode: 500,
//       statusMessage: 'Ошибка сервера',
//     });
//   }
});