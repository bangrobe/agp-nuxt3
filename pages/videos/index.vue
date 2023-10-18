<template>
  <div>
      <div v-if="!posts_data && isPending">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <SkeletonCard v-for="i in 12" :key="i" />
          </div>
      </div>
      <div v-else>
          <section class="mx-auto">
              <div class="w-full h-[300px] overflow-hidden flex items-center justify-center">
                  <h1 class="text-6xl font-bold"> {{ posts_data.cat_name }}</h1>
              </div>
          </section>
          <main class="md:max-w-screen-xl mx-auto">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <BlogVideoCard v-for="article in posts_data['posts']" :key="article.id" :article="article" />
              </div>
              <div class="text-center mt-8" v-show="page_no < posts_data.max_page">
                  <button @click="fetchMore()"
                      class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                      Load More
                  </button>
              </div>
          </main>
      </div>
  </div>
</template>
<script setup>
const page_size = 12;
const page_no = ref(1);
const route = useRoute();
const isPending= ref(false);
const posts_data = reactive({
  posts: [],
  cat_name: '',
  num_posts: 0,
  page_no: 1,
  max_page: 1,
})


const fetchData = async () => {
  isPending.value = true;
  const { data: articles} = await useFetchApi(`wp/v1/latest-posts?page_size=${page_size}&page_no=${page_no.value}&cat_slug=videos`);
  if (articles.value && posts_data.posts.length === 0) {
      Object.assign(posts_data, articles.value);
      posts_data.max_page = Math.ceil(articles.value.num_posts / page_size);
      isPending.value = false;
      return;

  }
  if (posts_data.posts.length > 0) {
      posts_data.posts.push(...articles.value.posts);
      isPending.value = false;
      return;
  }
 
}

fetchData();
// Dung reactive
const fetchMore = () => {
  if (page_no.value < posts_data.max_page) {
      page_no.value++;
      fetchData();
      return;
  }
  return false;
}

</script>