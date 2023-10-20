<script setup>
import { RouterLink } from 'vue-router';
import { usePopupStore } from '../stores/PopupStore';

const popupStore = usePopupStore();
const props = defineProps({
    item: {
        type: Object,
        required: true,
        default: () => {},
    },
});
</script>

<template>
    <RouterLink :to="item.link">
        <div class="item" @click="popupStore.setIsActiveItem(item.id)">
            <div :class="item.isActive ? 'item__title active' : 'item__title'">{{ item.title }}</div>
            <div :class="item.isActive ? 'item__border active' : 'item__border'"></div>
        </div>
    </RouterLink>
</template>

<style scoped>
a {
    text-decoration: none;
    display: contents;
}
a,
.item {
    height: 100%;
    margin: 0 9px;
    display: flex;
    position: relative;
    white-space: nowrap;
    min-width: 50px;
    font-size: 14px;
    cursor: pointer;
}
.item:first-child {
    margin-left: 0;
}
.item:last-child {
    margin-right: 0;
}
.item.active {
    min-width: 50px;
    flex-direction: row;
    white-space: nowrap;
}
.item__title {
    display: flex;
    align-items: center;
    color: #7c8792;
}
.item__title.active {
    color: #1f2229;
}
.item__border {
    height: 0px;
}
.item__border.active {
    align-self: stretch;
    height: 2px;
    background: #1f2229;
    bottom: 0;
    position: absolute;
    width: 100%;
}

@media (max-width: 1220px) {
    .item > .item__title {
        width: 100%;
        display: flex;
        justify-content: start;
        padding: 8px 0;
        font-size: 16px;
        font-weight: 700;
        color: #959597;
    }

    a,
    .item {
        width: 100%;
        height: unset;
        white-space: unset;
        margin: unset;
    }
    .item__border {
        align-self: stretch;
        height: 1px;
        background: #ededed;
        bottom: 0;
        position: absolute;
        width: 100%;
    }
}
</style>
