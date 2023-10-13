import { defineStore } from 'pinia';
export const useSidebarStore = defineStore('sidebarStore', () => {
  //State
    const isOpen = ref(false)
  //Actions
    function toggle() {
      isOpen.value = !isOpen.value;
    }
  
    return { isOpen, toggle }
  })