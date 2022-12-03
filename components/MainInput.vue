<template lang="pug">
label.label
    span.label-text {{ label }}
input(v-bind="$attrs" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="input input-primary")
</template>
<script lang="ts" setup>
    const props = defineProps({
        label: {
            type: String,
            default: ""
        },
        modelValue: {
            type: String || Number,
            default: ""
        }
    })
</script>
