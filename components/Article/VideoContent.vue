import { UCard } from '../../.nuxt/components';
<template>
    <div class="article-content">
        <div class="top-article my-4 py-4">
            <h1 class="text-center text-5xl my-4">
                {{ content.title }}
            </h1>
        </div>
        <div class="content-article mx-auto flex justify-center md:max-w-screen-md">
            <UTabs :items="tabsData" class="w-full">
                <template #item="{ item }">
                    <UCard>
                        <ElementIFrame :src="item.url" />
                    </UCard>
                </template>
            </UTabs>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    content: {
        type: Object,
        required: true
    }
})

const tabsData = [{
    key: 'source_one',
    label: 'Source #1',
    url: props.content?.custom_fields?.source_one
},
{
    key: 'source_two',
    label: 'Source #2',
    url: props.content?.custom_fields?.source_two
},
]

</script>