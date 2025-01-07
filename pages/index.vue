<script setup>

const { data: englishs, status, error } = await useFetch('/api/posts');

</script>


<template>
    <div>
        <div v-if="status === 'pending'">Загрузка...</div>
        <div v-else-if="error">Ошибка: {{ error.message }}</div>
        <div v-else-if="englishs.length != 0">
            <ul>
                <li v-for="english in englishs" :key="english._id">
                    {{ english.title }} - {{ english.desc }}
                </li>
            </ul>
        </div>
        <div v-else>
            <p>Нет</p>
        </div>
    </div>
    <!-- <NuxtLink to="/post/add">Создать пост</NuxtLink> -->

    <UButton
    icon="i-heroicons-pencil-square"
    size="sm"
    to="/post/add"
    color="primary"
    variant="solid"
    label="Create Post"
    :trailing="false"
  />
</template>
