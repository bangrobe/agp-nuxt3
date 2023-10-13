<template>
     <div class="top-article">
            <figure class="w-full">
                <USkeleton class="w-full h-[300px] object-cover" />
            </figure>
            <h1 class="text-center text-5xl">
                <USkeleton class="h-4 w-full" />
            </h1>
        </div>
        <div class="content-article my-4">
            <USkeleton class="h-4 w-full" />
            <!-- <div v-html="content.post_content" v-else /> -->
            <!-- <Editor :content="content.post_content" v-else /> -->
        </div>

        <div class="meta-article my-4">

        </div>
        <div class="related-articles">

        </div>
</template>