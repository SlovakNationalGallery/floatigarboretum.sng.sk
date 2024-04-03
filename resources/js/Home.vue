<template>
    <div class="mx-auto container px-5 pt-5 md:pt-9">
        <div class="md:flex md:flex-row-reverse md:items-end">
            <a href="https://www.labiennale.org/it/arte/2024" target="_blank" class="contents group">
                <img
                    src="./assets/logo-bienale.svg"
                    class="w-28 md:w-40 ml-auto group-hover:opacity-85 transition-opacity"
                />
            </a>
            <h1
                class="pt-2 font-display text-xl md:text-2xl md:w-[30rem] text-blue blur-[0.5px] opacity-90 tracking-wide"
            >
                {{ $t("Slovak National Participation 60th International Art Exhibition of La Biennale di Venezia") }}
            </h1>
        </div>
    </div>
    <div
        class="w-screen overflow-x-auto overflow-y-visible h-[600px] z-10 absolute top-52 scrollbar-hide"
        ref="arboretumWrapper"
    >
        <div class="h-96 w-[1440px] mx-auto relative z-10" ref="arboretumContainer">
            <img
                src="./assets/trees/tree-05.png"
                srcset="./assets/trees/tree-05.png 1x, ./assets/trees/tree-05@2x.png 2x"
                class="absolute top-[176px] left-[49px] drop-shadow-lg animate-float2"
            />
            <img
                src="./assets/trees/tree-10.png"
                srcset="./assets/trees/tree-10.png 1x, ./assets/trees/tree-10@2x.png 2x"
                class="absolute top-[236px] left-[220px] drop-shadow-lg animate-float3"
            />
            <img
                src="./assets/trees/tree-06.png"
                srcset="./assets/trees/tree-06.png 1x, ./assets/trees/tree-06@2x.png 2x"
                class="absolute top-[259px] left-[295px] drop-shadow-lg animate-float1"
            />
            <img
                src="./assets/trees/tree-01.png"
                srcset="./assets/trees/tree-01.png 1x, ./assets/trees/tree-01@2x.png 2x"
                class="absolute top-[167px] left-[396px] drop-shadow-lg animate-float2"
            />
            <img
                src="./assets/trees/tree-08.png"
                srcset="./assets/trees/tree-08.png 1x, ./assets/trees/tree-08@2x.png 2x"
                class="absolute top-[10px] left-[517px] drop-shadow-lg animate-float3"
            />
            <img
                src="./assets/trees/tree-04.png"
                srcset="./assets/trees/tree-04.png 1x, ./assets/trees/tree-04@2x.png 2x"
                class="absolute top-[236px] left-[678px] drop-shadow-lg animate-float3"
            />
            <img
                src="./assets/trees/tree-03.png"
                srcset="./assets/trees/tree-03.png 1x, ./assets/trees/tree-03@2x.png 2x"
                class="absolute top-[177px] left-[821px] drop-shadow-lg animate-float2"
            />
            <img
                src="./assets/trees/tree-02.png"
                srcset="./assets/trees/tree-02.png 1x, ./assets/trees/tree-02@2x.png 2x"
                class="absolute top-[191px] left-[954px] drop-shadow-lg animate-float3"
            />
            <img
                src="./assets/trees/tree-07.png"
                srcset="./assets/trees/tree-07.png 1x, ./assets/trees/tree-07@2x.png 2x"
                class="absolute top-[82px] left-[1106px] drop-shadow-lg animate-float2"
            />
            <img
                src="./assets/trees/tree-09.png"
                srcset="./assets/trees/tree-09.png 1x, ./assets/trees/tree-09@2x.png 2x"
                class="absolute top-[201px] left-[1251px] drop-shadow-lg animate-float3"
            />
        </div>
    </div>
    <div class="h-96">
        <!-- placeholder for arboretum -->
    </div>
    <div class="container mx-auto px-6 py-12 md:flex">
        <article>
            <h2 class="text-lg pb-2 opacity-60">
                {{ $t("About the project") }}
            </h2>
            <p class="pb-6 md:pb-8 text-2xl max-w-[665px] leading-normal">
                {{
                    $t(
                        "Oto Hudec works with an archive/database/file of stories, telling of a collective effort when a united community of activists prevented deforestation and the destruction of trees. He calls for their rescue, as well as for the rescue of other endangered trees in the world."
                    )
                }}
            </p>
            <router-link
                to="/about"
                class="font-display py-3 px-8 text-lg border-white/30 border-2 hover:bg-red hover:border-red transition rounded-[70px]"
            >
                {{ $t("Find out more") }}
            </router-link>
        </article>
        <div class="flex justify-center items-center flex-1 pt-12 md:pt-0">
            <router-link
                to="/for-visitors" class="text-center inline-block max-w-80 py-3 px-8 md:text-2xl bg-red -rotate-12 hover:-rotate-6 transition rounded-[70px]">
                {{ $t("The exhibition starts on the 20th of April") }}
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const arboretumContainer = ref(null);
const arboretumWrapper = ref(null);

onMounted(() => {
    adjustScroll();
    window.addEventListener("resize", adjustScroll);
});

const adjustScroll = () => {
    const useHorizontalScroll = arboretumWrapper.value.offsetWidth < arboretumContainer.value.offsetWidth;
    arboretumWrapper.value.scrollLeft = useHorizontalScroll
        ? (arboretumContainer.value.offsetWidth - arboretumWrapper.value.offsetWidth) / 2
        : 0;
};
</script>
