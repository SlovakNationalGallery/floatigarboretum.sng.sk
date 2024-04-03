import { ref, watch, toRef } from "vue";
import { loadLanguageAsync } from "laravel-vue-i18n";

const lang = ref(localStorage.getItem("language") || "en");

export function useLanguage() {

    function switchLanguage(newLanguage) {
        lang.value = newLanguage;
        localStorage.setItem("language", newLanguage);
        loadLanguageAsync(newLanguage);
    }

    watch(lang, (newVal, oldVal) => {
        if (newVal !== oldVal) {
            console.log(`Language changed from ${oldVal} to ${newVal}`);
        }
    });

    return {
        lang: toRef(lang),
        switchLanguage,
    };
}
