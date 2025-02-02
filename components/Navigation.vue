<template>


    <div
        class="fixed bottom-0 left-0 z-50 w-full h-16 emerald border-t border-gray-200 dark:border-gray-600 dark:hover:text-white">
        <div class="flex justify-center h-full max-w-lg mx-auto font-medium">

            <NuxtLink to="/"
                class="inline-flex flex-col items-center justify-center px-5 hover:bg-emerald-600">
                <Icon name="bxs:home" size="25" class="text-white mb-1" />
                <span
                    class="text-sm text-white font-bold">
                    Home
                </span>
            </NuxtLink>

            <NuxtLink to="/post/add"
                class="inline-flex flex-col items-center justify-center px-5 hover:bg-emerald-600">
                <Icon name="bxs:add-to-queue" size="25" class="text-white mb-1" />
                <span
                    class="text-sm text-white font-bold">
                    Add post
                </span>
            </NuxtLink>

            <NuxtLink to="/post/all"
                class="inline-flex flex-col items-center justify-center px-5 hover:bg-emerald-600 dark:hover:text-red-500">
                <Icon name="bxs:layer" size="25" class="text-white mb-1" />
                <span
                    class="text-sm text-white font-bold">
                    All posts
                </span>
            </NuxtLink>


            <div class="inline-flex flex-col items-center justify-center cursor-pointer px-5 dark:hover:bg-emerald-600">
                <DarkMode />
            </div>

        </div>
    </div>

</template>


<style>

.emerald {
    background-color: #00DC82;
}

</style>