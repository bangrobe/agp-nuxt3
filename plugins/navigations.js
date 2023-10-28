export default defineNuxtPlugin({
    name: 'navigations',
    async setup(nuxtApp) {
        const config = useRuntimeConfig();
        const { data } = await useFetch(`${config.public.apiUrl}/wp/v1/menu`)
        return {
            provide: {
                navigations: data.value
            }
        }
    },
    hooks: {
        'app:created'() {
            const nuxtApp = useNuxtApp()
        }
    }

})