<template>
    <div>
        <Header />
        <div class="px-2 md:px-0 flex flex-col w-full gap-4 justify-center md:my-8 my-4">
            <NuxtPage class="flex-1" />
        </div>
        <HeaderSlideover />
        <ElementScrollToTop />
        <Footer />
        <NuxtLoadingIndicator/>
    </div>
</template>