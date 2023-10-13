<template>
    <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <NuxtLink :to="`/${article.slug}`">
            <img :alt="article.slug" :src="article?.image_url ? article.image_url : placehoderImg" class="h-96 w-full object-cover" />
            <!-- <img src="~/assets/img/placeholder.jpg" alt="Discover Nuxt 3" /> -->
        </NuxtLink>
        <div class="bg-white p-4 sm:p-6">
            <NuxtLink :to="`/${article.slug}`">
                <h3 class="mt-0.5 text-lg text-gray-900">
                    {{ article.title }}
                </h3>
            </NuxtLink>
        </div>
    </article>
</template>
<script setup>
import placehoderImg from '~/assets/img/placeholder.jpg';
defineProps({
    article: {
        type: Object,
        required: true
    }
})
</script>