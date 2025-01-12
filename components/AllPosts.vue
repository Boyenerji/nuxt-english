
<script setup lang="ts">

import AllPostsCount from './AllPostsCount.vue';

interface Post {
    _id: string;
    russian: string;
    englishtext: string;
}

const { data, status, error } = await useFetch<Post[]>('/api/postsall');

const countBDposts = ref(0)

// const countBD2 = async () => {
//     const { data: counts, status, error} = await useFetch('/api/postscount');

//     if (error.value) {
//         console.error('Ошибка при получении данных:', error.value);
//         return;
//     }
//     console.log(counts.value)
//     countBDposts.value = counts.value ? Number(counts.value) : 0
// }

</script>



<template>
    
    <nuxt-link to="/">Main</nuxt-link>
    <nuxt-link to="/post/add">Add post</nuxt-link>

    <AllPostsCount />

    <div>
        <div v-if="status === 'pending'" class="flex justify-center">
            <Spinner />
        </div>
        <div v-else-if="error">Ошибка: {{ error.message }}</div>
        <div v-else-if="data !== null && data.length != 0">
            
            <div v-for="dat in data" :key="dat._id" class="animate__animated animate__fadeIn shadow-3xl p-2 rounded-md mt-2">
                <p class="text-gray-800 text-4xl font-semibold divide-y dark:text-gray-300">{{ dat.russian }}</p>
                <p class="p-1 text-3xl mt-2 dark: text-gray-500">
                    {{ dat.englishtext }}
                </p>
            </div>
        </div>
        <div v-else>
            <p class="text-4xl font-bold text-black">Нет постов.</p>
        </div>
    </div>
</template>