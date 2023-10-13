<template>
    <iframe :src="url" FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO allowfullscreen
        class="w-full h-[400px]"></iframe>
</template>
<script setup>
const props = defineProps({
    url: {
        type: String,
    }
})
</script>