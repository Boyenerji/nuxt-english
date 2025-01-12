<script setup>
import Spinner from '~/components/Spinner.vue';

import 'animate.css';

const { data: englishs, status, error, execute } = await useFetch('/api/posts');

const translate = ref('')
const isRight = ref(false)
const inputRef = ref(null);


const isBlur = ref(true)
const blurChoice = () => {
    isBlur.value = !isBlur.value
}

const isMatch2 = computed(() => {
    if (englishs.value && englishs.value.length > 0) {
        return translate.value.toLowerCase() === englishs.value[0].englishtext.toLowerCase();
    }
    return false;
});

const saveDocument = async () => {
    console.log('isMatch2:', isMatch2.value);
    if (isMatch2.value) {
        const postInstance = englishs.value[0]; // Предполагаем, что postInstance это первый элемент в englishs
        const postId = postInstance._id; 
        console.log('Post ID:', postId);

        try {
            const response = await fetch('/api/savePost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ postId })
            });
            const result = await response.json();
            console.log('Document saved:', result);
        } catch (error) {
            console.error('Error saving document:', error);
        }
    } else {
        console.log('No document to save');
    }
};

watch(isMatch2, async (newVal, oldVal) => {
    if (newVal) {
        try {
            await saveDocument();
            isRight.value = true;
            translate.value = '';
            setTimeout(async () => {
                isRight.value = false;
                await retryFetch()
            }, 1500);
        } catch (error) {
            console.error('Error in watcher callback:', error);
        }
    }
});




// const isMatch = computed(() => 
// translate.value.toLowerCase() === englishs.value[0].englishtext.toLowerCase()
// );


const retryFetch = async () => {
  try {
    await execute(); // Перезапускаем запрос
    await nextTick(); // Ждем завершения обновления DOM
    if (inputRef.value) {
        inputRef.value.focus(); // Устанавливаем фокус на input после повторного запроса
    }
    console.log('Запрос выполнен повторно');
  } catch (err) {
    console.error('Ошибка при повторном запросе:', err);
  }
};


onMounted(() => {
    if (inputRef.value) {
        inputRef.value.focus();
    }
});






</script>


<template>

    <HorizontalMenu />


    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <div>
            <div v-if="status === 'pending'" class="flex justify-center">
                <Spinner />
            </div>
            <div v-else-if="error">Ошибка: {{ error.message }}</div>
            <div v-else-if="englishs.length != 0">

                <div v-for="english in englishs" :key="english._id" class="animate__animated animate__fadeIn">
                    <p class="text-gray-800 text-4xl font-semibold divide-y dark:text-gray-300">{{ english.russian }}</p>
                    <p @click="blurChoice" class="text-3xl cursor-pointer mt-2 dark: text-gray-500"
                        :class="{ 'blur-sm': isBlur }">
                        {{ english.englishtext }}
                    </p>
                </div>
            </div>
            <div v-else>
                <p class="text-4xl font-bold text-black">Все фразы повторили</p>
            </div>
        </div>
    </div>

    <div v-if="isRight" class="fixed bottom-20 left-0 w-full p-4 text-center">
        <div class="p-4 mb-4 text-sm text-green-700 rounded-lg bg-green-200 dark:bg-gray-800 dark:text-green-400"
            role="alert">
            <span class="font-medium">Правильно</span>
        </div>
    </div>

    <div v-else-if="englishs.length != 0" class="fixed bottom-20 left-0 w-full p-4 text-center">
        <input type="text" id="first_name" v-model.trim="translate" ref="inputRef"
            class=" bg-gray-50 border border-gray-300 text-gray-800 text-3xl font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500  p-4 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lg:w-1/2"
            required />
    </div>


    <div v-if="englishs.length != 0" class="fixed bottom-4 left-0 w-full p-4 text-center">
        <div class="mt-5">
            <button @click="retryFetch" type="button"
                class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-semibold rounded-full  px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                Далее
            </button>
        </div>
    </div>


</template>
