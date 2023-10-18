<template>
    <div class="article-content">
        <div class="top-article my-4 py-4">
            <figure class="w-full" v-if="content?.image_url">
                <img :src="content?.image_url" :alt="content.title" class="w-full h-[300px] object-cover" />
            </figure>
            <h1 class="text-center text-5xl my-4">
                {{ content.title }}
            </h1>
        </div>
        <div class="max-w-3xl mx-auto">
            <USkeleton class="h-4 w-full" v-if="!content.post_content" />
            <div v-else>
                <!-- <ElementImageCanvas :images="imagesFromDom" /> -->
                <div v-html="content.post_content"></div>
            </div>
            <!-- <Editor :content="content.post_content" v-else /> -->
        </div>
    </div>
</template>
<script setup>
import { tryOnMounted } from '@vueuse/core';

const props = defineProps({
    content: {
        type: Object,
        required: true
    }
})
const imagesFromDom = ref([]);
props.content.post_content = removeHTMLCommentAndBlankLines(props.content.post_content);
// const images = getAllImageUrls(props.content.post_content);
tryOnMounted(() => {
    imagesFromDom.value = getImagesUrls(props.content.post_content);
});

</script>