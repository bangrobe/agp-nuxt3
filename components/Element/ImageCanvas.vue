<template>
    <div class="images" ref="elImages">
        <div v-if="!images">
            <USkeleton class="h-4 w-full" v-for="i in 6" :key="i" />
        </div>
        <div v-for="image in data" :key="image" v-else>
            <NuxtImg :src="image" class="article-image" loading="lazy"/>
            <!-- <img :src="image" class="article-image" loading="lazy"> -->
        </div>
        <button ref="target">Load More</button>
    </div>
</template>
<script setup>
const elImages = ref(null);
const target = ref(null);
const props = defineProps({
    images: {
        type: Array,
        required: true
    }
})

const { isActive, pause, resume } = useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    loadMorePosts();
  },
  { elImages },
)
const data = ref(props.images.slice(0, 5));
const loadMorePosts = () => {
    if (data.value.length >= props.images.length) {
        target.value.style.display = 'none';
        return;
    }
    let newPosts = props.images.slice(data.value.length, data.value.length + 5);
    data.value.push(...newPosts)
}
</script>
<style>
.article-image {
    margin: 8px 0;
    width: 100%;
}
</style>