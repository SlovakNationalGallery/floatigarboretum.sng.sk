<template>
    <div class="bg-gradient-hero pt-12">
        <div
            class="px-6 pt-5 pb-4 flex justify-between items-center container mx-auto bg-blue-lighter/60 rounded-[50px]"
        >
            <div>
                <h1 class="font-display text-2xl">
                    {{ $t("floating arboretum") }}
                </h1>
            </div>
            <div>
                <button @click="switchLanguage('sk')" class="text-lg group">
                    <span class="hidden md:inline">Slovenčina</span>
                    <span class="md:hidden">SK</span>
                    <span
                        class="block opacity-0 group-hover:opacity-40 transition h-0.5 bg-blue-darker -mt-0.5"
                        :class="lang === 'sk' ? 'opacity-40' : 'opacity-0'"
                    ></span>
                </button>
                /
                <button @click="switchLanguage('en')" class="text-lg group">
                    <span class="hidden md:inline">English</span>
                    <span class="md:hidden">EN</span>

                    <span
                        class="block opacity-0 group-hover:opacity-40 transition h-0.5 bg-blue-darker -mt-0.5"
                        :class="lang === 'en' ? 'opacity-40' : 'opacity-0'"
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
