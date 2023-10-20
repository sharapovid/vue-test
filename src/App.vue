<script setup>
import { RouterView } from 'vue-router';
import MyHeader from './components/headers/MyHeader.vue';
import HeaderContent from './components/headers/HeaderContent.vue';
</script>

<template>
    <MyHeader />
    <HeaderContent />

    <RouterView />
</template>

<style scoped></style>
