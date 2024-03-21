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
    <img class="pb-12 object-cover h-96 md:mx-auto md:-mt-16" src="./assets/arboretum.png" />
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
            <span class="text-center inline-block max-w-80 py-3 px-8 md:text-2xl bg-red -rotate-12 hover:-rotate-6 transition rounded-[70px]">
                {{ $t("The exhibition starts on the 20th of April") }}
            </span>
        </div>
    </div>
</template>
