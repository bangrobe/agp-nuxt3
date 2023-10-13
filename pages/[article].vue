<template>
    <div>
        <main class="md:max-w-screen-xl mx-auto w-full">
            <SkeletonArticle v-if="!content" />
            <ArticleContent v-else :content="content" />
            <transition name="fade">
                <div v-if="related_posts?.length > 0"
                    class="fixed md:bottom-[50px] transition-all ease-in-out duration-1000 w-[12rem] left-[50px]"
                    :class="[bigRelatedPostsVisible ? 'block opacity-100' : 'hidden opacity-0', relatedPostsVisible ? 'bottom-[20px]' : 'bottom-[-250px]']">
                    <div class="related-posts-wrapper text-center">
                        <span class="bg-blue-500 px-4 rounded-md py-1 text-white cursor-pointer"
                            @click="toggleRelatedPostsVisibility">Related Posts</span>
                        <LazyArticleCarousel :related_posts="related_posts" />
                    </div>
                </div>
            </transition>
        </main>
    </div>
</template>
<script setup>
const route = useRoute();
const excerpt = ref('');
const related_posts = ref();
const relatedPostsVisible = ref(false);
const bigRelatedPostsVisible = ref(false);
const { data: content } = await useFetchApi(`wp/v1/post-details-by-slug?slug=${route.params.article}`);
if (content.value.post_content?.length !== 0) {
    excerpt.value = removeTags(content.value?.post_content).substring(0, 150).trim();
}
if (content.value?.id) {
    const { data } = await useFetchApi(`wp/v1/related-posts/${content.value.id}`);
    if (data.value.length > 0) {
        related_posts.value = data.value;
    }
}
const toggleRelatedPostsVisibility = () => {
    relatedPostsVisible.value = !relatedPostsVisible.value;

}
const handleScrollToShowRelated = () => {
    const scrollHeight = 300;
    if (window.scrollY > scrollHeight) {
        bigRelatedPostsVisible.value = true;
    } else {
        bigRelatedPostsVisible.value = false;
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScrollToShowRelated);
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScrollToShowRelated);
})
useSeoMeta({
    title: content.value.title,
    description: content.value.post_content.length !== 0 ? excerpt.value : 'Watching more beauty girls at agirlpic.com',
    ogImage: content.value.image_url.length !== 0 ? content.value.image_url : null,
})
</script>
<style scoped>
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