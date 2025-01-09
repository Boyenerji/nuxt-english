
<script setup>
import { useHead } from 'nuxt/app';

useHead({
  bodyAttrs: {
    class: 'dark:bg-gray-900',
  },
});
</script>

<template>
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    </Head>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </div>
</template>
