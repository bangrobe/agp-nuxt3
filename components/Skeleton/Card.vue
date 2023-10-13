<template>
  <div class="flex items-center flex-col space-x-4 h-48 w-full">
    <USkeleton class="h-full w-full" :ui="{ rounded: 'rounded-full' }" />
    <div class="space-y-2">
      <USkeleton class="h-4 w-full" />
      <USkeleton class="h-4 w-full" />
    </div>
  </div>
</template>