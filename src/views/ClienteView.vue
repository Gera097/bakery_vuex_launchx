<template>
    <img src="../assets/LogoPastelería.png" alt="ElDelicioso logo">
    <InfoPasteleria/>
    <Sabores/>
    <Adornos/>
    <CombinarSabores/>
    <CombinarAdornos/>
    <DatosPedido/>

</template>

<script> 
    import InfoPasteleria from "../components/InfoPasteleria.vue"; 
    import Sabores from "../components/Sabores.vue"
    import Adornos from "@/components/Adornos.vue"
    import CombinarSabores from "../components/CombinarSabores.vue"
    import CombinarAdornos from '@/components/CombinarAdornos.vue'
    import DatosPedido from "@/components/DatosPedido.vue";


    export default {
        name: 'ClienteView',

        components:{
    InfoPasteleria,
    Sabores,
    Adornos,
    CombinarSabores,
    CombinarAdornos,
    DatosPedido
   
}
    }
</script>

<style scoped>
    * {
        background-color: aquamarine;
    }
</style>
