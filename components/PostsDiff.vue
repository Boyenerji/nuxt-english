<script setup>

const props = defineProps({
    diff: Number,
})

</script>



<template>

    <div>

        <div class="flex justify-center items-center">
            <div class="mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 10c3.976 0 8-1.374 8-4s-4.024-4-8-4s-8 1.374-8 4s4.024 4 8 4">
                    </path>
                    <path fill="currentColor"
                        d="M4 10c0 2.626 4.024 4 8 4s8-1.374 8-4V8c0 2.626-4.024 4-8 4s-8-1.374-8-4z"></path>
                    <path fill="currentColor"
                        d="M4 14c0 2.626 4.024 4 8 4s8-1.374 8-4v-2c0 2.626-4.024 4-8 4s-8-1.374-8-4z"></path>
                    <path fill="currentColor"
                        d="M4 18c0 2.626 4.024 4 8 4s8-1.374 8-4v-2c0 2.626-4.024 4-8 4s-8-1.374-8-4z"></path>
                </svg>
            </div>
            <p class="text-xl font-semibold">{{ diff }}</p>
        </div>


        <!-- <div v-if="status === 'pending'" class="flex justify-center">
            <p>Загрузка</p>
            <Spinner />
        </div>
        <div v-else-if="error">Ошибка: {{ error.message }}</div>
        <div v-else-if="data !== null && data.length != 0">
            <div class="flex justify-center items-center">
                <div class="mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 10c3.976 0 8-1.374 8-4s-4.024-4-8-4s-8 1.374-8 4s4.024 4 8 4">
                        </path>
                        <path fill="currentColor"
                            d="M4 10c0 2.626 4.024 4 8 4s8-1.374 8-4V8c0 2.626-4.024 4-8 4s-8-1.374-8-4z"></path>
                        <path fill="currentColor"
                            d="M4 14c0 2.626 4.024 4 8 4s8-1.374 8-4v-2c0 2.626-4.024 4-8 4s-8-1.374-8-4z"></path>
                        <path fill="currentColor"
                            d="M4 18c0 2.626 4.024 4 8 4s8-1.374 8-4v-2c0 2.626-4.024 4-8 4s-8-1.374-8-4z"></path>
                    </svg>
                </div>
                <p class="text-xl font-semibold">{{ data }}</p>
            </div>
        </div>
        <div v-else>
            <p class="text-4xl font-bold text-black">Ошибка.</p>
        </div> -->
    </div>

</template>