<template>
    <div class="bg-gradient-hero h-[680px] absolute top-0 left-0 w-full -z-10">
        <img
            src="./assets/ellipse.png"
            class="w-full absolute top-0 h-[225px] md:h-[261px]"
            alt="bg"
        />
    </div>
    <div
        class="container mx-auto px-4 md:px-0 pt-3 md:pt-6 text-blue-darker"
        :class="
            isMenuOpen
                ? 'bg-blue-lighter flex flex-col w-screen h-screen fixed z-50 left-0 top-0'
                : ''
        "
    >
        <div
            class="px-6 pt-5 pb-4 flex justify-between items-center container mx-auto bg-blue-lighter/60 rounded-full"
        >
            <div class="flex">
                <router-link to="/" class="font-display text-xl md:text-2xl">
                    Floating arboretum
                </router-link>
                <nav class="hidden md:flex ml-8 space-x-6">
                    <router-link to="/about" class="text-lg group inline-block">
                        {{ $t("About the project") }}
                        <span
                            class="block group-hover:opacity-40 transition h-px bg-blue-darker -mt-px"
                            :class="($route.path === '/about') ? 'opacity-40' : 'opacity-0'"
                        ></span>
                    </router-link>
                    <router-link to="/for-visitors" class="text-lg group inline-block">
                        {{ $t("For visitors") }}
                        <span
                            class="block group-hover:opacity-40 transition h-px bg-blue-darker -mt-px"
                            :class="($route.path === '/for-visitors') ? 'opacity-40' : 'opacity-0'"
                        ></span>
                    </router-link>
                </nav>
            </div>
            <div>
                <button @click="switchLanguage('sk')" class="md:text-lg group">
                    <span class="hidden md:inline">Slovenčina</span>
                    <span class="md:hidden">SK</span>
                    <span
                        class="block group-hover:opacity-40 transition h-px bg-blue-darker -mt-px"
                        :class="lang === 'sk' ? 'opacity-40' : 'opacity-0'"
                    ></span>
                </button>
                /
                <button @click="switchLanguage('en')" class="text-lg group">
                    <span class="hidden md:inline">English</span>
                    <span class="md:hidden">EN</span>

                    <span
                        class="block group-hover:opacity-40 transition h-px bg-blue-darker -mt-px"
                        :class="lang === 'en' ? 'opacity-40' : 'opacity-0'"
                    ></span>
                </button>
                <button @click="toggleMenu" class="md:hidden ml-4">
                    <svg
                        class="w-6 h-auto fill-none stroke-blue-darker"
                        viewBox="0 0 24 17"
                        v-if="!isMenuOpen"
                    >
                        <path d="M0.5 0.5H24" />
                        <path d="M0.5 8.5H24" />
                        <path d="M0.5 16.5H24" />
                    </svg>
                    <svg
                        v-else
                        class="w-6 h-auto fill-none stroke-blue-darker"
                        viewBox="0 0 24 19"
                    >
                        <path d="M3.94141 18L20.5584 1.38299" />
                        <path d="M3.94141 1L20.5584 17.617" />
                    </svg>
                </button>
            </div>
        </div>
        <nav
            class="mt-14 ml-8 space-y-6 text-3xl"
            :class="isMenuOpen ? 'flex flex-col' : 'hidden'"
        >
            <router-link to="/about" @click="toggleMenu()">
                <span v-if="$route.path === '/about'" class="bg-blue-darker/30 h-px w-5 mr-0.5 align-middle inline-block"></span>
                {{ $t("About the project") }}
            </router-link>
            <router-link to="/for-visitors" @click="toggleMenu()">
                <span v-if="$route.path === '/for-visitors'" class="bg-blue-darker/30 h-px w-5 mr-0.5 align-middle inline-block"></span>
                {{ $t("For visitors") }}
            </router-link>
        </nav>
    </div>
    <router-view></router-view>
    <footer
        class="text-blue-lightest container mx-auto p-6 md:flex md:justify-between"
    >
        <div class="">
            <div class="pb-6">
                <router-link to="/about" class="group inline-block pr-4">
                    {{ $t("About the project") }}
                    <span
                        class="block opacity-40 group-hover:opacity-0 transition h-px bg-blue-lightest -mt-px"
                    ></span>
                </router-link>
                <router-link to="/for-visitors" class="group inline-block pr-4">
                    {{ $t("For visitors") }}
                    <span
                        class="block opacity-40 group-hover:opacity-0 transition h-px bg-blue-lightest -mt-px"
                    ></span>
                </router-link>

            </div>
            <div class="pb-6">© 2024 lab.SNG</div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from "vue";
import { useLanguage } from "./composables/language"
const { lang, switchLanguage } = useLanguage();
const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.bg-gradient-hero {
    background: linear-gradient(
        180deg,
        #90b5dc 0%,
        #90b5dc 52.78%,
        #608db5 53.5%,
        #4b759a 100%
    );
}
</style>
