<template>
    <Transition
        mode="out-in"
        enter-active-class="duration-300 ease-out"
        enter-from-class="transform opacity-0"
        leave-active-class="duration-300 ease-in"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-to-class="transform opacity-0"
    >
        <slot></slot>
    </Transition>
</template>
