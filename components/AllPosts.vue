
<script setup lang="ts">

import AllPostsCount from './AllPostsCount.vue';

interface Post {
    _id: string;
    russian: string;
    englishtext: string;
}

const { data, status, error } = await useFetch<Post[]>('/api/postsall');


const links = [
  { label: 'Home', href: '/' },
  { label: 'Add post', href: '/post/add' },
];



</script>



<template>
    
    <HorizontalMenu :links="links" />

    <AllPostsCount />

    <div>
        <div v-if="status === 'pending'" class="flex justify-center">
            <Spinner />
        </div>
        <div v-else-if="error">Ошибка: {{ error.message }}</div>
        <div v-else-if="data !== null && data.length != 0">
            
            <div v-for="dat in data" :key="dat._id" class="animate__animated animate__fadeIn shadow-3xl p-2 rounded-md mt-3">
                <p class="text-gray-800 text-3xl font-semibold divide-y dark:text-gray-300">{{ dat.russian }}</p>
                <p class="p-1 text-2xl mt-2 dark: text-gray-500">
                    {{ dat.englishtext }}
                </p>
            </div>
        </div>
        <div v-else>
            <p class="text-4xl font-bold text-black">Нет постов.</p>
        </div>
    </div>
</template>