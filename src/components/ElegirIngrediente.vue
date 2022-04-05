<template>
    <div>
        <h3>{{caption}}</h3>
        <div v-for="(value, key) in store.state[grupo]">
            <label :for="key">Fresa</label>
            <input :type="tipo" :value="key" :id="key" v-model="elementosElegidos">   
        </div>
    </div>
</template>

<script setup>

    defineProps(['grupo','caption','tipo'])

    /* const elementosElegidos = computed({
        get(){
            return this.$store.state.infoCliente.nombre;
        },
        set(nombre) {
            this.$store.commit('cambiar_nombreCliente', nombre)
        }
    }) */        
        
    
</script>

<style scoped>

</style>