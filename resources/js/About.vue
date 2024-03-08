<template>
    <div class="mx-auto container px-5 h-60 flex items-end">
        <h1
            class="font-display text-4xl md:text-5xl text-blue-dark tracking-wide max-w-48 md:max-w-full"
        >
            {{ $t("About the project") }}
        </h1>
    </div>
    <div class="container mx-auto px-6 py-12 md:pt-16">
        <article>
            <h2 class="text-lg pb-2 opacity-60">
                {{ $t("Floating Arboretum") }}
            </h2>
            <p class="pb-6 max-w-[800px] leading-normal md:text-2xl">
                {{
                    $t(
                        "Oto Hudec works with an archive/database/file of stories, telling of a collective effort when a united community of activists prevented deforestation and the destruction of trees. He calls for their rescue, as well as for the rescue of other endangered trees in the world. He contemplates an arboretum, a symbolic utopian place, a sanctuary for trees threatened by human expansion and extractivism. The project is an imaginative glimpse into a dystopian future in which we select and save trees by moving them to a safe (fictional) arboretum. We believe that Floating Arboretum's stories can spark transformative imagination, and that they can be inspirational in our everyday lives."
                    )
                }}
            </p>
        </article>
        <div class="pb-10 flex flex-col gap-3 md:flex-row">
            <a
                class="font-display py-3 px-8 text-lg border-white/30 border-2 hover:bg-orange hover:border-orange hover:text-blue-darker transition text-center rounded-[70px]"
                :href="`downloads/curator_text_${lang}.pdf`"
                download="floating_arboretum.pdf"
            >
                {{ $t("the curator's text") }}
            </a>
            <a
                class="font-display py-3 px-8 text-lg border-white/30 border-2 hover:bg-orange hover:border-orange hover:text-blue-darker transition text-center rounded-[70px]"
                :href="`downloads/julia_hill_interview_${lang}.pdf`"
                download="julia_hill_interview.pdf"
            >
                {{ $t("interview with Julia Hill") }}
            </a>
        </div>

        <article>
            <h2 class="text-lg pb-2 opacity-60">
                {{ $t("Involved Artists") }}
            </h2>
            <p class="pb-6 max-w-[800px] leading-normal md:text-xl">
                Artist: Oto Hudec<br />
                Curator: Lýdia Pribišová<br />
                Commissioner: Monika Krčmárik<br />
                Organizer: Slovak National Gallery<br />
                Sound piece & performance: Fero Király<br />
                Poeticization of tree stories: Juliana Sokolová<br />
                Performers: Eva Šušková, Anna Čonková, Ivanka Chrapková, Peter
                Mazalán, Marek<br />
                Kundlák, Vojtěch Šembera<br />
                Choreography: Petra Fornayová<br />
                Dress Designer: Michaela Bednárová<br />
                Architect: Tomáš Boroš<br />
            </p>
            <p class="pb-6 max-w-[800px] leading-normal md:text-xl">
                Oto Hudec is represented by
                <a
                    href="https://www.gandy-gallery.com"
                    class="group inline-block"
                    target="_blank"
                >
                    Gandy Gallery
                    <span
                        class="block opacity-40 group-hover:opacity-0 transition h-px bg-blue-lightest -mt-px"
                    ></span>
                </a>
            </p>
        </article>

        <h2 class="text-lg pb-2 opacity-60">
            {{ $t("Meet us") }}
        </h2>

        <section
            class="md:flex md:items-start md:justify-between md:gap-6 md:flex-row-reverse"
        >
            <div class="pb-6 lg:p-16 md:w-1/2">
                <img
                    src="./assets/oto.jpg"
                    class="md:ml-auto drop-shadow-xl max-w-72"
                />
            </div>

            <ul class="w-full">
                <li v-for="(artist, index) in artists" :key="index" class="border-b border-white/15">
                    <button
                        @click="toggleBio(index)"
                        class="flex items-center justify-between w-full py-6"
                    >
                        <h3 class="font-display text-2xl">
                            {{ artist.name }}
                        </h3>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            :class="{
                                'transform rotate-180': expandedIndex === index,
                            }"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 3a.75.75 0 01.75.75v10.5a.75.75 0 01-1.5 0V3.75A.75.75 0 0110 3z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                    <div
                        v-if="expandedIndex === index"
                        class="pb-6"
                    >
                        <p>{{ artist.bio }}</p>
                    </div>
                </li>
            </ul>

            <!-- <article class="md:w-1/2">
                <h3 class="font-display text-2xl pb-1 md:pb-3">
                    {{ $t("Oto Hudec, artist") }}
                </h3>
                <p class="pb-6 max-w-prose">
                    {{
                        $t(
                            "Oto Hudec (1981 Košice, Slovakia, where he lives and works) is a multi-media artist, who created and exhibited his recent works in Slovakia, in Austria, South Korea, Cabo Verde, Portugal and the USA. He creates videos, murals, animations, sculptures, sound pieces and works for public spaces about immigration, refugees and the effects of globalization on the environment. His projects often include a utopian perspective as a way to understand the production of food, energy; he tracks transformations of the industrial landscape or the decline of bees."
                        )
                    }}
                </p>
                <p class="pb-6 max-w-prose">
                    {{
                        $t(
                            "His research on the topics of climate change, ecology is often focused, instead on new scientific solutions, on how nomadic and indigenous people achieved sustainability. He often collaborates on projects with children and youth from disadvantaged communities."
                        )
                    }}
                </p>
                <p class="pb-6 max-w-prose">
                    {{
                        $t(
                            "Since 2013, he has been working on a participatory project with Roma children in Slovakia - Project Karavan together with Daniela Krajčová. Currently teacher at Faculty of Fine Arts, Technical University, Košice, Slovakia, Associate Professor. He is represented by Gandy Gallery, Bratislava. His works have been presented both as solo shows and as part of numerous group exhibitions in Slovakia and abroad. Recently, his projects were presented in the Gandy Gallery in Bratislava (2024), in the East Slovak Gallery in Košice (2022), AlbumArte, Rome, Italy (2022), Biennale Zielona Góra, Poland (2022), Ludwig Museum, Budapest, Hungary (2022), Kunsthalle Bratislava (2021, 2019, 2017), tranzit.sk, Bratislava (2021), Centre Pompidou, Paris, France (2017), De Appel, Amsterdam, Holland (2017) and many others."
                        )
                    }}
                </p>
            </article> -->
        </section>
        <section class="md:flex md:items-start md:justify-between md:gap-6">
            <div class="pb-6 md:-8 lg:p-16 md:w-1/2">
                <img
                    src="./assets/lydia.jpg"
                    class="md:ml-auto drop-shadow-xl max-w-72"
                />
            </div>

            <article class="md:w-1/2">
                <h3 class="font-display text-2xl pb-1 md:pb-3">
                    {{ $t("Lýdia Pribišová, curator") }}
                </h3>
                <p class="pb-6 max-w-prose">
                    {{
                        $t(
                            "Curator Lýdia Pribišová (born in 1980 in Bratislava, Slovakia) is based in Bratislava. Since 2006 she has been working as an editor of Flash Art Czech & Slovak Edition magazine, since 2015 she has been its editor-in-chief. From 2020 to 2024 she was the President of the Slovak section of AICA, since 2020 she has worked as a curator at Kunsthalle Bratislava. In 2013 - 2015 she was a project coordinator at tranzit.sk, where she also realized several curatorial projects. In 2012 she founded the civic association PILOT. In 2019 she was one of the curators of Kaunas Biennale in Lithuania. Since 2022 she has been working as an external teacher at the Academy of Fine Arts in Bratislava."
                        )
                    }}
                </p>
                <p class="pb-6 max-w-prose">
                    {{
                        $t(
                            "In 2003 she received a Master's degree in Andragogy and in 2006 a Master's degree in Fine Arts Science, both from the Faculty of Arts, Comenius University in Bratislava. In 2013 she defended her Dottore di ricerca degree at the University of La Sapienza in Rome."
                        )
                    }}
                </p>
                <p class="pb-6 max-w-prose">
                    {{
                        $t(
                            "In her current practice as a publicist and curator, she focuses on the development of international artistic cooperation in the wider Central European region. As a curator, she is interested in the boundaries of art, participatory projects, and ecological themes; she curated the A Plant programme at Kunsthalle Bratislava from 2022-2023, which included a programme in Bratislava's public space responding to the issue of green space in the city."
                        )
                    }}
                </p>
            </article>
        </section>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { getActiveLanguage } from "laravel-vue-i18n";

const lang = ref(getActiveLanguage());

const artists = ref([
    { name: "Oto Hudec", bio: "Short bio for Oto Hudec" },
    { name: "Lýdia Pribišová", bio: "Short bio for Lýdia Pribišová" },
    { name: "Juliana Sokolová", bio: "Short bio for Juliana Sokolová" },
]);

const expandedIndex = ref(0);

const toggleBio = (index) => {
    expandedIndex.value = expandedIndex.value === index ? -1 : index;
};
</script>
