<template>
    <NuxtLink :to="`/category/${categoryInfo?.categorySlug}`" class="text-2xl hover:text-orange-600">
        <h2 class="text-3xl text-left my-4 py-2"> {{ categoryInfo?.categoryData?.cat_name }}</h2>
    </NuxtLink>
</template>
<script setup>
const props = defineProps({
    categoryInfo: {
        type: Object,
        required: true
    }
})
</script>