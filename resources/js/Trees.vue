<template>
    <div class="mx-auto container px-5 h-60 flex items-end">
        <h1 class="font-display text-4xl md:text-5xl text-blue-dark tracking-wide max-w-48 md:max-w-full">
            {{ $t("Discover stories") }}
        </h1>
    </div>
    <div class="container mx-auto px-6 py-12 md:pt-16">
        <div v-if="treesRef" class="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 text-blue-darker">
            <router-link
                :to="`/story/${tree.id}`"
                v-for="(tree, i) in treesRef.data"
                :class="[
                    { 'animate-float1': i % 3 === 0, 'animate-float2': i % 3 === 1, 'animate-float3': i % 3 === 2 },
                    'overflow-hidden rounded-[20px] bg-white h-[525px] relative',
                ]"
            >
                <div class="relative">
                    <div class="bg-gradient-to-b absolute inset-0 from-white/5 via-white/5 to-white"></div>
                    <img :src="getImgSrc(tree.image?.src)" :srcset="tree.image?.srcset" class="w-full h-[350px] object-cover" />
                </div>
                <div class="px-6 overflow-hidden">
                    <h3 class="font-display text-3xl text-ellipsis overflow-hidden">{{ tree.title }}</h3>
                    <h5 class="opacity-60">{{ tree.location }}</h5>
                    <div v-html="tree.story" class="pt-2" />
                </div>
                <div class="absolute bottom-0 left-0 w-full h-16 pointer-events-none bg-gradient-to-b from-transparent to-white to-80%"></div>
            </router-link>
        </div>
        <div v-if="loading">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
                <div
                    v-for="_ in Array.from({ length: 9 })"
                    class="overflow-hidden rounded-[20px] bg-white h-[525px] flex flex-col gap-y-2"
                >
                    <div class="h-[350px] animate-pulse bg-blue-light" />
                    <div class="mx-6 h-8 w-3/4 animate-pulse rounded bg-blue-light" />
                    <div class="mx-6 h-6 w-1/2 animate-pulse rounded bg-blue-light" />
                    <div class="mx-6 h-16 animate-pulse rounded bg-blue-light" />
                </div>
            </div>
        </div>
        <div v-else-if="error" class="w-full flex flex-col justify-center items-center">
            <span class="font-display text-2xl">{{ $t("🌵🏜️🌵 Something went wrong 🌵🏜️🌵") }}</span>
            <button
                @click="treesRef?.links.next ? fetchTrees(treesRef.links.next) : fetchTrees()"
                class="font-display mt-8 py-3 px-8 text-lg border-white/30 border-2 hover:bg-orange hover:border-orange hover:text-blue-darker transition rounded-[70px]"
            >
                {{ $t("Try again") }}
            </button>
        </div>
        <div v-else-if="treesRef?.meta.current_page !== treesRef?.meta.last_page" class="w-full flex justify-center">
            <button
                @click="fetchTrees(treesRef.links.next)"
                class="font-display mt-8 py-3 px-8 text-lg border-white/30 border-2 hover:bg-orange hover:border-orange hover:text-blue-darker transition rounded-[70px]"
            >
                {{ $t("Load more") }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useLanguage } from "./composables/language";

const loading = ref(false);
const treesRef = ref(null);
const error = ref(null);
const { lang } = useLanguage();

onMounted(async () => await fetchTrees());
watch(lang, () => fetchTrees());

const getImgSrc = (src) =>
    src ? new URL(src, import.meta.url).href : new URL("./assets/tree-placeholder.png", import.meta.url).href;

const fetchTrees = async (link) => {
    error.value = null;
    loading.value = true;

    try {
        const response = await fetch(link || "/api/trees", {
            method: "GET",
            headers: {
                "Accept-Language": lang.value,
            },
        });
        const trees = await response.json();
        if (!treesRef.value) treesRef.value = {};
        treesRef.value.meta = trees.meta;
        treesRef.value.links = trees.links;
        treesRef.value.data = link && treesRef.value.data ? [...treesRef.value.data, ...trees.data] : trees.data;
    } catch (err) {
        error.value = err.toString();
    } finally {
        loading.value = false;
    }
};
</script>
