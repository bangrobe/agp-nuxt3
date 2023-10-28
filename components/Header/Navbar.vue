<template>
    <div class="md:max-w-screen-xl mx-auto">
        <div class="bg-white">
            <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 sm:px-6">
                <NuxtLink class="block" to="/">
                    <span class="sr-only">Home</span>
                    <ElementLogo class="h-[100px] w-full"/>
                </NuxtLink>
                <div v-if="$navigations?.length === 0"></div>
                <div class="flex flex-1 items-center justify-end md:justify-between" v-else>
                    <nav aria-label="Global" class="hidden md:block">
                        <ul class="flex items-center gap-6 text-sm">
                            <li v-for="item in $navigations" :key="item.id" class="px-2" :class="item.items ? 'group relative': ''">
                                <NuxtLink :to="`${returnPrefix(item)}/${item.route}`" class="text-gray-500 transition hover:text-gray-500/75">
                                    {{ item.label }}
                                </NuxtLink>
                                <ul v-if="item.items" class="absolute top-[20px] left-[-10px] hidden group-hover:flex flex-col w-[300px] bg-white z-10">
                                    <li v-for="subItem in item.items" :key="subItem.id" class="py-2 px-4">
                                        <NuxtLink :to="{path: `/category/${subItem.route}`}"
                                            class="text-gray-500 transition hover:text-gray-500/75">
                                            {{ subItem.label }}
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </nav>

                    <div class="flex items-center gap-4">
                        <button
                            @click="toggle()"
                            class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                            <span class="sr-only">Toggle menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
// Pinia
import { useSidebarStore } from '~/stores/sidebar';
const sidebarStore = useSidebarStore();
const { toggle, isOpen } = sidebarStore;
const returnPrefix = (item)=> {
    if( item.route === 'videos'){
        return '';
    }
    if(item.object === 'category') {
        return '/category';
    }
    return '';
}
const { $navigations } = useNuxtApp();
</script>
<style scoped>
/* Add your CSS styles for the navbar here */
</style>