import { ref, watch, toRef, onMounted } from "vue";
import { getActiveLanguage, loadLanguageAsync } from "laravel-vue-i18n";

const lang = ref(localStorage.getItem("language") || "sk");

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

    onMounted(() => {
        // If the user comes from a QR code, switch to English language automatically (if language is not set yet)
        const urlParams = new URLSearchParams(window.location.search);
        if ((urlParams.has('utm_source') && urlParams.get('utm_source') === 'qr') && !localStorage.getItem("language")) {
            lang.value = 'en';
            localStorage.setItem("language", lang.value);
        }

        if (lang.value !== getActiveLanguage()) {
            loadLanguageAsync(lang.value);
        }
    });

    return {
        lang: toRef(lang),
        switchLanguage,
    };
}
