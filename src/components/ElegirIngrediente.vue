<template>
    <div>
        <h3>{{caption}}</h3>
        <div v-for="(value, key) in this.$store.state[grupo]" class="opciones">
            <label :for="key">{{key}}</label>
            <input :type="tipo" :value="key" :id="key" v-model="elementoElegido" >  
        </div>
    </div>
</template>

<script>

    export default {
        name: 'ElegirIngrediente',
        props: ['grupo','caption','tipo'],
        computed: {
            elementoElegido: {
                get(){
                    return this.$store.state.ElementoElegido.Pasteles 
                },
                set(info) {
                    this.$store.commit('pastel_elegido',info)
                
                }
            }
        }
    }  
</script>
<style scoped>
    div.opciones { 
        margin: 1em 1em;
        display: inline;
        text-align: center;
    }
</style>