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
  <div class="p-5">
    <form @submit.prevent="addUser">
      <UInput v-model="title" placeholder="Title" variant="none" class="border-2 rounded" />
      <UInput v-model="desc" placeholder="Desc" class="mt-2 outline-none border-2 rounded" variant="none" />
      <UButton type="submit" class="mt-2" icon="bxs:plus-circle" size="sm" color="primary" variant="solid"
        label="Add Post" :trailing="false" />
      <div v-if="error">Ошибка: {{ error.message }}</div>
    </form>
    <NuxtLink to="/">Главная</NuxtLink>
  </div>
</template>
  
