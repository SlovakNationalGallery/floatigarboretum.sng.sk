import "./bootstrap";

import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";

const i18n = createI18n({
    locale: "en", // set current locale
    legacy: false,
    messages: {
        sk: {
            en: "sk",
            "./assets/curator_text_en.pdf": "./assets/curator_text_sk.pdf",
            "floating arboretum": "plávajúce arborétum",
            "Lýdia Pribišová, curator": "Lýdia Pribišová, kurátorka",
            "Oto Hudec works with an archive/database/file of stories, telling of a collective effort when a united community of activists prevented deforestation and the destruction of trees. He calls for their rescue, as well as for the rescue of other endangered trees in the world. He contemplates an arboretum, a symbolic utopian place, a sanctuary for trees threatened by human expansion and extractivism. The project is an imaginative glimpse into a dystopian future in which we select and save trees by moving them to a safe (fictional) arboretum. We believe that Floating Arboretum's stories can spark transformative imagination, and that they can be inspirational in our everyday lives.":
                "Oto Hudec pracuje s archívom / databázou / súborom príbehov, vypovedajúcich o kolektívnej snahe, keď zomknutá komunita aktivistov bránila deforestácii, klčovaniu a ničeniu stromov. Volá po ich záchrane, ako aj po záchrane ostatných ohrozených stromoch vo svete. Uvažuje nad arborétom, symbolickým utopickým miestom, azylom pre stromy ohrozené ľudskou expanziou a extraktivizmom. Projekt je pomyselným pohľadom do dystopickej budúcnosti, v ktorej vyberáme a zachraňujeme stromy presunom do bezpečného (fiktívneho) arboréta. Veríme, že príbehy Floating Arboreta môžu naštartovať transformatívnu imagináciu a môžu byť inšpiratívnymi pre našu každodennosť.",
            "the curator's text": "text kurátorky",
            "interview with Julia Hill": "rozhovor s Juliou Hillovou",
            "artist and curator": "umelec a kurátorka",
            "Oto Hudec, artist": "Oto hudec, umelec",
            "Oto Hudec (1981 Košice, Slovakia, where he lives and works) is a multi-media artist, who created and exhibited his recent works in Slovakia, in Austria, South Korea, Cabo Verde, Portugal and the USA. He creates videos, murals, animations, sculptures, sound pieces and works for public spaces about immigration, refugees and the effects of globalization on the environment. His projects often include a utopian perspective as a way to understand the production of food, energy; he tracks transformations of the industrial landscape or the decline of bees.":
                "Oto Hudec (1981, Košice, Slovensko, kde žije a pracuje) je multimediálny umelec, ktorý svoje súčasné diela realizoval a vystavoval na Slovensku, v Rakúsku, v Južnej Kórei, na Cabo Verde, v Portugalsku a v USA. Venuje sa tvorbe videí, nástenných malieb, animácií, sôch, zvukových diel a prác pre verejné priestory zameraných na problematiku migrácie, utečencov a vplyvu globalizácie na životné prostredie. Vo svojich projektoch často pracuje s utopistickou perspektívou ako prostriedkom na objasnenie výroby potravín a energie, na sledovanie vývoja v priemyselnej oblasti či úbytku včiel.",
            "His research on the topics of climate change, ecology is often focused, instead on new scientific solutions, on how nomadic and indigenous people achieved sustainability. He often collaborates on projects with children and youth from disadvantaged communities.":
                "Pri výskume klimatických zmien a ekológie sa zvyčajne zameriava na spôsoby, akými kočovní a domorodí obyvatelia dosiahli udržateľnosť, a nie na nové vedecké riešenia. Pravidelne spolupracuje s deťmi a mládežou zo znevýhodnených komunít.",
            "Since 2013, he has been working on a participatory project with Roma children in Slovakia - Project Karavan together with Daniela Krajčová. Currently teacher at Faculty of Fine Arts, Technical University, Košice, Slovakia, Associate Professor. He is represented by Gandy Gallery, Bratislava. His works have been presented both as solo shows and as part of numerous group exhibitions in Slovakia and abroad. Recently, his projects were presented in the Gandy Gallery in Bratislava (2024), in the East Slovak Gallery in Košice (2022), AlbumArte, Rome, Italy (2022), Biennale Zielona Góra, Poland (2022), Ludwig Museum, Budapest, Hungary (2022), Kunsthalle Bratislava (2021, 2019, 2017), tranzit.sk, Bratislava (2021), Centre Pompidou, Paris, France (2017), De Appel, Amsterdam, Holland (2017) and many others.":
                "Od roku 2013 realizuje s Danielou Krajčovou participačný projekt Karavan, v ktorom sa venujú rómskym deťom na Slovensku. V súčasnosti pôsobí ako docent na Fakulte výtvarných umení Technickej univerzity v Košiciach a je zastúpený v Gandy Gallery v Bratislave. Vystavoval na mnohých samostatných a skupinových výstavách na Slovensku a v zahraničí. V posledných rokoch prezentoval svoje projekty v inštitúciách ako sú Gandy Gallery, Bratislava (2024); Východoslovenská galéria, Košice (2022); AlbumArte, Rím, Taliansko (2022); Biennale Zielona Góra, Poľsko (2022); Ludwig Museum, Budapešť, Maďarsko (2022); Kunsthalle Bratislava (2021, 2019, 2017); tranzit.sk, Bratislava (2021); Centre Pompidou, Paríž, Francúzsko (2017); De Appel, Amsterdam, Holandsko (2017) a v mnohých ďalších.",
            "Curator Lýdia Pribišová (born in 1980 in Bratislava, Slovakia) is based in Bratislava. Since 2006 she has been working as an editor of Flash Art Czech & Slovak Edition magazine, since 2015 she has been its editor-in-chief. From 2020 to 2024 she was the President of the Slovak section of AICA, since 2020 she has worked as a curator at Kunsthalle Bratislava. In 2013 - 2015 she was a project coordinator at tranzit.sk, where she also realized several curatorial projects. In 2012 she founded the civic association PILOT. In 2019 she was one of the curators of Kaunas Biennale in Lithuania. Since 2022 she has been working as an external teacher at the Academy of Fine Arts in Bratislava.":
                "Kurátorka Lýdia Pribišová (narodená v roku 1980 v Bratislave, Slovensko) pôsobí v Bratislave. Od roku 2006 pracuje ako redaktorka časopisu Flash Art Czech & Slovak Edition, od roku 2015 je jeho šéfredaktorkou. V rokoch 2020 – 2024 bola prezidentkou Slovenskej sekcie AICA, od roku 2020 pôsobí ako kurátorka v Kunsthalle Bratislava.",
            "In 2003 she received a Master's degree in Andragogy and in 2006 a Master's degree in Fine Arts Science, both from the Faculty of Arts, Comenius University in Bratislava. In 2013 she defended her Dottore di ricerca degree at the University of La Sapienza in Rome.":
                "V rokoch 2013 – 2015 pôsobila ako projektová koordinátorka v tranzit.sk, kde realizovala i niekoľko kurátorských projektov. V roku 2012 založila občianske združenie PILOT. V roku 2019 spolupracovala ako kurátorka na Kaunas Biennale v Litve. Od roku 2022 pôsobí ako externá pedagogička na Vysokej škole výtvarných umení v Bratislave. V roku 2003 získala magisterský titul z andragogiky, v roku 2006 magisterský titul z vedy o výtvarnom umení, oba na Filozofickej fakulte Univerzity Komenského v Bratislave. V roku 2013 obhájila titul Dottore di ricerca na univerzite La Sapienza v Ríme.",
            "In her current practice as a publicist and curator, she focuses on the development of international artistic cooperation in the wider Central European region. As a curator, she is interested in the boundaries of art, participatory projects, and ecological themes; she curated the A Plant programme at Kunsthalle Bratislava from 2022-2023, which included a programme in Bratislava's public space responding to the issue of green space in the city.":
                "Vo svojej doterajšej praxi sa ako publicistka a kurátorka zameriava na rozvoj medzinárodnej umeleckej spolupráce v širšom stredoeurópskom regióne. Ako kurátorka sa zaujíma o hranice umenia, participatívne projekty, o ekologické témy, v Kunsthalle Bratislava kurátorovala v rokoch 2022 – 2023 program A Plant, v rámci ktorého realizovala program vo verejnom priestore Bratislavy reagujúci na problematiku zelene v meste.",
        },
    },
});

const app = createApp(App);

app.use(i18n);

app.mount("#app");
