<template>
    <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <NuxtLink :to="`/videos/${article.slug}`">
            <img alt="Office" v-if="article?.image_url" :src="article?.image_url" class="h-56 w-full object-cover" />
            <div class="bg-gray-100 h-56 w-full" v-else></div>
        </NuxtLink>
        <div class="bg-white p-4 sm:p-6">
            <NuxtLink :to="`/videos/${article.slug}`">
                <h3 class="mt-0.5 text-lg text-gray-900">
                    {{ article.title }}
                </h3>
            </NuxtLink>
        </div>
    </article>
</template>
<script setup>
const props = defineProps({
    article: {
        type: Object,
        required: true
    }
})
</script>