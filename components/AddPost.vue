<script setup>

const title = ref('');
const desc = ref('');
const error = ref(null);

const addUser = async () => {
//   error.value = null;
  try {
    await $fetch('/api/posts', {
      method: 'POST',
      body: { title: title.value, desc: desc.value },
    });
    
    title.value = '';
    desc.value = '';
  } catch (err) {
    error.value = err;
  }
};
</script>



<template>
    <form @submit.prevent="addUser">
        <input v-model="title" placeholder="Title" required />
        <input v-model="desc" placeholder="Desc" type="text" required />
        <button type="submit">Добавить изучение</button>
        <div v-if="error">Ошибка: {{ error.message }}</div>
    </form>
    <NuxtLink to="/">Главная</NuxtLink>
</template>
  
