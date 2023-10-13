<template>
    <iframe 
        width="600" 
        height="480" 
        :src="`https://www.youtube.com/embed/${youtube_id}`">
    </iframe>
</template>
<script setup>
defineProps({
    youtube_id: {
        type: String,
        required: true
    }
})
</script>