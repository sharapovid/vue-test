<script setup>
import { useNotificationStore } from '../../stores/NotificationStore';
import { usePopupStore } from '../../stores/PopupStore';
import MyLocation from '../MyLocation.vue';

import IconTele2 from '../icons/IconTele2.vue';
import IconInboxIndicator from '../icons/IconInboxIndicator.vue';
import IconNotificationBell from '../icons/IconNotificationBell.vue';

const notificationStore = useNotificationStore();
const popupStore = usePopupStore();
</script>

<template>
    <header class="header">
        <IconTele2 />

        <div class="menu">
            <MyLocation class="menu__location" />

            <div v-if="!popupStore.isOpen" class="menu__notification-bell" @click="notificationStore.setIsReadingTrue">
                <div
                    class="menu__notification-bell__bell"
                    :style="{
                        animation: notificationStore.hasNotifications && !notificationStore.isReading && '',
                    }"
                >
                    <IconNotificationBell />
                </div>
                <div
                    class="menu__notification-bell__indicator"
                    :style="{
                        display: notificationStore.hasNotifications && !notificationStore.isReading ? '' : 'none',
                    }"
                >
                    <IconInboxIndicator />
                </div>
            </div>

            <div @click="popupStore.tooglePopup" :class="popupStore.isOpen ? 'menu__burger active' : 'menu__burger'">
                <span class="menu__burger__bar"></span>
                <span class="menu__burger__bar"></span>
                <span class="menu__burger__bar"></span>
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    width: 100%;
}
.header {
    height: 40px;
    padding: 9px 11.25%;
    justify-content: space-between;
    align-items: center;
    background: #1f2229;
}
.menu {
    display: inline-flex;
}

/* location */
.menu__location {
    display: inline-flex;
    align-items: center;
    margin-right: 32px;
}

/* notification-bell */
.menu__notification-bell {
    display: inline-flex;
    position: relative;
    cursor: pointer;
}
.menu__notification-bell__bell {
    display: flex;
    align-items: center;
    animation: menu__notification-bell__bell 1s 1s both infinite;
}
@keyframes menu__notification-bell__bell {
    0% {
        transform: rotate(0);
    }
    10% {
        transform: rotate(30deg);
    }
    20% {
        transform: rotate(0);
    }
    80% {
        transform: rotate(0);
    }
    90% {
        transform: rotate(-30deg);
    }
    100% {
        transform: rotate(0);
    }
}
.menu__notification-bell__indicator {
    position: absolute;
    margin-top: -5px;
    margin-left: 12px;
}

/* burger */
.menu__burger {
    display: none;
    cursor: pointer;
}
.menu__burger__bar {
    display: block;
    width: 30px;
    height: 3px;
    margin: 5px auto;
    background-color: #fff;
    transition: 0.2s;
}

.menu__burger.active .menu__burger__bar:nth-child(2) {
    opacity: 0;
}
.menu__burger.active .menu__burger__bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}
.menu__burger.active .menu__burger__bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

@media (max-width: 1220px) {
    .header {
        padding: 9px 18px;
    }
    .menu__burger {
        display: block;
        justify-content: center;
        align-items: center;
    }
    .menu__location {
        display: none;
    }
    .menu__notification-bell {
        margin-right: 18px;
    }
}
</style>
