<template>
    <transition name="fade">
        <div id="pagetop" class="fixed right-[10px] bottom-0 cursor-pointer" v-show="scY > 300" @click="toTop">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4a5568"
                stroke-width="1" stroke-linecap="square" stroke-linejoin="arcs">
                <path d="M18 15l-6-6-6 6" />
            </svg>
        </div>
    </transition>
</template>
<script setup>
const scTimer = ref(0);
const scY = ref(0);
const handleScroll = () => {
    if (scTimer.value) return;
    scTimer.value = setTimeout(() => {
        scY.value = window.scrollY;
        clearTimeout(scTimer.value);
        scTimer.value = 0;

    }, 100);
}
const toTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
})


</script>