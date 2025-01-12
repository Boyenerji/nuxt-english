
<script setup lang="ts">


const { data, status, error } = await useFetch('/api/postscount');

</script>



<template>
    <p v-if="data">{{ data }}</p>
</template>