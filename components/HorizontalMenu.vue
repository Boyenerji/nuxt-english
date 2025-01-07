<script setup lang="ts">
const links = [ {
  label: 'Создать пост',
  icon: 'bxs:plus-square',
  to: '/post/add'
}]
</script>

<template>
  <div class="dark:bg-slate-600s">
    <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
  </div>
</template>

