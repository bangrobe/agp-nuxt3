<template>
    <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <figure>
            <img alt="Office" :src="article?.image_url ? article.image_url : placehoderImg" class="h-48 w-full object-cover" />
        </figure>
        <div class="bg-white p-4 sm:p-6">
            <NuxtLink :to="`/${article.slug}`">
                <h3 class="mt-0.5 text-sm text-gray-900">
                    {{ article.title.substring(0,10) }}...
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