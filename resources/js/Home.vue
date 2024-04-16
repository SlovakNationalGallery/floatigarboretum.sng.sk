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
                @click="selectTree(6)"
                src="./assets/trees/tree-6.png"
                srcset="./assets/trees/tree-6.png 1x, ./assets/trees/tree-6@2x.png 2x"
                class="absolute top-[141px] left-[51px] drop-shadow-lg animate-float2 hover:cursor-pointer hover:pause hover:drop-shadow-2xl transition-shadow"
            />
            <img
                @click="selectTree(1)"
                src="./assets/trees/tree-1.png"
                srcset="./assets/trees/tree-1.png 1x, ./assets/trees/tree-1@2x.png 2x"
                class="absolute top-[203px] left-[174px] drop-shadow-lg animate-float3 hover:cursor-pointer hover:pause hover:drop-shadow-2xl transition-shadow"
            />
            <img
                @click="selectTree(2)"
                src="./assets/trees/tree-2.png"
                srcset="./assets/trees/tree-2.png 1x, ./assets/trees/tree-2@2x.png 2x"
                class="absolute top-[194px] left-[296px] drop-shadow-lg animate-float1 hover:cursor-pointer hover:pause hover:drop-shadow-2xl transition-shadow"
            />
            <img
                @click="selectTree(5)"
                src="./assets/trees/tree-5.png"
                srcset="./assets/trees/tree-5.png 1x, ./assets/trees/tree-5@2x.png 2x"
                class="absolute top-[213px] left-[409px] drop-shadow-lg animate-float2 hover:cursor-pointer hover:pause hover:drop-shadow-2xl transition-shadow"
            />
            <img
                @click="selectTree(7)"
                src="./assets/trees/tree-7.png"
                srcset="./assets/trees/tree-7.png 1x, ./assets/trees/tree-7@2x.png 2x"
                class="absolute top-[10px] left-[534px] drop-shadow-lg animate-float3 hover:cursor-pointer hover:pause hover:drop-shadow-2xl transition-shadow"
            />
            <img
                @click="selectTree(8)"
                src="./assets/trees/tree-8.png"
                srcset="./assets/trees/tree-8.png 1x, ./assets/trees/tree-8@2x.png 2x"
                class="absolute top-[213px] left-[685px] drop-shadow-lg animate-float3 hover:cursor-pointer hover:pause hover:drop-shadow-2xl transition-shadow"
            />
            <img
                @click="selectTree(9)"
                src="./assets/trees/tree-9.png"
                srcset="./assets/trees/tree-9.png 1x, ./assets/trees/tree-9@2x.png 2x"
                class="absolute top-[110px] left-[798px] drop-shadow-lg animate-float2 hover:cursor-pointer hover:pause hover:drop-shadow-2xl transition-shadow"
            />
            <img
                @click="selectTree(1)"
                src="./assets/trees/tree-11.png"
                srcset="./assets/trees/tree-11.png 1x, ./assets/trees/tree-11@2x.png 2x"
                class="absolute top-[202px] left-[918px] drop-shadow-lg animate-float3 hover:cursor-pointer hover:pause hover:drop-shadow-2xl transition-shadow"
            />
            <img
                @click="selectTree(1)"
                src="./assets/trees/tree-10.png"
                srcset="./assets/trees/tree-10.png 1x, ./assets/trees/tree-10@2x.png 2x"
                class="absolute top-[163px] left-[975px] drop-shadow-lg animate-float2 hover:cursor-pointer hover:pause hover:drop-shadow-2xl transition-shadow"
            />
            <img
                @click="selectTree(4)"
                src="./assets/trees/tree-4.png"
                srcset="./assets/trees/tree-4.png 1x, ./assets/trees/tree-4@2x.png 2x"
                class="absolute top-[112px] left-[1105px] drop-shadow-lg animate-float3 hover:cursor-pointer hover:pause hover:drop-shadow-2xl transition-shadow"
            />
            <img
                @click="selectTree(3)"
                src="./assets/trees/tree-3.png"
                srcset="./assets/trees/tree-3.png 1x, ./assets/trees/tree-3@2x.png 2x"
                class="absolute top-[151px] left-[1221px] drop-shadow-lg animate-float1 hover:cursor-pointer hover:pause hover:drop-shadow-2xl transition-shadow"
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
            <div class="flex flex-col container mx-auto gap-2.5 lg:mr-0 lg:flex-row">
                <router-link
                    to="/about"
                    class="font-display py-3 px-8 text-lg border-white/30 border-2 hover:bg-orange hover:border-orange hover:text-blue-darker transition rounded-[70px]"
                >
                    {{ $t("Find out more") }}
                </router-link>
                <a
                    href="https://jira.sng.sk/plugins/servlet/loginfreeRedirMain?portalid=9"
                    class="font-display py-3 px-8 text-lg border-white/30 border-2 hover:bg-orange hover:border-orange hover:text-blue-darker transition rounded-[70px]"
                >
                    {{ $t("Submit your story") }}
                </a>
            </div>
        </article>
        <div class="flex justify-center items-center flex-1 pt-12 md:pt-0">
            <router-link
                to="/for-visitors"
                class="text-center inline-block max-w-80 py-3 px-8 md:text-2xl bg-orange drop-shadow-lg hover:drop-shadow-2xl -rotate-12 hover:-rotate-6 transition rounded-[70px]"
            >
                {{ $t("The exhibition starts on the 20th of April") }}
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
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

const selectTree = (id) => {
    router.push(`/trees/${id}`);
};
</script>
