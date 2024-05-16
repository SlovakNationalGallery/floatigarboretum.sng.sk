<template>
    <Splide
        :options="{
            omitEnd: omitEnd,
            rewind: rewind,
            autoWidth: true,
            pagination: false,
            focus: 0,
            perMove: 1,
            gap: '1rem',
            arrows: arrows,
            arrowPath:
                'M40.063 20.6896L23.2818 0.687012L21.0771 2.53372L35.109 19.2527H0.0629883V22.1265H35.109L21.0771 38.8455L23.2818 40.687L40.063 20.6896Z',
        }"
    >
        <slot></slot>
    </Splide>
</template>

<script setup lang="ts">
import '@splidejs/vue-splide/css';

interface Props {
    rewind?: boolean;
    omitEnd?: boolean;
    arrows?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    rewind: true,
    omitEnd: false,
    arrows: true,
});
</script>
