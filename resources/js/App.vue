<template>
    <div class="bg-gradient-hero">
        <div class="border-b border-blue-darker/30">
            <div
                class="px-4 pt-6 pb-5 flex justify-between items-center container mx-auto"
            >
                <span class="font-display text-2xl pb-1">{{
                    $t("floating arboretum")
                }}</span>
                <button
                    @click="
                        lang === 'en'
                            ? switchLanguage('sk')
                            : switchLanguage('en')
                    "
                    class="uppercase text-lg group"
                >
                    {{ lang }}
                    <span
                        class="block opacity-0 group-hover:opacity-100 transition h-0.5 bg-blue-darker -mt-0.5"
                    ></span>
                </button>
            </div>
        </div>
        <router-view></router-view>
    </div>
    <footer class="bg-blue-dark text-blue-lightest p-6 flex md:justify-center">
        © 2024 lab.SNG
    </footer>
</template>

<script setup>
import { ref } from "vue";
import { getActiveLanguage, loadLanguageAsync } from "laravel-vue-i18n";

const lang = ref(getActiveLanguage());

const switchLanguage = (locale) => {
    loadLanguageAsync(locale);
    lang.value = locale;
};
</script>

<style scoped>
.bg-gradient-hero {
    background: linear-gradient(
        180deg,
        #90b5dc 0%,
        #90b5dc 52.78%,
        #608db5 53.5%,
        #4a7499 100%
    );
}
</style>
