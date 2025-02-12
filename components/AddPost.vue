<script setup>




const russian = ref('');
const englishtext = ref([""]);
const rulestext = ref('');
const error = ref(null);
const isLoading = ref(false);
const isBanner = ref(false);

const addUser = async () => {
//   error.value = null;
  try {
    isLoading.value = true;
    await $fetch('/api/posts', {
      method: 'POST',
      body: { russian: russian.value, englishtext: englishtext.value, rulestext: rulestext.value },
    });
    
    russian.value = '';
    englishtext.value = [''];
    rulestext.value = '';
  } catch (err) {
    error.value = err;
  } finally {
    isLoading.value = false;
    isBanner.value = true;
    setTimeout(() => {
      isBanner.value = false;
  }, 2500);
  }
};


const addInput = () => {
  englishtext.value.push("");
};

// Удаление определенного поля
const removeInput = (index) => {
  englishtext.value.splice(index, 1);
};

console.log('englishtext.value:', englishtext.value);



</script>



<template>

  <!-- <TextEditor /> -->

  <!-- <HorizontalMenu :links="links"/> -->
  <Banner v-if="isBanner" />

  <div class="h-screen inset-0 flex items-center justify-center dark:bg-black">

    <div class="flex-col w-full">

      <div v-if="!isLoading" class="p-5">
        <p class="text-center ">
          <Icon name="unjs:jimp-compact" class="text-center" size="70" />
        </p>
        <p class="text-center mb-7 text-4xl font-bold text-gray-500 dark:text-white">Добавить пост</p>
        <form @submit.prevent="addUser" class="text-center flex-col">

          <!-- <div> -->

          <!-- <div class="flex items-center text-center mx-auto lg:w-1/2">
              <Icon name="flag:us-4x3" />
              <p class="ml-1 text-gray-500 font-medium">На английском</p>
            </div> -->











          <!-- <input type="text" v-model="englishtext"
              class="placeholder-gray-500 placeholder-opacity-10 bg-gray-50 mt-1 border border-gray-300 text-gray-500 text-2xl font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3 w-full resize-none lg:w-1/2 lg:mx-auto dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required 
            /> -->



          <!-- </div> -->

          <div>
            <div class="flex items-center text-center mx-auto lg:w-1/2">
              <Icon name="flag:us-4x3" />
              <p class="ml-1 text-gray-500 font-medium">На английском</p>
            </div>
            <div v-for="(text, index) in englishtext" :key="index" class="flex items-center mb-2">
              <input type="text" v-model="englishtext[index]"
                class="placeholder-gray-500 placeholder-opacity-10 bg-gray-50 mt-1 border border-gray-300 text-gray-500 text-2xl font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3 w-full resize-none lg:w-1/2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              <button v-if="index > 0" @click="removeInput(index)" class="ml-2 text-red-500 hover:text-red-700">
                Удалить
              </button>
            </div>
            <button @click="addInput" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Добавить поле
            </button>
          </div>

          <div>
            <div class="flex items-center mx-auto lg:w-1/2 mt-3">
              <Icon name="flag:ru-4x3" />
              <p class="ml-1 text-gray-500 font-medium">На русском</p>
            </div>
            <input type="text" v-model="russian"
              class="placeholder-gray-500 placeholder-opacity-10 bg-gray-50 mt-1 border border-gray-300 text-gray-500 text-2xl font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3 w-full resize-none lg:w-1/2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required />
          </div>


          <div>
            <div class="flex items-center mx-auto lg:w-1/2 mt-3">
              <Icon name="bxs:chat" class="text-gray-500" />
              <p class="ml-1 text-gray-500 font-medium">Объяснения или пример</p>
            </div>
            <textarea v-model="rulestext" :class="[
            rulestext.length > 20 ? 'text-lg' : 'text-xl'
          ]"
              class="placeholder-gray-500 placeholder-opacity-10 bg-gray-50 mt-1 border border-gray-300 text-gray-500 font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3 w-full resize-none lg:w-1/2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
          </div>



          <div class="text-center mt-3">
            <button type="submit" :disabled="!englishtext || !russian || isLoading"
              class="text-white emerald hover:bg-emerald-600 focus:outline-none focus:ring-4 font-semibold rounded-full cursor-pointer  px-5 py-2.5 text-center mb-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-900">
              {{ isLoading ? 'Сохранение...' : 'Сохранить' }}
            </button>
          </div>
          <div v-if="error">Ошибка: {{ error.message }}</div>
        </form>
      </div>
      <div v-else class="flex justify-center">
        <Spinner />
      </div>

    </div>

  </div>




  <Navigation />

</template>
  
<style>

.emerald {
    background-color: #00DC82;
}
</style>