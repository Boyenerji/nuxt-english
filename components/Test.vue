<template>
    <ClientOnly>
        <Icon @click="toggleColorMode" class="cursor-pointer text-white" size="25" :name="colorMode.preference === 'dark' ? 'i-heroicons-sun' : 'i-heroicons-moon'" />
        <span
            class="text-sm text-white font-bold mt-1">
            {{ colorMode.preference === 'dark' ? 'Темный' : 'Светлый' }}
        </span>
    </ClientOnly>
</template>


<script setup>
const colorMode = useColorMode();

const toggleColorMode = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};
</script>
  
