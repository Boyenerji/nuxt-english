<script setup>
import Popover from '~/components/Popover.vue';
import PostsDiff from '~/components/PostsDiff.vue';
import Spinner from '~/components/Spinner.vue';


const { data: englishs, status:postsStatus, error:postsError, execute:executePosts } = await useFetch('/api/posts');
const { data: diff, status:diffStatus, error:diffError, execute:executeDiff} = await useFetch('/api/postsdiff');


const translate = ref('')
const isRight = ref(false)
const inputRef = ref(null);
const isDisabled = ref(false)


const showText = ref(false)
const wordsOrStats = computed(() => {
    if (!showText.value) {
        let englishsText2 = ''
        englishsText2 = englishs.value[0].englishtext.replace(/[a-zA-Z]/g, '*');
        return englishsText2
    } else {
        return englishs.value[0].englishtext
    }

})


const toggleText = () => {
  showText.value = !showText.value
}




const isMatch2 = computed(() => {
    if (englishs.value && englishs.value.length > 0) {
        const userInput = translate.value
            .toLowerCase()
            .replace(/’/g, "'") // Заменяем типографские кавычки
            .trim();

        const correctText = englishs.value[0].englishtext
            .toLowerCase()
            .replace(/’/g, "'") 
            .trim();

        return userInput === correctText;
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


const retryFetch = async () => {
  try {
    isDisabled.value = true
    await executePosts(); 
    await executeDiff();
    await nextTick();
    showText.value = false
    if (inputRef.value) inputRef.value.focus();
    console.log('Запрос выполнен повторно');
  } catch (err) {
    console.error('Ошибка при повторном запросе:', err);
  } finally {
    isDisabled.value = false
  }
};


onMounted(() => {
    if (inputRef.value) inputRef.value.focus();
});

onUpdated(() => {
  initFlowbite();
});




const links = [
  { label: 'Add post', href: '/post/add' },
  { label: 'All Posts', href: '/post/all' },
];


</script>






<template>



    <HorizontalMenu :links="links" />

    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">

        <div>
            <div v-if="postsStatus === 'pending' || diffStatus === 'pending'" class="flex justify-center">
                <Spinner />
            </div>
            <div v-else-if="postsError">Ошибка: {{ postsError.message }}</div>
            <div v-else-if="englishs.length != 0">

                <!-- <PostsDiff /> -->

                <div v-if="isRight">
                    <div class="bg-green-500 p-3 flex justify-center items-center animate__animated animate__fadeIn">
                        <div class="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <path fill="#FFFFFF"
                                    d="M7 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm4 10.414l-2.707-2.707l1.414-1.414L11 12.586l3.793-3.793l1.414 1.414z" />
                            </svg>
                        </div>
                        <p class="text-white font-semibold text-xl">Правильно</p>
                    </div>
                </div>

                <div v-else>
                    <PostsDiff :diff="diff" class="mt-4" />

                    <div v-for="english in englishs" :key="english._id" class="animate__animated animate__fadeIn mt-1 ">
                        <p 
                            class="text-gray-800 pl-1 pr-1 text-4xl font-semibold divide-y dark:text-gray-300"
                            :class="{ 'text-xl': english.russian.length > 30 }">
                            {{ english.russian}}
                        </p>
                        <p  class="pt-2 pr-2 pl-2 text-3xl cursor-pointer dark: text-gray-500">
                            {{ wordsOrStats }}
                        </p>
                       
                        <span
                            @click="toggleText"
                            class="inline-flex items-center justify-center p-2 rounded-md mt-2 text-sm font-semibold cursor-pointer text-blue-800 bg-blue-100  dark:bg-gray-700 dark:text-blue-400">
                            {{ showText ? 'Скрыть' : 'Показать' }}
                            <span class="sr-only">Icon description</span>
                        </span>




                        <div v-if="english.rulestext" class="mt-2">
                            <Popover :rules="english.rulestext" />
                        </div>
                        

                    </div>
                </div>

            </div>
            <div v-else>
                <p class="text-4xl font-bold text-black dark:text-white">Все фразы повторили.</p>
            </div>
        </div>
    </div>

    <div v-if="englishs.length != 0 && !isDisabled && !isRight" class="fixed bottom-32 left-0 w-full p-4 text-center">
        <input 
            type="text" 
            v-model.trim="translate" 
            ref="inputRef"
            required
            class=" bg-gray-50 border border-gray-300 text-gray-800 resize-none text-2xl font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500  p-4 w-full dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lg:w-1/2"
        />
    </div>


    <div v-if="englishs.length != 0 && !isRight" class="fixed bottom-12 left-0 w-full p-4 text-center">
        <div class="mt-5">
            <button @click="retryFetch" :disabled="isDisabled" type="button"
                class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-semibold rounded-full  px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                {{ isDisabled ? 'Загрузка...' : 'Далее' }}
            </button>
        </div>
    </div>


    <Navigation />



</template>