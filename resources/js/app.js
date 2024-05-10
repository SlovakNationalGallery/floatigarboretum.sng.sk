import "./bootstrap";

import { createApp } from "vue";
import { i18nVue } from "laravel-vue-i18n";
import { createRouter, createWebHistory } from "vue-router";
import VueSplide from '@splidejs/vue-splide';


import Home from "./Home.vue";
import About from "./About.vue";
import Detail from "./Detail.vue";
import Trees from "./Trees.vue";
import ForVisitors from "./ForVisitors.vue";
import Informazioni from "./Informazioni.vue";

import App from "./App.vue";

const app = createApp(App);

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/trees/:id", component: Detail, name: "tree" },
    { path: "/trees", component: Trees },
    { path: "/for-visitors", component: ForVisitors },
    { path: "/informazioni", component: Informazioni },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    }
});

app.use(router);
app.use(i18nVue, {
    resolve: async (lang) => {
        const langs = import.meta.glob("../../lang/*.json");
        return await langs[`../../lang/${lang}.json`]();
    },
});

app.use( VueSplide );

app.mount("#app");
