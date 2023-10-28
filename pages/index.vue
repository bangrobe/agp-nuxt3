<template>
    <div class="mx-auto">
        <Suspense>
            <HomeCategorySection :category="category" v-for="category in data.response" :key="category.categorySlug" />
            <template #fallback>
                <div class="grid grid-cols-1 md:grid-cols-3">
                    <SkeletonCard v-for="i in 24" :key="i" />
                </div>
            </template>
        </Suspense>
    </div>
</template>
<script setup>
const config = useRuntimeConfig();
const { $categories } = useNuxtApp();
const { data, error, pending, refresh } = await useAsyncData('latest-categories', async () => {
    const response = await Promise.all($categories.map(async (category) => {
        const categoryData = await $fetch(`${config.public.apiUrl}/wp/v1/latest-posts?cat_slug=${category.slug}&page_size=6`);
        const categorySlug = category.slug;
        return {
            categoryData: categoryData,
            categorySlug: categorySlug
        }
    }));
    return {
        response,
    }
})
</script>