export default defineNuxtPlugin({
    name: 'navigations',
    enforce: 'pre', // or 'post'
    async setup(nuxtApp) {
        const { data } = await useFetch('/proxy/wp/v1/menu')
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