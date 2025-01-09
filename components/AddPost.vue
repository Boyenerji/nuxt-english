<script setup>

const russian = ref('');
const englishtext = ref('');
const error = ref(null);

const addUser = async () => {
//   error.value = null;
  try {
    await $fetch('/api/posts', {
      method: 'POST',
      body: { russian: russian.value, englishtext: englishtext.value },
    });
    
    russian.value = '';
    englishtext.value = '';
  } catch (err) {
    error.value = err;
  }
};
</script>



<template>

<nuxt-link to="/">Main</nuxt-link>


<div class="h-screen inset-0 flex items-center justify-center dark:bg-black">

<div class="flex-col bg-gray-500 w-full">
    
  <div class="p-5">
    <p class="mb-2 text-2xl font-medium text-slate-50 dark:text-white">Добавить пост</p>
    <form @submit.prevent="addUser">
      <!-- <UInput v-model="russian" placeholder="На русском" variant="none" class="border-2 rounded text-2xl" /> -->
      <input 
          type="text" 
          id="first_name" 
          v-model="russian"
          placeholder="На русском"
          class="bg-gray-50 border border-gray-300 text-gray-500 text-3xl font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500  p-3 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required 
      />
      <input 
          type="text" 
          id="first_name" 
          v-model="englishtext"
          placeholder="English"
          class="bg-gray-50 border mt-1 border-gray-300 text-gray-500 text-3xl font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500  p-3 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required 
      />
      <!-- <UInput v-model="englishtext" placeholder="На английском" class="mt-2 outline-none border-2 rounded text-2xl" variant="none" /> -->
      <div class="text-center mt-3">
        <UButton type="submit" class="mt-2" icon="bxs:plus-circle" size="sm" color="primary" variant="solid"
          label="Add Post" :trailing="false" />
      </div>
      <div v-if="error">Ошибка: {{ error.message }}</div>
    </form>
  </div>

</div>

</div>

</template>
  
