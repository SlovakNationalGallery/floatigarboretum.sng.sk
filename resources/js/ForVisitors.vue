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
                    <span class="font-display text-2xl">{{ $t("18.4") }}</span>
                    <span class="text-xl">{{ $t("4:30 p.m.") }}</span>
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
                    <span class="font-display text-2xl">{{ $t("17.4") }}</span>
                    <span class="text-xl">{{ $t("2:00 p.m.") }}</span>
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <span class="font-display text-2xl">{{ $t("18.4") }}</span>
                    <span class="text-xl">{{ $t("between 5:00 – 7:00 p.m.") }}</span>
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <span class="font-display text-2xl">{{ $t("19.4") }}</span>
                    <span class="text-xl">{{ $t("at 12:00, 3:00, 5:00 p.m.") }}</span>
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
                        <span>{{ $t("11 a.m. – 7 p.m.") }}</span>
                        <span>{{ $t("(last admission 6:45 p.m.)") }}</span>
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
                        <span>{{ $t("10 a.m. – 6 p.m.") }}</span>
                        <span>{{ $t("(last admission 6:45 p.m.)") }}</span>
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
                    <span class="font-display text-2xl">{{ $t("14.4. – 22.4.2024") }}</span>
                    <span class="text-xl">{{ $t("at 12.00, 15.00, 17.00") }}</span>
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <span class="font-display text-2xl">{{ $t("20.5. – 27.5.2024") }}</span>
                    <span class="text-xl">{{ $t("at 12.00, 15.00, 17.00") }}</span>
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <span class="font-display text-2xl">{{ $t("17.6. – 24.6. 2024") }}</span>
                    <span class="text-xl">{{ $t("at 12.00, 15.00, 17.00") }}</span>
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <span class="font-display text-2xl">{{ $t("22.7. – 29.7.2024") }}</span>
                    <span class="text-xl">{{ $t("at 12.00, 15.00, 17.00") }}</span>
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <span class="font-display text-2xl">{{ $t("19.8. – 26.8.2024") }}</span>
                    <span class="text-xl">{{ $t("at 12.00, 15.00, 17.00") }}</span>
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <div class="flex flex-col md:flex-row justify-between w-full py-4">
                    <span class="font-display text-2xl">{{ $t("23.9. – 30.9. 2024") }}</span>
                    <span class="text-xl">{{ $t("at 12.00, 15.00, 17.00") }}</span>
                </div>
                <Separator
                    class="bg-white opacity-15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4"
                />
                <span class="text-base">{{ $t("(duration of performance: 20 min)") }}</span>
            </section>
        </div>
    </div>
</template>

<script setup>
import { Separator } from "radix-vue";
</script>
