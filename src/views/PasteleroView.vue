<template>
    <img src="../assets/DeliCakesLogo.svg" alt="DeliCakes logo">
    
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

    const store = useStore()
    /* let idEntrada = 1;

    function agregarEntrada() {
        const datos_pedido = {
            id: idEntrada++,
            nombre: store.state.infoCliente.nombre,
            tel: store.state.infoCliente.tel,
            email: store.state.infoCliente.email
        }

        store.commit('agregar_pedido', datos_pedido)
    } */
</script>

<style scoped>

caption {
    font-size:x-large;
    font-weight: 600;
}

</style>
