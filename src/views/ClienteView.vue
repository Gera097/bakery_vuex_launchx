<template>
    <img src="../assets/DeliCakesLogo.svg" alt="DeliCakes logo">
    <InfoPasteleria/>
    <Sabores/>
    <Adornos/>
    <DatosPedido/>
</template>

<script> 
    import InfoPasteleria from "../components/InfoPasteleria.vue"; 
    import Sabores from "../components/Sabores.vue"
    import Adornos from "@/components/Adornos.vue"
    import DatosPedido from "@/components/DatosPedido.vue";


    export default {
        name: 'ClienteView',

        components:{
            InfoPasteleria,
            Sabores,
            Adornos,
            DatosPedido
   
        }
    }
</script>

<style scoped>
    * {
        border-style:solid;
        border-width: 0.2rem;
        border-color: #9D5977;
    }
</style>
