import Post from '~/server/models/Posts';
import PostsTimer from '~/server/models/PostsTimer';

export default defineEventHandler(async (event) => {

    try {
        const countPost = await Post.countDocuments(); // Получаем количество записей из первой модели
        const countPostsTimer = await PostsTimer.countDocuments(); // Получаем количество записей из второй модели

        
        const difference = countPost - countPostsTimer;
        console.log(`Количество записей в countPost: ${countPost}`);
        console.log(`Количество записей в countPostsTimer: ${countPostsTimer}`);
        console.log(`Raznica: ${difference}`);
        return difference
        
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Ошибка сервера',
        });
    }

});