<script setup>
    import { useStore } from 'vuex';
    const store = useStore()
    defineProps(['objeto', 'caption'])
</script>

<template>
    <table>
        <caption>{{caption}}</caption>
        <tr>
            <th v-for="(value, key) in store.state[objeto]">{{key}}</th>
        </tr>
        <tr>
            <th v-for="(value, key) in store.state[objeto]">{{value}}</th>
        </tr>
    </table>
</template>

<style scoped>
 table {
     background-color: rgb(0, 255, 34);
 }
</style>