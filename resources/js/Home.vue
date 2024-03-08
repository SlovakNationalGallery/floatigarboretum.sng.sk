<template>
    <div class="mx-auto container px-5 pt-5 md:pt-9">
        <div class="md:flex md:flex-row-reverse md:items-end">
            <img src="./assets/logo-bienale.svg" class="w-28 md:w-40 ml-auto" />
            <h1
                class="pt-2 font-display text-xl md:text-2xl md:w-[30rem] text-blue blur-[0.5px] opacity-90 tracking-wide"
            >
                {{
                    $t(
                        "Slovak National Participation 60th International Art Exhibition of La Biennale di Venezia"
                    )
                }}
            </h1>
        </div>
    </div>
    <img
        class="pb-12 object-cover h-96 md:mx-auto md:-mt-16"
        src="./assets/arboretum.png"
    />
    <div class="">
        <div class="container mx-auto px-6 py-12">
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
                <router-link to="/about"
                    class="font-display py-3 px-8 text-lg border-white/30 border-2 hover:bg-orange hover:border-orange hover:text-blue-darker transition rounded-[70px]"
                >
                    {{ $t("Find out more") }}
                </router-link>
            </article>
        </div>
    </div>
</template>
