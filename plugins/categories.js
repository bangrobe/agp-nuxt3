export default defineNuxtPlugin({
    name: 'categories',

    async setup(nuxtApp) {
        const { data } = await useFetch('/proxy/wp/v1/categories')
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