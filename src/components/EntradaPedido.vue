<template>
    <tr>
        <td>{{nombre}}</td>
        <td>{{tel}}</td>
        <td>{{email}}</td>
        <td>{{sabores}}</td>
        <td>{{adornos}}</td>
        <td><button @click="$emit('remove')">Eliminar</button></td>
    </tr>
</template>

<script setup>
    defineProps(['nombre', 'tel', 'email','sabores','adornos'])
    defineEmits(['remove'])
</script>

<style scoped>

</style>