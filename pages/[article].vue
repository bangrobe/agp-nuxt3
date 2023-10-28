<template>
    <div>
        <main class="md:max-w-screen-xl mx-auto w-full">
            <SkeletonArticle v-if="!content" />
            <ArticleContent v-else :content="content" />
            <transition name="fade">
                <div v-if="related_posts && related_posts?.length > 0"
                    class="fixed md:bottom-[50px] transition-all ease-in-out duration-1000 w-[12rem] left-[50px]"
                    :class="[bigRelatedPostsVisible ? 'block opacity-100' : 'hidden opacity-0', relatedPostsVisible ? 'bottom-[20px]' : 'bottom-[-250px]']">
                    <div class="related-posts-wrapper text-center">
                        <span class="bg-blue-500 px-4 rounded-md py-1 text-white cursor-pointer"
                            @click="toggleRelatedPostsVisibility">Related Posts</span>
                        <ArticleCarousel :related_posts="related_posts" />
                    </div>
                </div>
            </transition>
        </main>
    </div>
</template>
<script setup>
const route = useRoute();
const excerpt = ref('');
// const related_posts = ref();
const relatedPostsVisible = ref(false);
const bigRelatedPostsVisible = ref(true);
const { data: content } = await useFetchApi(`wp/v1/post-details-by-slug?slug=${route.params.article}`);
if (content.value.post_content?.length !== 0) {
    excerpt.value = removeTags(content.value?.post_content).substring(0, 150).trim();
}

// if (content.value?.id) {
// const response = await $fetch(`/proxy/wp/v1/related-posts/${content.value.id}`); OK
const { data: related_posts } = await useFetchApi(`wp/v1/related-posts/${content.value.id}`);
const toggleRelatedPostsVisibility = () => {
    relatedPostsVisible.value = !relatedPostsVisible.value;

}
// Scroll sẽ gây lỗi cuộn của carousel
// const handleScrollToShowRelated = (e) => {
//     e.preventDefault();
//     const scrollHeight = 300;
//     if (window.scrollY > scrollHeight) {
//         bigRelatedPostsVisible.value = true;
//         return false;
//     } else {
//         bigRelatedPostsVisible.value = false;
//         return false;
//     }
// }

// nextTick(() => {
//     window.addEventListener('scroll', handleScrollToShowRelated);
// })
// onBeforeUnmount(() => {
//     window.removeEventListener('scroll',(e) => {
//         e.preventDefault();
//     });
// })
useSeoMeta({
    title: content.value.title,
    description: content.value.post_content.length !== 0 ? excerpt.value : 'Watching more beauty girls at agirlpic.com',
    ogImage: content.value.image_url.length !== 0 ? content.value.image_url : null,
})

// Test server routes
// const { data } = await useAsyncData(`server-${route.params.article}`, () => $fetch(`/api/${route.params.article}`));
</script>
<style>
.related-posts-wrapper .carousel {
    width: 100%;
}

.fade-enter-from {
    opacity: 0;
}

.fade-leave-to {
    opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>