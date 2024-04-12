<template>
    <div class="mx-auto container px-5 h-60 flex items-end">
        <h1 class="font-display text-4xl md:text-5xl text-blue-dark tracking-wide max-w-48 md:max-w-full">
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

        <article class="mb-8">
            <h2 class="text-lg pb-2 opacity-60">
                {{ $t("Involved Artists") }}
            </h2>
            <ul class="pb-6 max-w-[800px] md:text-xl">
                <li>{{ $t("Artist") }}: Oto Hudec</li>
                <li>{{ $t("Curator") }}: Lýdia Pribišová</li>
                <li>{{ $t("Commissioner") }}: Monika Krčmárik</li>
                <li>{{ $t("Organizer") }}: Slovak National Gallery</li>
                <li>{{ $t("Sound piece & performance") }}: Fero Király</li>
                <li>{{ $t("Poeticisation of tree stories") }}: Juliana Sokolová</li>
                <li>
                    {{ $t("Performers") }}: Eva Šušková, Anna Čonková, Ivanka Chrapková, Peter Mazalán, Marek Kundlák,
                    Vojtěch Šembera
                </li>
                <li>{{ $t("Choreography") }}: Petra Fornayová</li>
                <li>{{ $t("Costume Designer") }}: Michaela Bednárová</li>
                <li>{{ $t("Architect") }}: Tomáš Boroš</li>
                <li>{{ $t("Boat construction and installation") }}: Róbert Bernáth, Sarah Hreščáková, Oto Hudec</li>
                <li>{{ $t("Nástenné maľby") }}: Viktor Fehér, Michal Turkovič, Oto Hudec</li>
                <li>{{ $t("Pine cone stone carving") }}: Juraj Parák, Maroš Parák</li>
                <li>{{ $t("Graphic design") }}: Samuel Čarnoký</li>
                <li>{{ $t("Technical assistance") }}: Peter Beňo</li>
                <li>{{ $t("Editors") }}: Miroslava Plesníková, Luďka Kratochvílová, Beata Bradford</li>
                <li>
                    {{ $t("Web application") }}: lab.SNG (Alena Pôbišová, Gorazd Ratulovský, Igor Rjabinin, František
                    Michal Sebestyén)
                </li>
            </ul>
            <p class="max-w-[800px] leading-normal md:text-xl">
                Oto Hudec is represented by
                <a href="https://www.gandy-gallery.com" class="group inline-block" target="_blank">
                    Gandy Gallery
                    <span class="block opacity-40 group-hover:opacity-0 transition h-px bg-blue-lightest -mt-px"></span>
                </a>
            </p>
        </article>

        <h2 class="text-lg pb-2 opacity-60">
            {{ $t("Meet us") }}
        </h2>

        <section class="md:flex md:items-start md:justify-between md:flex-row-reverse">
            <div class="pb-6 lg:p-16 md:w-1/2">
                <!-- @todo: clarify how the artist photo should behave -->
                <img v-if="profileImage" :src="profileImage" class="md:ml-auto drop-shadow-xl max-w-72" />
            </div>

            <AccordionRoot class="w-full" type="single" :collapsible="true" v-model="selectedProfile">
                <AccordionItem class="border-b border-white/15 overflow-hidden" value="oto">
                    <AccordionHeader class="flex">
                        <AccordionTrigger class="flex items-center justify-between w-full py-6 group">
                            <h3 class="font-display text-2xl text-left group-hover:text-blue-lighter transition-colors">
                                Oto Hudec, {{ $t("Artist") }}
                            </h3>
                            <div
                                class="ml-4 shrink-0 w-9 h-9 bg-blue-lighter/60 group-hover:bg-blue-lighter/40 transition-colors rounded-full flex items-center justify-center"
                            >
                                <AccordionIcon />
                            </div>
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent
                        class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden"
                    >
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
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem class="border-b border-white/15 overflow-hidden" value="lydia">
                    <AccordionHeader class="flex">
                        <AccordionTrigger class="flex items-center justify-between w-full py-6 group">
                            <h3 class="font-display text-2xl text-left group-hover:text-blue-lighter transition-colors">
                                Lýdia Pribišová, {{ $t("Curator") }}
                            </h3>
                            <div
                                class="ml-4 shrink-0 w-9 h-9 bg-blue-lighter/60 group-hover:bg-blue-lighter/40 transition-colors rounded-full flex items-center justify-center"
                            >
                                <AccordionIcon />
                            </div>
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent
                        class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden"
                    >
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
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem class="border-b border-white/15 overflow-hidden" value="juliana">
                    <AccordionHeader class="flex">
                        <AccordionTrigger class="flex items-center justify-between w-full py-6 group">
                            <h3 class="font-display text-2xl text-left group-hover:text-blue-lighter transition-colors">
                                Juliana Sokolová, {{ $t("Poet and essayist") }}
                            </h3>
                            <div
                                class="ml-4 shrink-0 w-9 h-9 bg-blue-lighter/60 group-hover:bg-blue-lighter/40 transition-colors rounded-full flex items-center justify-center"
                            >
                                <AccordionIcon />
                            </div>
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent
                        class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden"
                    >
                        <p class="pb-6 max-w-prose">
                            {{
                                $t(
                                    "(1981, Košice) is a poet and essayist who works in Slovak and English. She is the author of two books of poems and numerous essays. Located at the intersection of the sociological and the mythological, her latest book of poems, Domáce práce (Literárna bašta, 2023), explores what it is we touch while doing housework: a darkness that is both prehistoric and lying in wait. She performed a cycle of poems, Household gods, from the English version of the manuscript at the Radialsystem in Berlin in July 2023. Her first book of poems, My house will have a roof (Fra, 2013, published bilingually), explored the relationship between grief and language, grieving and speaking. She has worked closely with artists internationally, contributing writing to monographs and exhibition catalogues. She works as programme curator at the legendary cinema Kino Úsmev in Košice, Slovakia, and was part of the collective that campaigned for, restored, and reopened the cinema. She co-founded the writers-run residency programme Literary Residencies Košice. Sokolová studied philosophy at the University of York and at King’s College London. From 2010–2019 she taught philosophy at the Faculty of Arts at the TU Košice. She is currently a PhD researcher in architectural theory at the Academy of Fine Arts in Prague and is working on her third book, The Truth about Septimus Severus & I. Existing between three languages, Hungarian, Slovak, and English, she frequently reflects on language and dislocation."
                                )
                            }}
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem class="border-b border-white/15 overflow-hidden" value="michaela">
                    <AccordionHeader class="flex">
                        <AccordionTrigger class="flex items-center justify-between w-full py-6 group">
                            <h3 class="font-display text-2xl text-left group-hover:text-blue-lighter transition-colors">
                                Michaela Bednárová, {{ $t("Textile designer") }}
                            </h3>
                            <div
                                class="ml-4 shrink-0 w-9 h-9 bg-blue-lighter/60 group-hover:bg-blue-lighter/40 transition-colors rounded-full flex items-center justify-center"
                            >
                                <AccordionIcon />
                            </div>
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent
                        class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden"
                    >
                        <p class="pb-6 max-w-prose">
                            {{
                                $t(
                                    "(born 1982 in Kežmarok, Slovakia) is a textile designer known for her brand Puojd. She focuses on producing gift items and fashion collections. Her work is characterised by original pattern designs that are produced using various textile technologies with an emphasis on material experimentation and the search for new structures. Within her collections, she addresses various current social themes, infusing her work with nostalgia and creating a dreamy and colourful world inspired by everyday life. The ideology of the Puojd brand is to support domestic production, promote sustainability, and strive for waste reduction."
                                )
                            }}
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem class="border-b border-white/15 overflow-hidden" value="samuel">
                    <AccordionHeader class="flex">
                        <AccordionTrigger class="flex items-center justify-between w-full py-6 group">
                            <h3 class="font-display text-2xl text-left group-hover:text-blue-lighter transition-colors">
                                Samuel Čarnoký, {{ $t("Graphic design") }}
                            </h3>
                            <div
                                class="ml-4 shrink-0 w-9 h-9 bg-blue-lighter/60 group-hover:bg-blue-lighter/40 transition-colors rounded-full flex items-center justify-center"
                            >
                                <AccordionIcon />
                            </div>
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent
                        class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden"
                    >
                        <p class="pb-6 max-w-prose">
                            {{
                                $t(
                                    "(born 1981 in Krompachy, Slovakia) is a graphic and type designer and a lecturer. He is a graduate of the studio Visual Communication at the Faculty of Arts of the Technical University of Košice (2006) and has worked there as a teacher since 2009. He continued to doctoral studies at the Faculty of Arts in Košice (2012–2015), during which he completed an internship at the Studio of Type Design and Typography at the Academy of Applied Arts in Prague (2013–2014). He has participated at many creative workshops and arts symposia, as well as at individual and collective exhibitions and presentations in Slovakia and abroad. He has presented his work in a series of presentations, including Eastern Design Conference, TEDx, BRAK, PechaKucha Night, and TypoKucha. As a freelance graphic designer, he focuses on type design, typography, and editorial design, and since 2010 has been designing and publishing his own typefaces under the type foundry CarnokyType. He also actively cooperates with LTTR/CORP on the creation of skeleton fonts using the digital tool LTTR/INK. He is the author of the publications about typography in Slovakia Fonts SK / Digitized type design in Slovakia (2018) and Neon lights and advertising typography in eastern Slovakia till 1989 (Co-author Radoslav Sinčák, 2014). He was awarded at Slovak Design Award – Communication Design (2016, 2018) and at The Most Beautiful Books of Slovakia (2021, 2022). He lives and works in the east of Slovakia."
                                )
                            }}
                        </p>
                        <p class="pb-6 max-w-prose">
                            <a href="https://carnokytype.com" class="group inline-block" target="_blank">
                                carnokytype.com
                                <span
                                    class="block opacity-40 group-hover:opacity-0 transition h-px bg-blue-lightest -mt-px"
                                ></span>
                            </a>
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem class="border-b border-white/15 overflow-hidden" value="petra">
                    <AccordionHeader class="flex">
                        <AccordionTrigger class="flex items-center justify-between w-full py-6 group">
                            <h3 class="font-display text-2xl text-left group-hover:text-blue-lighter transition-colors">
                                Petra Fornayová, {{ $t("Choreography") }}
                            </h3>
                            <div
                                class="ml-4 shrink-0 w-9 h-9 bg-blue-lighter/60 group-hover:bg-blue-lighter/40 transition-colors rounded-full flex items-center justify-center"
                            >
                                <AccordionIcon />
                            </div>
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent
                        class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden"
                    >
                        <p class="pb-6 max-w-prose">
                            {{
                                $t(
                                    "focuses on contemporary dance and theatre. Graduated from the Law Faculty of Comenius University in Bratislava, Slovakia, she studied dance at the Academy for Performing Arts in Bratislava, Slovakia, and as a guest student at EDDC Dusseldorf, Germany. After being a member of various companies, including Theatre du Movement Paris and ballet of State Opera B.Bystrica, she began her freelance career and has created more than 20 author's performances that include Grass is Green, Manifesto of Possibilities, Subjective Future, and Objects of Research. She has staged contemporary theatre plays such as Vyrypajev and Spregelburd, with performances regularly presented in Slovakia and abroad at venues including New Drama Bratislava, Divadelná Nitra Festival, Jamais Vu! Paris, Tanec Praha, Ars Cameralis Katowice, HybajHo! Praha, and Korespondance CZ. In her works, she deals mainly with current social and political topics within a strong post-conceptual platform. The works Dance with Changing Parts (2018) and Patterns (2019), created in collaboration with the Cluster ensemble and the latter of which premiered at the Opera Nova festival in the National Theatre in Prague, were nominated for the Tatra Banka Foundation Award for Art 2018 and 2019. She founded and leads Nu Dance Fest, an international festival of contemporary dance, and is a member of the editorial board of the contemporary art magazine VLNA. In 2018, she was nominated for the National Film Award ‘Sun in the Net’ for her role in Juraj Lehotský's film Nina. She also played one of the leading characters in Mira Fornay’s film Cook F**k Kill, nominated for best film at the Czech Lion Film Award 2021. She is a programme board member of the European City of Culture 2026 – City of Trenčín."
                                )
                            }}
                        </p>
                        <p class="pb-6 max-w-prose">
                            <a href="https://www.petra-fornayova.sk" class="group inline-block" target="_blank">
                                www.petra-fornayova.sk
                                <span
                                    class="block opacity-40 group-hover:opacity-0 transition h-px bg-blue-lightest -mt-px"
                                ></span>
                            </a>
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem class="border-b border-white/15 overflow-hidden" value="fero">
                    <AccordionHeader class="flex">
                        <AccordionTrigger class="flex items-center justify-between w-full py-6 group">
                            <h3 class="font-display text-2xl text-left group-hover:text-blue-lighter transition-colors">
                                Fero Király, {{ $t("Sound piece & performance") }}
                            </h3>
                            <div
                                class="ml-4 shrink-0 w-9 h-9 bg-blue-lighter/60 group-hover:bg-blue-lighter/40 transition-colors rounded-full flex items-center justify-center"
                            >
                                <AccordionIcon />
                            </div>
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent
                        class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden"
                    >
                        <p class="pb-6 max-w-prose">
                            {{
                                $t(
                                    "(born 1979 in Košice, Slovakia) is an artist, pianist, and composer who has performed in countries including the USA, Croatia, UK, Norway, Poland, Denmark, and Germany. He engages in art projects that span performance, sound art, and installations, and conducts educational initiatives in the realm of sound and interactivity. He likes to collaborate with other artists, particularly those with a multidisciplinary focus. He creates compositions, audio-visual works, and sound installations, exploring themes related to language, computation, digital physics, and stories we create for ourselves. His work frequently explores similarities in the processes of computation and language, highlighting their parallel nature. Since 2009, he has co-led the Cluster ensemble, a musical collective dedicated to contemporary and minimal music. The ensemble has earned several awards and positive reviews, most notably for their album 'Cluster ensemble Plays Philip Glass', released by Orange Mountain Music in 2016. From 2016 onwards, Király, together with Eva Vozárová, has been involved in artistic projects as part of collective"
                                )
                            }}
                            <a href="https://zdruzenie.ooo" class="group inline-block" target="_blank">
                                ooo
                                <span
                                    class="block opacity-40 group-hover:opacity-0 transition h-px bg-blue-lightest -mt-px"
                                ></span> </a
                            >.
                        </p>
                        <p class="pb-6 max-w-prose">
                            {{
                                $t(
                                    "Currently, he is a teacher at the Department of Intermedia, Academy of Fine Arts and Design in Bratislava, Slovakia. As a live performer and creator of installations, Király's works and collaborations have been showcased in Slovakia and internationally. Recent projects were featured at The Schaubmar Mill, Slovak National Gallery in Pezinok (2023); Kontejner in Zagreb (2023); Slovak National Gallery in Bratislava (2021); New Stage of the Czech National Theatre in Prague (2019); MUMOK in Wien (2017); Roulette Intermedium in New York (2017); and numerous other venues."
                                )
                            }}
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </AccordionRoot>
        </section>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useLanguage } from "./composables/language"

import AccordionIcon from "./components/AccordionIcon.vue";
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from "radix-vue";

const { lang } = useLanguage();
const selectedProfile = ref("oto");

const profileImage = ref(null);

const profileImages = {
    oto: new URL("./assets/oto.jpg", import.meta.url).href,
    lydia: new URL("./assets/lydia.jpg", import.meta.url).href,
};

watch(selectedProfile, (newValue) => {
    updateProfileImage(newValue || "oto");
});

const updateProfileImage = (value) => {
    if (profileImages[value]) {
        profileImage.value = profileImages[value];
    } else {
        profileImage.value = null;
    }
};

onMounted(() => {
    updateProfileImage(selectedProfile.value);
});
</script>
