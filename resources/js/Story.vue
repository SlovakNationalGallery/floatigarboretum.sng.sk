<template>
    <div class="lg:container lg:mx-auto lg:flex lg:gap-x-4">
        <template v-if="loading">
            <div class="lg:w-96 lg:shrink-0">
                <section
                    class="flex flex-col items-center justify-center overflow-hidden relative lg:sticky lg:top-0 lg:left-16 lg:p-4 mt-6 lg:mt-2.5"
                >
                    <div class="flex relative items-center justify-center w-full gap-2">
                        <div class="w-2/3 h-80 animate-pulse bg-white rounded-[20px]"></div>
                    </div>
                    <div class="w-3/4 flex flex-col items-center py-3">
                        <div class="font-display w-full h-11 mt-4 animate-pulse text-center bg-white rounded-[20px]" />
                        <div class="animate-pulse w-1/2 h-3 mt-1 bg-white rounded-[20px]" />
                    </div>
                </section>
            </div>
            <div class="lg:relative lg:w-full lg:mt-72 mx-4">
                <section class="container mx-auto px-5 mt-6 lg:mr-0 bg-white animate-pulse h-screen rounded-[20px]" />
            </div>
        </template>
        <div v-else-if="error" class="w-full flex flex-col justify-center items-center mt-60">
            <span class="font-display text-2xl">{{ $t("🌵🏜️🌵 Something went wrong 🌵🏜️🌵") }}</span>
            <button
                @click="treesRef?.links.next ? fetchTrees(treesRef.links.next) : fetchTrees()"
                class="font-display mt-8 py-3 px-8 text-lg border-white/30 border-2 hover:bg-orange hover:border-orange hover:text-blue-darker transition rounded-[70px]"
            >
                {{ $t("Try again") }}
            </button>
        </div>
        <template v-else-if="story">
            <div class="lg:w-96 lg:shrink-0">
                <section
                    class="flex flex-col items-center justify-center overflow-hidden relative lg:sticky lg:top-0 lg:left-16 lg:p-4 mt-6 lg:mt-2.5"
                >
                    <div class="flex relative items-center justify-center w-full gap-2">
                        <div class="w-2/3 h-80">
                            <img
                                :src="getImgSrc(story.data.image?.src)"
                                :srcset="story.data.image?.srcset"
                                class="w-full h-full overflow-hidden object-bottom object-contain animate-float1"
                            />
                        </div>
                    </div>
                    <FadeInOutTransition>
                        <div class="w-full text-center py-3">
                            <h2 class="font-display text-3xl pt-4 mx-2 text-center">
                                {{ story.data.title }}
                            </h2>
                            <span class="text-sm"
                                >{{ story.data.location }}
                                {{ story.data.estimated_height ? ` / ${story.data.estimated_height}` : ""
                                }}{{ story.data.estimated_age ? ` / ${story.data.estimated_age}` : "" }}</span
                            >
                        </div>
                    </FadeInOutTransition>
                </section>
            </div>
            <FadeInOutTransition>
                <div class="lg:relative lg:w-full lg:mt-72">
                    <section class="container mx-auto px-5 mt-6 lg:mr-0">
                        <h3 class="text-xl opacity-60 pb-2">{{ $t("Story") }}</h3>
                        <p class="lg:text-2xl whitespace-pre-wrap" v-html="story.data.story"></p>
                        <template v-if="story.data.images">
                            <h3 class="text-xl opacity-60 pb-4">{{ $t("Photogallery") }}</h3>
                            <Slider class="mb-8" :arrows="story.data.images.length > 1">
                                <DialogRoot>
                                    <SplideSlide
                                        class="h-[175px] overflow-hidden lg:h-[401px]"
                                        v-for="(image, i) in story.data.images"
                                        :key="i"
                                    >
                                        <DialogTrigger
                                            class="aspect-video h-full object-cover md:aspect-auto cursor-pointer"
                                        >
                                            <img
                                                :src="getImgSrc(image.src)"
                                                :srcset="image.srcset"
                                                class="aspect-video h-full object-cover md:aspect-auto"
                                                @click="selectedImage = image.src"
                                            />
                                        </DialogTrigger>
                                    </SplideSlide>

                                    <DialogPortal>
                                        <DialogOverlay
                                            class="bg-blue/80 data-[state=open]:animate-overlayShow fixed inset-0 z-30"
                                        >
                                            <DialogClose
                                                class="bg-white/10 hover:bg-white/20 p-4 focus:shadow-green7 absolute top-[20px] right-[20px] inline-flex appearance-none items-center justify-center rounded-full focus:outline-none"
                                                aria-label="Close"
                                            >
                                                <CloseIcon class="h-8 w-8" />
                                            </DialogClose>
                                        </DialogOverlay>
                                        <DialogContent
                                            class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-full w-full max-w-[1140px] max-h-[calc(100vh-12rem)] translate-x-[-50%] translate-y-[-50%] focus:outline-none z-[100] flex items-center justify-center"
                                            @interact-outside="
                                                (event) => {
                                                    return event.preventDefault();
                                                }
                                            "
                                        >
                                            <DialogDescription>
                                                <img
                                                    :src="selectedImage"
                                                    alt="Lightbox Image"
                                                    class="h-full max-h-[calc(100vh-12rem)] max-w-full flex-1 object-contain"
                                                />
                                            </DialogDescription>
                                        </DialogContent>
                                    </DialogPortal>
                                </DialogRoot>
                            </Slider>
                        </template>
                    </section>
                    <section class="flex flex-col container mx-auto px-5 gap-2.5 lg:mr-0 lg:flex-row py-4 lg:py-6">
                        <router-link
                            to="/trees"
                            class="font-display py-3 px-8 text-lg border-white/30 border-2 hover:bg-orange hover:border-orange hover:text-blue-darker transition rounded-[70px] text-center"
                        >
                            {{ $t("Back to stories") }}
                        </router-link>
                        <a
                            href="https://jira.sng.sk/plugins/servlet/loginfreeRedirMain?portalid=9"
                            class="font-display py-3 px-8 text-lg border-white/30 border-2 hover:bg-orange hover:border-orange hover:text-blue-darker transition rounded-[70px] text-center"
                        >
                            {{ $t("Submit your story") }}
                        </a>
                    </section>
                </div>
            </FadeInOutTransition>
        </template>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useLanguage } from "./composables/language";
import FadeInOutTransition from "./components/FadeInOutTransition.vue";
import Slider from "./components/Slider.vue";
import CloseIcon from "./icons/CloseIcon.vue";
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogOverlay,
    DialogPortal,
    DialogRoot,
    DialogTrigger,
} from "radix-vue";

const { lang } = useLanguage();
const route = useRoute();

const loading = ref(false);
const story = ref(null);
const error = ref(null);

const selectedImage = ref(null);

// watch the params of the route to fetch the data again
watch(() => route.params.id, fetchStory, { immediate: true });
// watch the language to fetch the data again
watch(lang, () => fetchStory());

const getImgSrc = (src) =>
    src ? new URL(src, import.meta.url).href : new URL("./assets/tree-placeholder.png", import.meta.url).href;

async function fetchStory() {
    error.value = story.value = null;
    loading.value = true;

    try {
        const response = await fetch(`/api/trees/${route.params.id}`, {
            method: "GET",
            headers: {
                "Accept-Language": lang.value,
            },
        });

        story.value = await response.json();
    } catch (err) {
        error.value = err.toString();
    } finally {
        loading.value = false;
    }
}
</script>
