<template>
    <img src="../assets/DeliCakesLogo.svg" alt="DeliCakes logo">

    <Inventario objeto='cantidadSabores' caption="Sabores"/>
    <Inventario objeto='cantidadAdornos' caption="Adornos"/>

    <table>
        <caption>Pedidos</caption>
        <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Correo electrónico</th>
            <th>Sabores</th>
            <th>Adornos</th>
        </tr>
        <EntradaPedido
        v-for="(entrada, index) in store.state.infoPedido"
        :key="entrada.id"
        :nombre="entrada.nombre"
        :tel="entrada.tel"
        :email="entrada.email"
        :sabores="entrada.sabores"
        :adornos="entrada.adornos"
        @remove="store.commit('eliminar_pedido', index)"
        >   
        </EntradaPedido>
        
    </table>
    
    
    
</template>

<script setup> 
    import { useStore } from 'vuex'
    import EntradaPedido from "@/components/EntradaPedido.vue";
    import Inventario from '@/components/Inventario.vue';

    const store = useStore()
</script>

<style scoped>

caption {
    font-size:x-large;
    font-weight: 600;
}

</style>
