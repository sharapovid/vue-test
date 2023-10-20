# Vue-test

Тестовое задание на Vue.js.

## 1. Структура

В папке `src`:

-   #### assets:

    Главный `main.css` файл

-   #### components:

    -   headers:
        `MyHeader.vue` - верхний хедер черного цвета;
        `HeaderContent.vue` - хедер с меню

    -   icons:
        Иконки

    -   `MyItem.vue` - компонент для отображения элементов в `HeaderContent.vue`;

    -   `MyLocation` - компонент для отображения локации в хедерах.

-   #### router:

    -   `index.js` - инициализация роутера

-   #### stores:

    Инициализация хранилищ для

    -   `LocationStore` - локации (место хранения локации)
        По умолчанию "Москва и область"
    -   `NotificationStore` - уведомлений (место хранения уведомлений)
        По умолчанию одно уведомление для отображении анимации колокольчка
    -   `PopupStore` - видимости меню в `HeaderContent.vue`

-   #### views:

    Основные страницы;

-   #### `App.vue`:
-   #### `main.js`:

## 2. Мои заметки

-   Анимация колокольчика реализована в компоненте `@/components/headers/MyHeader.vue`, зависит от хранилища `NotificationStore`: если есть уведомления - будет анимация и буллит.

-   Раскрытие и скрытие меню реализовано в компоненте `@/components/headers/HeaderContent.vue`, зависит от хранилища `PopupStore`: если пользователь кликнул по бургеру в хедере `@/components/headers/MyHeader.vue`, то меню раскроется в компоненте `@/components/headers/HeaderContent.vue`.

## 3. Сборка проекта

```sh
npm install
```

### 4. Запуск

```sh
npm run dev
```
