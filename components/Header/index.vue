<template>
    <header class="w-full bg-white shadow-sm sticky top-0">
        <HeaderNavbar />
    </header>
</template>
<script setup>
const isSlideoverOpen = ref(false)
provide('isSlideoverOpen', isSlideoverOpen)
</script>