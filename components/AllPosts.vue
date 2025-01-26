
<script setup>

import { initFlowbite } from 'flowbite';
import AllPostsCount from './AllPostsCount.vue';



const posts = ref([]);
const totalPosts = ref(0);
const isLoading = ref(false);
const limit = 10; // Количество постов за раз
let skip = 0; // Количество пропущенных постов

// const links = [
//   { label: 'Home', href: '/' },
//   { label: 'Add post', href: '/post/add' },
// ];

const fetchPosts = async () => {
  if (isLoading.value) return; // Избегаем повторных запросов
  isLoading.value = true;

  try {
    const data = await $fetch(`/api/postsall`, {
      params: { limit, skip },
    });



    posts.value.push(...data.posts);
    totalPosts.value = data.total;
    skip += limit; 

    await nextTick();

    console.log('data:', data);
    console.log('posts.value:', posts.value);
    console.log('totalPosts.value:', totalPosts.value);
    console.log('skip:', skip);
  } catch (error) {
    console.error('Ошибка при загрузке постов:', error);
  } finally {
    isLoading.value = false;
  }
};


onMounted(() => {
  fetchPosts();
});

onUpdated(() => {
  initFlowbite();
});





</script>



<template>

  <!-- <HorizontalMenu :links="links" /> -->

  <AllPostsCount />

  <div>
    <div v-for="post in posts" :key="post._id" class="animate__animated animate__fadeIn shadow-3xl p-2 rounded-md m-2">
      <p class="text-gray-800 text-3xl font-semibold divide-y dark:text-gray-300">{{ post.russian }}</p>
      <p class="p-1 text-2xl mt-2 dark: text-gray-500">
        {{ post.englishtext }}
      </p>
      <div v-if="post.rulestext">

        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-full h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
          <span
            class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">Примеры</span>
        </div>

        <i v-html="post.rulestext" class="p-1 text-2xl mt-2 dark: text-gray-500"></i>
      </div>
    </div>


    <div v-if="posts.length != totalPosts" class="mt-3 fixed bottom-20 left-1/2 transform -translate-x-1/2 text-center">
      <button @click="fetchPosts" :disabled="isLoading || posts.length >= totalPosts"
        class="text-white flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg px-5 py-2.5 text-center me-2 mb-2">
        <SmallSpinner v-if="isLoading" class="mr-2" />
        {{ isLoading ? 'Загрузка...' : 'Показать еще' }}
      </button>
    </div>

    <div v-if="posts.length >= totalPosts" class="mt-3 fixed bottom-20 left-1/2 transform -translate-x-1/2 text-center">
      <button disabled
        class="text-white flex items-center justify-center bg-gradient-to-br from-rose-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg px-5 py-2.5 text-center me-2 mb-2">
        {{ 'Все посты загрузили' }}
      </button>
    </div>
  </div>

  <Navigation />

</template>