<template>
    <div class="flex justify-center items-center flex-1 pt-12 md:pt-0" v-if="nextDate">
        <router-link
            to="/for-visitors"
            class="text-center flex flex-col max-w-80 py-3 px-8 md:text-2xl bg-orange drop-shadow-lg hover:drop-shadow-2xl -rotate-12 hover:-rotate-6 transition rounded-[70px]"
        >
            <span>{{ $t("Next performances:") }}</span>
            <span>{{ nextDate.start.format("D.M.") }}&nbsp;-&nbsp;{{ nextDate.end.format("D.M.") }}</span>
            <span>{{ $t("at") }} {{ formatTime("1400") }}, {{ formatTime("1500") }}, {{ formatTime("1600") }}</span>
        </router-link>
    </div>
</template>

<script setup>
import { useLanguage } from "../composables/language";
import moment from "moment";

const { lang } = useLanguage();

const formatTime = (time) =>
    lang.value === "sk" ? moment(time, "HHmm").format("HH:mm") : moment(time, "HHmm").format("hh:mm a");

const schedule = [
    { start: moment("21.5.2024", "D.M.YYYY"), end: moment("26.5.2024 18:00", "D.M.YYYY HH:mm") },
    { start: moment("18.6.2024", "D.M.YYYY"), end: moment("23.6.2024 18:00", "D.M.YYYY HH:mm") },
    { start: moment("23.7.2024", "D.M.YYYY"), end: moment("28.7.2024 18:00", "D.M.YYYY HH:mm") },
    { start: moment("20.8.2024", "D.M.YYYY"), end: moment("25.8.2024 18:00", "D.M.YYYY HH:mm") },
    { start: moment("24.9.2024", "D.M.YYYY"), end: moment("29.9.2024 18:00", "D.M.YYYY HH:mm") },
];

function getNextDate(schedule) {
    const today = moment();
    for (const i in schedule) {
        if (today.isBefore(schedule[i].end)) {
            return schedule[i];
        }
    }
    return null;
}

// Test the function
const nextDate = getNextDate(schedule);
</script>
