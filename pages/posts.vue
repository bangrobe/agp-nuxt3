<template>
    <div class="md:max-w-screen-xl mx-auto">
        <h2 class="text-3xl text-left my-4 py-2">Latest Articles</h2>
        <div class="grid md:grid-cols-3 grid-cols-1 gap-4" v-if="!articles">
            <SkeletonCard v-for="i in 6" :key="i" />
        </div>
        <div class="grid md:grid-cols-3 grid-cols-1 gap-4" v-else-if="articles?.posts && articles?.posts.length > 0">
            <BlogCard v-for="article in articles['posts']" :key="article.id" :article="article" />
        </div>
        <div class="text-left my-8" v-else>
            <p>Nothing found.</p>
        </div>
        <div class="text-center mt-8" v-if="articles && (page_no < articles?.max_page)">
            <button @click="fetchMore()"
                class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                Load More
            </button>
        </div>
        <h2 class="text-3xl text-left my-4 py-2"> Latest Videos</h2>
        <div class="grid md:grid-cols-3 grid-cols-1 gap-4" v-if="videos && videos?.posts.length > 0">
            <BlogVideoCard v-for="videoArticle in videos.posts" :key="videoArticle.id" :article="videoArticle" />
        </div>
    </div>
</template>
<script setup>
const config = useRuntimeConfig();
const page_no = ref(1);
const { data: articles, refresh } = useAsyncData('latest-articles', async () => {
    // const { data:response } = await useFetchApi(`wp/v1/latest-posts?page_size=12&exclude_cats=46`);
    const response = await $fetch(`${config.public.apiUrl}/wp/v1/latest-posts?page_size=12&page_no=${page_no.value}&exclude_cats=46`);
    if (response) {
        return {
            num_posts: response.num_posts,
            page_no: response.page_no,
            max_page: Math.ceil(response.num_posts / 12),
            posts: articles?.value?.posts ? [...articles.value.posts, ...response.posts] : response.posts
        }
    }
});
const fetchMore = () => {
    if (page_no.value < articles.value.max_page) {
        page_no.value++;
        refresh();
    }
}
const { data: videos } = await useAsyncData('latest-videos', async () => {
    const response = await $fetch(`${config.public.apiUrl}/wp/v1/latest-posts?cat_slug=videos`);
    return response;
})
</script>