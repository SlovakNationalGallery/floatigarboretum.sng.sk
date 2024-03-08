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
                <h2 class="font-display text-3xl pb-4 md:pb-3 md:text-6xl">
                    {{ $t("floating arboretum") }}
                </h2>
                <p class="pb-6 text-xl md:text-2xl max-w-[800px]">
                    {{
                        $t(
                            "Floating Arboretum is a work by Oto Hudec presented in the Czech and Slovak Pavilion at the 60th International Art Exhibition of La Biennale di Venezia: Stranieri Ovunque - Foreigners Everywhere. The 60th International Art Exhibition will take place from Saturday 20 April to Sunday 24 November, 2024 (pre-opening on April 17, 18 and 19)."
                        )
                    }}
                </p>
                <p class="pb-6 text-xl md:text-2xl max-w-[800px]">
                    {{
                        $t(
                            "Oto Hudec works with an archive/database/file of stories, telling of a collective effort when a united community of activists prevented deforestation and the destruction of trees. He calls for their rescue, as well as for the rescue of other endangered trees in the world. He contemplates an arboretum, a symbolic utopian place, a sanctuary for trees threatened by human expansion and extractivism. The project is an imaginative glimpse into a dystopian future in which we select and save trees by moving them to a safe (fictional) arboretum. We believe that Floating Arboretum's stories can spark transformative imagination, and that they can be inspirational in our everyday lives."
                        )
                    }}
                </p>
            </article>
            <div class="pb-10 flex flex-col gap-3 md:flex-row">
                <a
                    class="font-display text-lg flex justify-center w-full bg-orange hover:bg-orange-600 transition rounded-[70px] py-3.5 md:flex-initial md:w-auto md:px-8"
                    :href="`downloads/curator_text_${lang}.pdf`"
                    download="floating_arboretum.pdf"
                >
                    {{ $t("the curator's text") }}
                </a>
                <a
                    class="font-display text-lg flex justify-center w-full bg-orange hover:bg-orange-600 transition rounded-[70px] py-3.5 md:flex-initial md:w-auto md:px-8"
                    :href="`downloads/julia_hill_interview_${lang}.pdf`"
                    download="julia_hill_interview.pdf"
                >
                    {{ $t("interview with Julia Hill") }}
                </a>
            </div>
            <h2 class="font-display text-3xl pb-4 md:text-4xl">
                {{ $t("artist and curator") }}
            </h2>
            <section
                class="md:flex md:items-start md:justify-between md:gap-6 md:flex-row-reverse"
            >
                <div class="pb-6 md:-8 lg:p-16 md:w-1/2">
                    <img
                        src="./assets/oto.jpg"
                        class="md:ml-auto drop-shadow-xl max-w-72"
                    />
                </div>
                <article class="md:w-1/2">
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
                </article>
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
    </div>
</template>
