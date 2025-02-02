<script setup lang="ts">
import { Icon } from '#components';

</script>

<template>

    <div id="sticky-banner" tabindex="-1"
        class="fixed top-0 start-0 z-50 flex justify-between w-full p-4 bg-emerald-500 animate__animated animate__fadeInDown">
        <div class="flex items-center mx-auto">
            <p class="flex items-center text-sm font-normal text-white dark:text-white">
                <Icon name="bxs:check-circle" size="20" class="mr-1"></Icon>
                <span class="font-medium">Успешно добавили!</span>
            </p>
        </div>
        <div class="flex items-center">
            <button data-dismiss-target="#sticky-banner" type="button"
                class="shrink-0 inline-flex justify-center w-7 h-7 items-center text-white hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close banner</span>
            </button>
        </div>
    </div>


</template>