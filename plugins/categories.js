export default defineNuxtPlugin({
    name: 'categories',

    async setup(nuxtApp) {
        const config = useRuntimeConfig();
        const { data } = await useFetch(`${config.public.apiUrl}/wp/v1/categories`)
        return {
            provide: {
                categories: data.value
            }
        }
    },
    hooks: {
        'app:created'() {
            const nuxtApp = useNuxtApp()
        }
    }

})