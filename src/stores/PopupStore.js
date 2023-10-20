import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePopupStore = defineStore('popupStore', () => {
    const items = ref([
        {
            id: 0,
            title: 'Преимущества Tele2',
            isActive: true,
            link: '/advantages',
        },
        {
            id: 1,
            title: 'Тарифы',
            isActive: false,
            link: '/rates',
        },
        {
            id: 2,
            title: 'Акции и спецпредложения',
            isActive: false,
            link: '/promotions',
        },
        {
            id: 3,
            title: 'Промотариф Tele2',
            isActive: false,
            link: '/',
        },
        {
            id: 4,
            title: 'Технология eSIM',
            isActive: false,
            link: '/',
        },
        {
            id: 5,
            title: 'Подключение нового абонента',
            isActive: false,
            link: '/',
        },
    ]);

    const isOpen = ref(false);

    function tooglePopup() {
        isOpen.value = !isOpen.value;
    }
    function setIsActiveItem(itemId) {
        items.value.map((item) => (item.isActive = false));
        const selectedItem = items.value.find((item) => item.id === itemId);
        selectedItem.isActive = true;

        isOpen.value = false;
    }

    return { items, isOpen, tooglePopup, setIsActiveItem };
});
