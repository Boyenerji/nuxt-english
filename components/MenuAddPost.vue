<script setup lang="ts">
const links = [ {
  label: 'Главная',
  icon: 'bxs:map-pin',
  to: '/'
}]
</script>

<template>
  <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
</template>