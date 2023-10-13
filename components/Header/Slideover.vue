<template>
    <div>
        <USlideover v-model="isOpen" prevent-close>
            <!-- Content -->
            <div class="mx-auto flex flex-col items-center gap-8 sm:px-6">
                <NuxtLink class="block" to="/">
                    <span class="sr-only">Home</span>
                    <ElementLogo class="h-[100px] w-full"/>
                </NuxtLink>
                <div v-if="$navigations.length === 0"></div>
                <div class="flex flex-1 items-center justify-end md:justify-between" v-else>
                    <nav aria-label="Global">
                        <ul class="flex flex-col gap-6 text-md">
                            <li v-for="item in $navigations" :key="item.id" class="px-2" :class="item.items ? 'group relative': ''">
                                <NuxtLink :to="`${returnPrefix(item)}/${item.route}`" class="text-gray-500 transition hover:text-gray-500/75">
                                    {{ item.label }}
                                </NuxtLink>
                                <ul v-if="item.items" class="flex flex-col w-[300px] bg-white z-10">
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

                </div>
            </div>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="absolute top-[20px] right-[20px]" @click="toggle()" />
        </USlideover>
    </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useSidebarStore } from '~/stores/sidebar';
const sidebarStore = useSidebarStore();
const { isOpen } = storeToRefs(sidebarStore);
const { toggle } = sidebarStore;
const route = useRoute();
watch(() => route.path, () => {
    isOpen.value = false
});
const returnPrefix = (item)=> {
    if( item.route === 'videos'){
        return '';
    }
    if(item.object === 'category') {
        return '/category';
    }
    return '';
}
</script>