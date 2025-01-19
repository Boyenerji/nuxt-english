<script setup>

const russian = ref('');
const englishtext = ref('');
const error = ref(null);
const isLoading = ref(false);

const addUser = async () => {
//   error.value = null;
  try {
    isLoading.value = true;
    await $fetch('/api/posts', {
      method: 'POST',
      body: { russian: russian.value, englishtext: englishtext.value },
    });
    
    russian.value = '';
    englishtext.value = '';
  } catch (err) {
    error.value = err;
  } finally {
    isLoading.value = false;
  }
};


const links = [
  { label: 'Home', href: '/' },
  { label: 'All Posts', href: '/post/all' },
];



</script>



<template>



<HorizontalMenu :links="links"/>

<!-- <nuxt-link to="/">Main</nuxt-link> -->


<div class="h-screen inset-0 flex items-center justify-center dark:bg-black">

<div class="flex-col  w-full">
    
  <div class="p-5">
    <p class="mb-2 text-2xl font-medium text-gray-500 dark:text-white">Добавить пост</p>
    <form @submit.prevent="addUser">

      <textarea 
          type="text" 
          id="first_name" 
          v-model="englishtext"
          placeholder="English"
          class="placeholder-gray-500 placeholder-opacity-20 bg-gray-50 border border-gray-300 text-gray-500 text-3xl font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500  p-3 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required>
      </textarea>

      <textarea 
          type="text" 
          id="first_name" 
          v-model="russian"
          placeholder="На русском"
          class="placeholder-gray-500 placeholder-opacity-20 bg-gray-50 mt-2 border border-gray-300 text-gray-500 text-3xl font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500  p-3 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required>
      </textarea>

      
      <div class="text-center mt-3">
        <button 
            type="submit"
            :disabled="!englishtext || !russian || isLoading"
            class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-semibold rounded-full  px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            {{ isLoading ? 'Сохранение...' : 'Сохранить' }}
        </button>
      </div>
      <div v-if="error">Ошибка: {{ error.message }}</div>
    </form>
  </div>

</div>

</div>

</template>
  
