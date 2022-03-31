<template>
    <li>
        {{nombre}} | {{tel}} | {{email}}
        <button @click="$emit('remove')">Eliminar</button>
    </li>
</template>

<script setup>
    defineProps(['nombre', 'tel', 'email'])
    defineEmits(['remove'])
</script>

<style scoped>

</style>