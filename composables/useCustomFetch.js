const useCustomFetch = async () => {
    const config = useRuntimeConfig();
    return  $fetch.create({ baseURL: config.public.apiUrl });
}

export default useCustomFetch;