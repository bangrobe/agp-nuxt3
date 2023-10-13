<template>
    <div class="md:max-w-screen-xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <BlogVideoCard v-for="article in articles['posts']" :key="article.id" :article="article" />
        </div>
    </div>
</template>
<script setup>

const route = useRoute();
const { data: articles } = await useFetch(`/proxy/wp/v1/latest-posts?page_size=12&cat_slug=videos`);
// const { data: articles } = await useAsyncData('latest-videos', async () => {
//     const response = await useCustomFetch('/wp/v1/latest-posts?cat_slug=videos');
//     return response
// })
</script>