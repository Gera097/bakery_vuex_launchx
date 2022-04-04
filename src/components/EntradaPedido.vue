<template>
    <tr>
        <td>{{nombre}}</td>
        <td>{{tel}}</td>
        <td>{{email}}</td>
        <td>{{sabores}}</td>
        <td>{{adornos}}</td>
        <td>{{precio}}</td>
        <td><button @click="$emit('remove')">Eliminar</button></td>
    </tr>
</template>

<script setup>
    defineProps(['nombre', 'tel', 'email','sabores','adornos','precio'])
    defineEmits(['remove'])
</script>

<style scoped>
 td {
        padding: 1em;
        border: 2px dashed;
        border-color: #9D5977;
    }
</style>