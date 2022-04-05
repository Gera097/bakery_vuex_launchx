<template>
    <div class="combinar-adornos">
        <div class="opciones">
            <label>Fondant<input type="checkbox" value="fondant" v-model="adornos_elegidos"></label>
        </div>
        <div class="opciones">
            <label>Chocolate<input type="checkbox" value="chocolate" v-model="adornos_elegidos" ></label>
        </div>
        <div class="opciones">
            <label>Nueces<input type="checkbox" value="nueces" v-model="adornos_elegidos"></label>
        </div>
        <div class="opciones">
            <label>Fresas<input type="checkbox" value="fresas" v-model="adornos_elegidos"></label>
        </div>
        <div class="opciones">
            <label>Frutas<input type="checkbox" value="frutas" v-model="adornos_elegidos"></label>
        </div>
        <div class="opciones">
            <label>Chantilli<input type="checkbox" value="chantilli" v-model="adornos_elegidos"></label>
        </div>
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

<style scoped>
    .opciones {
            display:inline-block;
            margin: 0.5em 0.5em;
        }
</style>