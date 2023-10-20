import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLocationStore = defineStore('locationStore', () => {
    const locationUser = ref('Москва и область');

    return { locationUser };
});
