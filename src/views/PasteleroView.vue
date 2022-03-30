<template>
    <img src="../assets/LogoPastelería.png" alt="ElDelicioso logo">
    <pedidos/>
    
    
</template>

<script> 
    import pedidos from "../components/pedidos.vue"; 
   
    export default {
        name: 'PasteleroView',

        components:{
    pedidos,
}
    }
</script>

<style scoped>
/*     * {
        border-style:solid;
        border-width: 0.2rem;
        border-color: #9D5977;
    } */
</style>
