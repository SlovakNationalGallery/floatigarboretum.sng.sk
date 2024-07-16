<template>
    <div class="mx-auto container px-5 h-60 flex items-end">
        <h1 class="font-display text-4xl md:text-5xl text-blue-dark tracking-wide max-w-48 md:max-w-full">
            {{ $t("For visitors") }}
        </h1>
    </div>
    <div class="container mx-auto px-6 py-12 md:pt-16">
        <div class="mr-auto max-w-[800px]">
            <section class="mb-4">
                <h2 class="pb-2 opacity-60">
                    {{ $t("Opening hours") }}
                </h2>
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <div class="flex flex-col">
                        <span class="font-display text-2xl">{{ $t("Summer opening hours") }}</span>
                        <span class="text-base">{{ $t("from 20 April to 30 September") }}</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:gap-2">
                        <span>{{ formatTime("1100") }} – {{ formatTime("1900") }}</span>
                        <span>({{ $t("last admission") }} {{ formatTime("1845") }})</span>
                    </div>
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <div class="flex flex-col">
                        <span class="font-display text-2xl">{{ $t("Autumn opening hours") }}</span>
                        <span class="text-base">{{ $t("from 1 October to 24 November") }}</span>
                    </div>
                    <div class="flex flex-col md:flex-row md:gap-2">
                        <span>{{ formatTime("1000") }} - {{ formatTime("1800") }}</span>
                        <span>({{ $t("last admission") }} {{ formatTime("1745") }})</span>
                    </div>
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <div class="flex flex-col">
                        <span class="font-display text-2xl">{{ $t("Additional informations") }}</span>
                        <span>{{ $t("Closed on Mondays") }}</span>
                        <span class="text-base">{{
                            $t("(except 22 April, 17 June, 22 July, 2 and 30 September, 18 November)")
                        }}</span>
                    </div>
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
            </section>
        </div>
        <div class="mr-auto pt-12 md:pt-16 max-w-[800px]">
            <section class="mb-4">
                <h2 class="pb-2 opacity-60">
                    {{ $t("Schedule of performances") }}
                </h2>
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <span class="font-display text-2xl">{{ $t("21.5. – 26.5.2024") }}</span>
                    <span class="text-xl"
                        >{{ $t("at") }} {{ formatTime("1200") }}, {{ formatTime("1500") }},
                        {{ formatTime("1700") }}</span
                    >
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <span class="font-display text-2xl">{{ $t("18.6. – 23.6. 2024") }}</span>
                    <span class="text-xl"
                        >{{ $t("at") }} {{ formatTime("1200") }}, {{ formatTime("1500") }},
                        {{ formatTime("1700") }}</span
                    >
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <span class="font-display text-2xl">{{ $t("23.7. – 28.7.2024") }}</span>
                    <span class="text-xl"
                        >{{ $t("at") }} {{ formatTime("1400") }}, {{ formatTime("1500") }},
                        {{ formatTime("1600") }}</span
                    >
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <span class="font-display text-2xl">{{ $t("20.8. – 25.8.2024") }}</span>
                    <span class="text-xl"
                        >{{ $t("at") }} {{ formatTime("1400") }}, {{ formatTime("1500") }},
                        {{ formatTime("1600") }}</span
                    >
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <span class="font-display text-2xl">{{ $t("24.9. – 29.9. 2024") }}</span>
                    <span class="text-xl"
                        >{{ $t("at") }} {{ formatTime("1400") }}, {{ formatTime("1500") }},
                        {{ formatTime("1600") }}</span
                    >
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <span class="text-base">{{ $t("(duration of performance: 20 min)") }}</span>
            </section>
        </div>
        <div class="pt-8">
            <a
                href="https://labiennale.vivaticket.it/en/tour/la-biennale-di-venezia-57-esposizione-internazionale-d-arte/754"
                class="font-display py-3 px-8 text-lg border-white/30 border-2 hover:bg-orange hover:border-orange hover:text-blue-darker transition rounded-[70px] text-center"
                target="_blank"
            >
                {{ $t("Buy your tickets") }}
            </a>
        </div>
        <section class="pt-16">
            <h2 class="pb-6 font-display text-3xl">
                {{ $t("Photogallery from the opening") }}
            </h2>
        </section>
        <Slider>
            <DialogRoot>
                <SplideSlide class="h-[175px] overflow-hidden lg:h-[401px]" v-for="i in 11" :key="i">
                    <DialogTrigger class="aspect-video h-full object-cover md:aspect-auto cursor-pointer">
                        <img
                            :alt="$t('Photo of the exhibition') + ' ' + i"
                            :src="`/images/photogallery/photo-${i}.jpg`"
                            class="aspect-video h-full object-cover md:aspect-auto"
                            @click="selectedImage = `/images/photogallery/photo-${i}.jpg`"
                        />
                    </DialogTrigger>
                </SplideSlide>

                <DialogPortal>
                    <DialogOverlay class="bg-blue/80 data-[state=open]:animate-overlayShow fixed inset-0 z-30">
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
        <div class="py-4 opacity-60">{{ $t("Authors of photographs") }}: Monika Kováčová, Roberto Moro</div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Separator } from "radix-vue";
import { useLanguage } from "./composables/language";
import moment from "moment";
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

const selectedImage = ref(null);

const formatTime = (time) =>
    lang.value === "sk" ? moment(time, "HHmm").format("HH:mm") : moment(time, "HHmm").format("hh:mm a");
</script>
