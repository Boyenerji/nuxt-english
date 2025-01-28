<script setup>
import { initFlowbite } from 'flowbite';

defineProps({
  rules: {
    type: String,
    required: false,
  },
});


</script>



<template>


    <button data-popover-target="popover-default" type="button"
        class=" text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-center">
        <span
            class="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full dark:bg-gray-700 dark:text-blue-400">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 20 20">
                <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Icon description</span>
        </span>
    </button>


    <div data-popover id="popover-default" role="tooltip"
        class="absolute z-10 invisible inline-block w-64 text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
        <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
            <h3 class="font-semibold text-gray-900 dark:text-white">Правило</h3>
        </div>
        <div class="px-3 py-2">
            <p v-html="rules"></p>
        </div>
        <div data-popper-arrow></div>
    </div>

</template>