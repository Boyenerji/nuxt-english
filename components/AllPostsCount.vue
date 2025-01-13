
<script setup>


const { data, status, error } = await useFetch('/api/postscount');

</script>



<template>

    <div>
        <div v-if="status === 'pending'" class="flex justify-center">
            <Spinner />
        </div>
        <div v-else-if="error">Ошибка: {{ error.message }}</div>
        <div v-else-if="data !== null && data.length != 0">
            <p v-if="data">{{ data }}</p>
        </div>
        <div v-else>
            <p class="text-4xl font-bold text-black">Нет постов.</p>
        </div>
    </div>

</template>