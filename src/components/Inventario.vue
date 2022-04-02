<script setup>
    import { useStore } from 'vuex';
    const store = useStore()
    defineProps(['objeto', 'caption'])
</script>

<template>
    <div>
    <table>
        <caption>{{caption}}</caption>
        <tr>
            <th v-for="(value, key) in store.state[objeto]">{{key}}</th>
        </tr>
        <tr>
            <th v-for="(value, key) in store.state[objeto]">{{value}}</th>
        </tr>
    </table>
    </div>
</template>

<style scoped>
table {
    border: 2px solid;
    border-collapse: collapse;
    
} 
</style>