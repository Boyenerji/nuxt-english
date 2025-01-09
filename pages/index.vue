<script setup>
import Spinner from '~/components/Spinner.vue';

const { data: englishs, status, error, execute } = await useFetch('/api/posts');

const translate = ref('')


const isBlur = ref(true)
const blurChoice = () => {
    isBlur.value = !isBlur.value
}

const isMatch = computed(() => translate.value.toLowerCase() === englishs.value[0].englishtext.toLowerCase());


const retryFetch = async () => {
  try {
    await execute(); // Перезапускаем запрос
    console.log('Запрос выполнен повторно');
  } catch (err) {
    console.error('Ошибка при повторном запросе:', err);
  }
};




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

                <div v-for="english in englishs" :key="english._id">
                    <p v-if="isMatch" class="p-1 bg-green-400 rounded">{{ isMatch ? 'Правильно' : '' }}</p>
                    <p class="text-gray-800 text-4xl font-semibold divide-y dark:text-gray-300">{{ english.russian }}</p>

                    <p @click="blurChoice" class="text-3xl cursor-pointer mt-2 dark: text-gray-500"
                        :class="{ 'blur-sm': isBlur }">
                        {{ english.englishtext }}
                    </p>
                </div>
            </div>
            <div v-else>
                <p>Нет</p>
            </div>
        </div>
        <div class="mt-5">
            <button 
                @click="retryFetch" 
                type="button"
                class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-semibold rounded-full  px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                Далее
            </button>
        </div>
    </div>

    <div class="fixed bottom-0 left-0 w-full p-4 text-center">
                <input type="text" id="first_name" v-model="translate"
                    class="bg-gray-50 border border-gray-300 text-gray-800 text-3xl font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500  p-5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required />
            </div>



    <!-- <div class="h-screen inset-0 flex-col justify-center items-center dark:bg-black">



        <div class="flex-col w-full m-1">
            <button @click="retryFetch" type="button"
                class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Повторить
                запрос</button>
            <div class="bg-slate-50 w-full p-7 rounded shadow-lg dark:bg-gray-800">
                <div>
                    <div v-if="status === 'pending'">
                        <UProgress animation="carousel" />
                    </div>
                    <div v-else-if="error">Ошибка: {{ error.message }}</div>
                    <div v-else-if="englishs.length != 0">

                        <div v-for="english in englishs" :key="english._id">
                            <p v-if="isMatch" class="p-1 bg-green-400 rounded">{{ isMatch ? 'Правильно' : '' }}</p>
                            <p class="text-gray-400 text-3xl font-medium divide-y">{{ english.russian }}</p>

                            <p @click="blurChoice" class="text-3xl cursor-pointer mt-1 dark: text-gray-500"
                                :class="{ 'blur-sm': isBlur}">
                                {{ english.englishtext }}
                            </p>
                        </div>
                    </div>
                    <div v-else>
                        <p>Нет</p>
                    </div>
                </div>
            </div>
            <div class="text-center mt-3">
            </div>

            <div class="fixed bottom-0 left-0 w-full p-4 text-center">
                <input type="text" id="first_name" v-model="translate"
                    class="bg-gray-50 border border-gray-300 text-gray-800 text-3xl font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500  p-5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required />
            </div>

        </div>




    </div> -->

</template>
