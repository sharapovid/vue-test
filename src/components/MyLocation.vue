<script setup>
import { useLocationStore } from '../stores/LocationStore';
import IconLocation from './icons/IconLocation.vue';

const locationStore = useLocationStore();
</script>

<template>
    <div>
        <div class="menu__location__icon"><IconLocation /></div>
        <div class="menu__location__title">{{ locationStore.locationUser }}</div>
    </div>
</template>

<style scoped>
.menu__location__icon {
    margin-right: 9px;
    display: flex;
    align-items: center;
}
.menu__location__title {
    color: #7c8792;
}
</style>
