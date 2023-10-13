<template>
    <section class="md:max-w-screen-xl">
        <ElementSectionTitle :categoryInfo="category" v-if="category"/>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:max-w-screen-xl mx-auto">
            <BlogCard v-for="article in category?.categoryData?.posts" :key="article.id" :article="article" />
        </div>
    </section>
</template>
<script setup>
const props = defineProps({
    category: {
        type: Object,
    }
})

</script>