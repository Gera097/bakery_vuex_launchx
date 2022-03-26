<template>
    <div class="combinar-adornos">
        <label>Fondant<input type="checkbox" value="fondant" v-model="adornos_elegidos"></label>
        <label>Chocolate<input type="checkbox" value="chocolate" v-model="adornos_elegidos" ></label>
        <label>Nueces<input type="checkbox" value="nueces" v-model="adornos_elegidos"></label>
        <label>Fresas<input type="checkbox" value="fresas" v-model="adornos_elegidos"></label>
        <label>Frutas<input type="checkbox" value="frutas" v-model="adornos_elegidos"></label>
        <label>Chantilli<input type="checkbox" value="chantilli" v-model="adornos_elegidos"></label>
        </div>
</template>

<script>
    export default {
        name: 'CombinarAdornos',
        computed: {
            adornos_elegidos: {
                get(){
                    return this.$store.state.adornoElegido.adornos;
                },
                set (adornos) {
                    this.$store.commit('adornos_elegidos', adornos)
                }
            }
        }
    }
</script>

<style>
</style>