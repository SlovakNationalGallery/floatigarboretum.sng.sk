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
    <ScrollAreaRoot>
        <ScrollAreaViewport>
            <div class="h-96 w-[1440px] relative" ref="arboretumContainer">
                <img
                    src="./assets/trees/tree-05.png"
                    srcset="./assets/trees/tree-05.png 1x, ./assets/trees/tree-05@2x.png 2x"
                    class="absolute top-[76px] left-[49px] drop-shadow-lg hover:cursor-pointer hover:opacity-90 transition hover:drop-shadow-2xl animate-float2 hover:pause"
                />
                <img
                    src="./assets/trees/tree-10.png"
                    srcset="./assets/trees/tree-10.png 1x, ./assets/trees/tree-10@2x.png 2x"
                    class="absolute top-[136px] left-[220px] drop-shadow-lg hover:cursor-pointer hover:opacity-90 transition hover:drop-shadow-2xl animate-float3 hover:pause"
                />
                <img
                    src="./assets/trees/tree-06.png"
                    srcset="./assets/trees/tree-06.png 1x, ./assets/trees/tree-06@2x.png 2x"
                    class="absolute top-[159px] left-[295px] drop-shadow-lg hover:cursor-pointer hover:opacity-90 transition hover:drop-shadow-2xl animate-float1 hover:pause"
                />
                <img
                    src="./assets/trees/tree-01.png"
                    srcset="./assets/trees/tree-01.png 1x, ./assets/trees/tree-01@2x.png 2x"
                    class="absolute top-[67px] left-[396px] drop-shadow-lg hover:cursor-pointer hover:opacity-90 transition hover:drop-shadow-2xl animate-float2 hover:pause"
                />
                <img
                    src="./assets/trees/tree-08.png"
                    srcset="./assets/trees/tree-08.png 1x, ./assets/trees/tree-08@2x.png 2x"
                    class="absolute -top-[90px] left-[517px] drop-shadow-lg hover:cursor-pointer hover:opacity-90 transition hover:drop-shadow-2xl animate-float3 hover:pause"
                />
                <img
                    src="./assets/trees/tree-04.png"
                    srcset="./assets/trees/tree-04.png 1x, ./assets/trees/tree-04@2x.png 2x"
                    class="absolute top-[136px] left-[678px] drop-shadow-lg hover:cursor-pointer hover:opacity-90 transition hover:drop-shadow-2xl animate-float3 hover:pause"
                />
                <img
                    src="./assets/trees/tree-03.png"
                    srcset="./assets/trees/tree-03.png 1x, ./assets/trees/tree-03@2x.png 2x"
                    class="absolute top-[77px] left-[821px] drop-shadow-lg hover:cursor-pointer hover:opacity-90 transition hover:drop-shadow-2xl animate-float2 hover:pause"
                />
                <img
                    src="./assets/trees/tree-02.png"
                    srcset="./assets/trees/tree-02.png 1x, ./assets/trees/tree-02@2x.png 2x"
                    class="absolute top-[91px] left-[954px] drop-shadow-lg hover:cursor-pointer hover:opacity-90 transition hover:drop-shadow-2xl animate-float3 hover:pause"
                />
                <img
                    src="./assets/trees/tree-07.png"
                    srcset="./assets/trees/tree-07.png 1x, ./assets/trees/tree-07@2x.png 2x"
                    class="absolute -top-[18px] left-[1106px] drop-shadow-lg hover:cursor-pointer hover:opacity-90 transition hover:drop-shadow-2xl animate-float2 hover:pause"
                />
                <img
                    src="./assets/trees/tree-09.png"
                    srcset="./assets/trees/tree-09.png 1x, ./assets/trees/tree-09@2x.png 2x"
                    class="absolute top-[91px] left-[1251px] drop-shadow-lg hover:cursor-pointer hover:opacity-90 transition hover:drop-shadow-2xl animate-float3 hover:pause"
                />
            </div>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar orientation="horizontal" class="w-full h-2 bg-white/30" v-if="useHorizontalScroll">
            <ScrollAreaThumb />
        </ScrollAreaScrollbar>
    </ScrollAreaRoot>
    <!-- <img class="pb-12 object-cover h-96 md:mx-auto md:-mt-16" src="./assets/arboretum.png" /> -->
  
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
                class="font-display py-3 px-8 text-lg border-white/30 border-2 hover:bg-orange hover:border-orange hover:text-blue-darker transition rounded-[70px]"
            >
                {{ $t("Find out more") }}
            </router-link>
        </article>
        <div class="flex justify-center items-center flex-1 pt-12 md:pt-0">
            <span class="text-center inline-block max-w-80 py-3 px-8 md:text-2xl bg-orange -rotate-12 hover:-rotate-6 text-blue-darker transition rounded-[70px]">
                {{ $t("The exhibition starts on the 20th of April") }}
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ScrollAreaRoot, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from "radix-vue";

const arboretumContainer = ref(null);
const useHorizontalScroll = ref(false);

onMounted(() => {
    setOffset();
    window.addEventListener("resize", setOffset);
});

const setOffset = () => {
    if (arboretumContainer.value.offsetWidth < 1440) {
        useHorizontalScroll.value = true;
        const offset = (1440 - arboretumContainer.value.offsetWidth) / 2;
        arboretumContainer.value.style.left = `-${offset}px`;
    } else {
        useHorizontalScroll.value = false;
        arboretumContainer.value.style.left = "0px";
    }
};
</script>
