<template>
    <Transition
        mode="out-in"
        enter-active-class="duration-300 ease-linear"
        :enter-from-class="`transform ${
            rightOrigin ? 'translate-x-1/2' : '-translate-x-1/2'
        } lg:translate-x-0 lg:opacity-0 ${zoom === 'in' ? 'scale-[1.075]' : ''} ${
            zoom === 'out' ? 'scale-[0.9025]' : ''
        }`"
        leave-active-class="duration-300 ease-linear"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        :leave-to-class="`transform ${
            rightOrigin ? '-translate-x-1/2' : 'translate-x-1/2'
        } lg:translate-x-0 lg:opacity-0 ${zoom === 'in' ? 'scale-[1.075]' : ''} ${
            zoom === 'out' ? 'scale-[0.9025]' : ''
        }`"
    >
        <slot></slot>
    </Transition>
</template>

<script setup>
const props = defineProps(["rightOrigin", "zoom"]);
</script>
