
<script setup>

import AllPostsCount from './AllPostsCount.vue';



const posts = ref([]);
const totalPosts = ref(0);
const isLoading = ref(false);
const limit = 10; // Количество постов за раз
let skip = 0; // Количество пропущенных постов

const links = [
  { label: 'Home', href: '/' },
  { label: 'Add post', href: '/post/add' },
];

const fetchPosts = async () => {
  if (isLoading.value) return; // Избегаем повторных запросов
  isLoading.value = true;

  try {
    const data = await $fetch(`/api/postsall`, {
      params: { limit, skip },
    });

    console.log('posts.value:', posts.value);
    console.log('totalPosts.value:', totalPosts.value);


    posts.value.push(...data.posts);
    totalPosts.value = data.total;
    skip += limit; 
  } catch (error) {
    console.error('Ошибка при загрузке постов:', error);
  } finally {
    isLoading.value = false;
  }
};


onMounted(() => {
  fetchPosts();
});



</script>



<template>

    <HorizontalMenu :links="links" />

    <AllPostsCount />

    <div>
        <div v-for="post in posts" :key="post._id"
            class="animate__animated animate__fadeIn shadow-3xl p-2 rounded-md mt-3">
            <p class="text-gray-800 text-3xl font-semibold divide-y dark:text-gray-300">{{ post.russian }}</p>
            <p class="p-1 text-2xl mt-2 dark: text-gray-500">
                {{ post.englishtext }}
            </p>
        </div>


        <div v-if="posts.length != totalPosts"
            class="mt-3 fixed bottom-4 left-1/2 transform -translate-x-1/2 text-center">
            <button @click="fetchPosts" :disabled="isLoading || posts.length >= totalPosts"
                class="text-white flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg px-5 py-2.5 text-center me-2 mb-2">
                <SmallSpinner v-if="isLoading" class="mr-2" />
                {{ isLoading ? 'Загрузка...' : 'Показать еще' }}
            </button>
        </div>


        <div v-if="posts.length >= totalPosts"
            class="mt-3 fixed bottom-4 left-1/2 transform -translate-x-1/2 text-center">
            <button
                class="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Все посты загружены.
            </button>
        </div>
    </div>

</template>