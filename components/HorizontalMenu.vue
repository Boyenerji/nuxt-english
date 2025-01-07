<script setup lang="ts">
const links = [ {
  label: 'Создать пост',
  icon: 'bxs:plus-square',
  to: '/post/add'
}]
</script>

<template>
  <div class="text-2xl dark:bg-slate-600">
    <UHorizontalNavigation :links="links" class="text-2xl border-b border-gray-200 dark:border-gray-800" />
  </div>
</template>

