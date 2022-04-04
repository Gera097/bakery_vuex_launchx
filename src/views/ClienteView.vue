<template>
    <img src="../assets/DeliCakesLogo.svg" alt="DeliCakes logo">
    <Inventario
        objeto='Sabores'
        caption='Sabores'
        propiedad='precio'
        estilo=""
        prefijo="$"
    />
    <Inventario
        objeto='Adornos'
        caption='Adornos'
        propiedad='precio'
        prefijo="$"
    />
    <DatosPedido/>
    <InfoPasteleria/>
</template>

<script setup> 
    import InfoPasteleria from "../components/InfoPasteleria.vue"; 
    import DatosPedido from "@/components/DatosPedido.vue";
    import Inventario from "@/components/Inventario.vue";

</script>

<style scoped>
</style>
