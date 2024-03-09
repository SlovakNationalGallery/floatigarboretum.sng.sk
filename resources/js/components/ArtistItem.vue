<template>
    <li class="border-b border-white/15">
        <button @click="toggleBio" class="flex items-center justify-between w-full py-6 group">
            <h3 class="font-display text-2xl text-left">
                {{ name }}<span v-if="role">, {{ $t(role) }}</span>
            </h3>
            <div class="ml-4 shrink-0 w-9 h-9 bg-blue-lighter/60 group-hover:bg-blue-lighter/40 transition-colors rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 fill-none stroke-blue-darker" viewBox="0 0 24 24">
                    <path d="M4 12L20 12" stroke-linecap="square" stroke-linejoin="round" />
                    <path v-if="expanded" d="M12 4V20" stroke-linecap="square" stroke-linejoin="round" />
                </svg>
            </div>
        </button>
        <div v-if="expanded" class="pb-6">
            <slot></slot>
        </div>
    </li>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["name", "role", "expanded"]);
const expanded = ref(props.expanded || false);

const toggleBio = () => {
    expanded.value = !expanded.value;
};
</script>
