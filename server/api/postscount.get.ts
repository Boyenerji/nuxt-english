import Post from '~/server/models/Posts';

export default defineEventHandler(async (event) => {

    try {
        const countPost = await Post.countDocuments();

        if (!countPost) {
            return [];
        }
        console.log(countPost)
        return countPost;

    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Ошибка сервера',
        });
    }

});