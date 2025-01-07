<script setup>
const { data: englishs, status, error } = await useFetch('/api/posts');

const translate = ref('')


const isBlur = ref(true)
const blurChoice = () => {
    isBlur.value = !isBlur.value
}

const isMatch = computed(() => translate.value.toLowerCase() === englishs.value[0].englishtext.toLowerCase());

</script>


<template>
    <HorizontalMenu />
    <div class="h-screen inset-0 flex items-center justify-center dark:bg-black">

        <div class="flex-col w-full m-1">
            <div class="bg-slate-50 w-full p-7 rounded shadow-lg dark:bg-gray-800">
                <div>
                    <div v-if="status === 'pending'">Загрузка...</div>
                    <div v-else-if="error">Ошибка: {{ error.message }}</div>
                    <div v-else-if="englishs.length != 0">

                        <div v-for="english in englishs" :key="english._id">
                            <p v-if="isMatch" class="p-1 bg-green-400 rounded">{{ isMatch ? 'Правильно' : '' }}</p>
                            <p class="text-gray-300 text-3xl font-medium divide-y">{{ english.russian }}</p>
                           
                            <p @click="blurChoice" class="text-3xl cursor-pointer mt-1 dark: text-gray-500" :class="{ 'blur-sm': isBlur}">
                                {{ english.englishtext }}
                            </p>
                            <div class="mt-5">
                                <input type="text" v-model="translate" placeholder="Перевод" class="p-2 rounded text-2xl">
                            </div>
                            
                        </div>
                    </div>
                    <div v-else>
                        <p>Нет</p>
                    </div>
                </div>
            </div>
            <div class="text-center mt-3">
                <UButton icon="bxs:right-arrow-circle" to="/post/add" color="primary" variant="solid" label="Next"
                    :trailing="false" />
            </div>

        </div>

    </div>

</template>
