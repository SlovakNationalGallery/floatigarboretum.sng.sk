<template>
    <div class="mx-auto container px-5 h-60 flex items-end">
        <h1 class="font-display text-4xl md:text-5xl text-blue-dark tracking-wide max-w-48 md:max-w-full">
            {{ $t("For visitors") }}
        </h1>
    </div>
    <div class="container mx-auto px-6 py-12 md:pt-16">
        <div class="mr-auto max-w-[800px] mt-4">
            <section class="mb-4">
                <h2 class="pb-2 opacity-60">
                    {{ $t("Opening") }}
                </h2>
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <span class="font-display text-2xl">{{ $t("18.4.") }}</span>
                    <span class="text-xl">{{ formatTime("1630") }}</span>
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
            </section>
            <section class="mb-4 mt-6">
                <h2 class="pb-2 opacity-60">
                    {{ $t("Schedule of performances during preview") }}
                </h2>
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <span class="font-display text-2xl">{{ $t("17.4.") }}</span>
                    <span class="text-xl">{{ formatTime("1400") }}</span>
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <span class="font-display text-2xl">{{ $t("18.4.") }}</span>
                    <span class="text-xl">{{ formatTime("1700") }}</span>
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <span class="font-display text-2xl">{{ $t("19.4.") }}</span>
                    <span class="text-xl"
                        >{{ $t("at") }} {{ formatTime("1200") }}, {{ formatTime("1500") }},
                        {{ formatTime("1715") }}</span
                    >
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <span class="font-display text-2xl">{{ $t("20.4.") }}</span>
                    <span class="text-xl"
                        >{{ $t("at") }} {{ formatTime("1200") }}, {{ formatTime("1500") }},
                        {{ formatTime("1715") }}</span
                    >
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <span class="font-display text-2xl">{{ $t("21.4.") }}</span>
                    <span class="text-xl"
                        >{{ $t("at") }} {{ formatTime("1200") }}, {{ formatTime("1500") }},
                        {{ formatTime("1715") }}</span
                    >
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <span class="text-base">{{ $t("(duration of performance: 20 min)") }}</span>
            </section>
        </div>
        <div class="mr-auto pt-12 md:pt-16 max-w-[800px]">
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
                    <span class="font-display text-2xl">{{ $t("20.5. – 27.5.2024") }}</span>
                    <span class="text-xl"
                        >{{ $t("at") }} {{ formatTime("1200") }}, {{ formatTime("1500") }},
                        {{ formatTime("1700") }}</span
                    >
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <span class="font-display text-2xl">{{ $t("17.6. – 24.6. 2024") }}</span>
                    <span class="text-xl"
                        >{{ $t("at") }} {{ formatTime("1200") }}, {{ formatTime("1500") }},
                        {{ formatTime("1700") }}</span
                    >
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <span class="font-display text-2xl">{{ $t("22.7. – 29.7.2024") }}</span>
                    <span class="text-xl"
                        >{{ $t("at") }} {{ formatTime("1200") }}, {{ formatTime("1500") }},
                        {{ formatTime("1700") }}</span
                    >
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <span class="font-display text-2xl">{{ $t("19.8. – 26.8.2024") }}</span>
                    <span class="text-xl"
                        >{{ $t("at") }} {{ formatTime("1200") }}, {{ formatTime("1500") }},
                        {{ formatTime("1700") }}</span
                    >
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <span class="font-display text-2xl">{{ $t("23.9. – 30.9. 2024") }}</span>
                    <span class="text-xl"
                        >{{ $t("at") }} {{ formatTime("1200") }}, {{ formatTime("1500") }},
                        {{ formatTime("1700") }}</span
                    >
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <span class="text-base">{{ $t("(duration of performance: 20 min)") }}</span>
            </section>
        </div>
        <div class="pt-12">
            <a
                href="https://labiennale.vivaticket.it/en/tour/la-biennale-di-venezia-57-esposizione-internazionale-d-arte/754"
                class="font-display py-3 px-8 text-lg border-white/30 border-2 hover:bg-orange hover:border-orange hover:text-blue-darker transition rounded-[70px] text-center"
                target="_blank"
            >
                {{ $t("Buy your tickets") }}
            </a>
        </div>
    </div>
</template>

<script setup>
import { Separator } from "radix-vue";
import { useLanguage } from "./composables/language";
import moment from "moment";

const { lang } = useLanguage();

const formatTime = (time) =>
    lang.value === "sk" ? moment(time, "HHmm").format("HH:mm") : moment(time, "HHmm").format("hh:mm a");
</script>
