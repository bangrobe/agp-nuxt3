<template>
    <main class="md:max-w-screen-xl mx-auto">
        <SkeletonArticle v-if="!content" />
        <ArticleVideoContent v-else :content="content" />
    </main>
</template>
<script setup>
const route = useRoute();

const { data: content, } = await useFetchApi(`wp/v1/post-details-by-slug?slug=${route.params.slug}`);
useSeoMeta({
    title: content.value.title,
    description: content.value.post_content.length !== 0 ? excerpt.value : 'Watching more beauty girls at agirlpic.com',
    ogImage: content.value.image_url.length !== 0 ? content.value.image_url : null,
})
</script>