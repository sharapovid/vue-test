import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useNotificationStore = defineStore('notificationStore', () => {
    const notifications = ref([{ id: 1, text: 'Текст' }]);
    const isReading = ref(false);

    const hasNotifications = computed(() => notifications.length !== 0);

    function setIsReadingTrue() {
        isReading.value = true;
    }

    return { notifications, isReading, hasNotifications, setIsReadingTrue };
});
// сделать код снизу отдельным компонентом

/* <div class="menu__location__icon"><IconLocation /></div>
<div class="menu__location__title">Москва и область</div> */

// сделать отдельные компоненты header и headerPopup

// сделать отдельные компоненты items
// <div class="item">
//     <div class="item__title">Технология eSIM</div>
//     <div class="item__border"></div>
// </div>
