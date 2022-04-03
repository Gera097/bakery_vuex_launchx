<script setup>
    import { useStore } from 'vuex';
    const store = useStore()
    defineProps(['objeto', 'caption','propiedad', 'estilo'])
</script>

<template>
    <div v-if="estilo === 'lista'" class="lista">
        <h2>{{caption}}</h2>
        <dl>
            <div v-for="(value, key) in store.state[objeto]">
                <dt >{{key}}</dt>
                <dd>{{value[propiedad]}}</dd>
            </div> 
        </dl>
    </div>
    <div v-else class="tabla">
        <table>
            <caption>{{caption}}</caption>
            <tr>
                <th v-for="(value, key) in store.state[objeto]">{{key}}</th>
            </tr>
            <tr>
                <td v-for="(value, key) in store.state[objeto]">{{value[propiedad]}}</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>

table {
    border: 2px solid;
    border-collapse: collapse;
    margin-left: auto; 
    margin-right: auto; 
    width: auto; 
    height: auto;
} 
th {
    background-color: #9D5977;
    color: #F5ECE1;
}
</style>