<template>
    <div class="combinar-sabores">
        <div class="opciones">
            <label for="fresa">Fresa</label>
            <input type="checkbox" value="fresa" id="fresa" v-model="sabores_elegidos">
        </div>
        <div class="opciones">
            <label for="chocolate">Chocolate</label>
            <input type="checkbox" value="chocolate" id="chocolate" v-model="sabores_elegidos">
        </div>
        <div class="opciones">
            <label for="vainilla">Vainilla</label>
            <input type="checkbox" value="vainilla" id="vainilla" v-model="sabores_elegidos">
        </div>
        <div class="opciones">
            <label for="limon">Limón</label>
            <input type="checkbox" value="limon" id="limon" v-model="sabores_elegidos">
        </div>
        <div class="opciones">
        <label for="naranja">Naranja</label>
        <input type="checkbox" value="naranja" id="naranja" v-model="sabores_elegidos"> 
        </div> 
        
    </div>
</template>

<script>
    export default {
        name: 'CombinarSabores',
        computed: {
            sabores_elegidos: {
                get(){
                    return this.$store.state.saborElegido.sabores;
                },
                set (sabores) {
                    this.$store.commit('sabores_elegidos', sabores)
                }
            }
        }
    }
</script>

<style>
    .opciones {
        display:inline-block;
        margin: 1em 1em;
    }
</style>