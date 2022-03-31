<template>
    <img src="../assets/DeliCakesLogo.svg" alt="DeliCakes logo">
    
    <!-- <form v-on:submit.prevent="agregarEntrada">  
        <button>Add</button>
    </form> -->
    <ul>
        <EntradaPedido
        v-for="(entrada, index) in store.state.infoPedido"
        :key="entrada.id"
        :nombre="entrada.nombre"
        :tel="entrada.tel"
        :email="entrada.email"
        @remove="store.commit('eliminar_pedido', index)"
        >   
        </EntradaPedido>
        
    </ul>
    
    
    
</template>

<script setup> 
    import { useStore } from 'vuex'
    import EntradaPedido from "@/components/EntradaPedido.vue";

    const store = useStore()
    let idEntrada = 1;

    function agregarEntrada() {
        const datos_pedido = {
            id: idEntrada++,
            nombre: store.state.infoCliente.nombre,
            tel: store.state.infoCliente.tel,
            email: store.state.infoCliente.email
        }

        store.commit('agregar_pedido', datos_pedido)
    }
</script>

<style scoped>

</style>
