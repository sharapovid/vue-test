<script setup>
import { usePopupStore } from '../../stores/PopupStore';
import MyItem from '../MyItem.vue';
import MyLocation from '../MyLocation.vue';

const popupStore = usePopupStore();
</script>

<template>
    <header :class="popupStore.isOpen ? 'header-content active' : 'header-content'">
        <div class="container">
            <MyItem v-for="item of popupStore.items" :item="item" />

            <MyLocation class="item-location" />
        </div>
        <div class="header-content__border"></div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    width: 100%;
}
.header-content {
    height: 47px;
    padding: 0px 11.25%;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    position: relative;
}
.header-content__border {
    position: absolute;
    bottom: 0;
    height: 1px;
    background: #d3d9df;
    width: calc(100% - 22.5%);
}
.container {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
}

/* location */
.item-location {
    display: none;
}

@media (max-width: 1220px) {
    .header-content {
        padding: 0;
        display: flex;
        position: fixed;
        left: 100%;
        width: 100%;
        height: 100%;
        background-color: #fff;
        z-index: 100;
        transition: 0.3s;
    }
    .header-content.active {
        left: 0;
    }
    .header-content .container {
        padding: 0 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        width: 100%;
        height: 100%;
        overflow: auto;
    }
    .header-content .container > .item {
        width: 100%;
    }
    .header-content .container > .item > .item__title {
        width: 100%;
        display: flex;
        justify-content: start;
        padding: 8px 0;
        font-size: 16px;
        font-weight: 700;
        color: #959597;
    }
    .header-content__border {
        display: none;
    }
    .container {
        flex-wrap: unset;
    }

    /* location */
    .item-location {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 16px 66px 16px 15px;
        position: absolute;
        bottom: 40px;
        background: #f3f5f6;
        color: #959597;
    }
}
</style>
