<template>
    <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <NuxtLink :to="`/${article.slug}`">
            <NuxtImg quality="90"
            v-if="article?.image_url" 
            :alt="article.slug" 
            width="500"
            :src="imageAliasUrl"
            format="webp" 
            class="h-96 w-full object-cover" />
            <img :src="placehoderImg" :alt="article.slug" v-else/>
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
const props = defineProps({
    article: {
        type: Object,
        required: true
    }
})
const imageAliasUrl = computed(()=> {
    if(props.article?.image_url) {
        return replaceImageUrlByAlias(props.article?.image_url);
    }
})

</script>