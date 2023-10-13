<template>
    <Carousel :autoplay="2000" :wrap-around="true">
        <Slide v-for="post in related_posts" :key="post.id">
            <div class="carousel__item">
                <BlogSmallCard :article="post" />
            </div>
        </Slide>
    </Carousel>
</template>
  
<script setup>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
const props = defineProps({
    related_posts: {
        type: Array,
        required: true
    }
})
</script>
  
<style>
.carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}
</style>