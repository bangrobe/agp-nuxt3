<template>
    <main class="md:max-w-screen-xl mx-auto">
        <SkeletonArticle v-if="!content && pending" />
        <ArticleVideoContent v-else :content="content" />
        <transition name="fade">
                <div v-if="related_posts && related_posts?.length > 0"
                    class="fixed md:bottom-[50px] transition-all ease-in-out duration-1000 w-[12rem] left-[50px]"
                    :class="[bigRelatedPostsVisible ? 'block opacity-100' : 'hidden opacity-0', relatedPostsVisible ? 'bottom-[20px]' : 'bottom-[-250px]']">
                    <div class="related-posts-wrapper text-center">
                        <span class="bg-blue-500 px-4 rounded-md py-1 text-white cursor-pointer"
                            @click="toggleRelatedPostsVisibility">Related Posts</span>
                        <ArticleCarousel :related_posts="related_posts" type="video"/>
                    </div>
                </div>
            </transition>
    </main>
</template>
<script setup>
const route = useRoute();
const excerpt = ref('');
const config = useRuntimeConfig();
// const related_posts = ref();
const relatedPostsVisible = ref(false);
const bigRelatedPostsVisible = ref(true);
const { data:content, error, pending } = await useAsyncData(`${route.params.slug}`, () => $fetch(`${config.public.apiUrl}/wp/v1/post-details-by-slug?slug=${route.params.slug}`));
const { data: related_posts } = await useFetch(`${config.public.apiUrl}/wp/v1/related-posts/${content.value.id}`);

const toggleRelatedPostsVisibility = () => {
    relatedPostsVisible.value = !relatedPostsVisible.value;

}
useSeoMeta({
    title: content.value.title,
    description: content.value.post_content.length !== 0 ? excerpt.value : 'Watching more beauty girls at agirlpic.com',
    ogImage: content.value.image_url.length !== 0 ? content.value.image_url : null,
})
</script>