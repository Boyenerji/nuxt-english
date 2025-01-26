<template>


    <div
        class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div class="flex justify-center h-full max-w-lg  mx-auto font-medium">

            <NuxtLink to="/"
                class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <Icon name="bxs:home" size="25" class="text-gray-500 mb-1" />
                <span
                    class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    Home
                </span>
            </NuxtLink>

            <NuxtLink to="/post/add"
                class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <Icon name="bxs:add-to-queue" size="25" class="text-gray-500 mb-1" />
                <span
                    class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    Add post
                </span>
            </NuxtLink>

            <NuxtLink to="/post/all"
                class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <Icon name="bxs:layer" size="25" class="text-gray-500 mb-1" />
                <span
                    class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    All posts
                </span>
            </NuxtLink>
        </div>
    </div>

</template>