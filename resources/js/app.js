import "./bootstrap";

import { createApp } from "vue";
import { i18nVue } from "laravel-vue-i18n";

import App from "./App.vue";

const app = createApp(App);

app.use(i18nVue, {
    resolve: async lang => {
        const langs = import.meta.glob('../../lang/*.json');
        return await langs[`../../lang/${lang}.json`]();
    }
})

app.mount("#app");
