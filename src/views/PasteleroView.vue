<template>
    <img src="../assets/DeliCakesLogo.svg" alt="DeliCakes logo">
    <pedidos/>

    <form v-on:submit.prevent="agregarEntrada">  
        <button>Add</button>
    </form>
    <ul>
        <EntradaPedido
        v-for="(entrada, index) in entradas"
        :key="entrada.id"
        :nombre="entrada.nombre"
        :tel="entrada.tel"
        :email="entrada.email"
        @remove="entradas.splice(index, 1)"
        >   
        </EntradaPedido>
        
    </ul>
    
    
    
</template>

<script setup> 
    import { useStore } from 'vuex'
    import { ref } from 'vue'
    import pedidos from "../components/pedidos.vue"; 
    import EntradaPedido from "@/components/EntradaPedido.vue";

    const store = useStore()
    const entradas = ref([{
        id: 0,
        nombre: "Joel",
        tel: 4641881555,
        email: "Joel@joel.com"
    }])

    let idEntrada = 1;

    function agregarEntrada() {
        entradas.value.push({
            id: idEntrada++,
            nombre: store.state.infoCliente.nombre,
            tel: store.state.infoCliente.tel,
            email: store.state.infoCliente.email
        })
    }
</script>

<style scoped>

</style>
