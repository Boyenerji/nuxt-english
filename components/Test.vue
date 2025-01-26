<template>
    <!-- <div> -->
        <!-- <button @click="toggleColorMode">Переключить режим</button> -->
        <Icon @click="toggleColorMode" class="cursor-pointer text-white" size="25" :name="colorMode.preference === 'dark' ? 'i-heroicons-sun' : 'i-heroicons-moon'" />
        <span
            class="text-sm text-white dark:text-gray-400 dark:group-hover:text-blue-500 mt-1">
            {{ colorMode.preference === 'dark' ? 'Темный' : 'Светлый' }}
        </span>
    <!-- </div> -->
</template>

<script setup>
const colorMode = useColorMode();

const toggleColorMode = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};
</script>
  
