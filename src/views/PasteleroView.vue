<template>
    <img src="../assets/DeliCakesLogo.svg" alt="DeliCakes logo">

    <Inventario class="tabla" objeto='Pasteles' caption="Pasteles"
    propiedad="cantidad"/>
    <Inventario class="tabla" objeto='Sabores' caption="Sabores"
    propiedad="cantidad"/>
    <Inventario class="tabla" objeto='Adornos' caption="Adornos"
    propiedad="cantidad"/>
    

    <table>
        <caption>Pedidos</caption>
        <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Correo electrónico</th>
            <th>Pastel</th>
            <th>Sabores</th>
            <th>Adornos</th>
            <th>Precio</th>
            
        </tr>
        <EntradaPedido
        v-for="(entrada, index) in store.state.infoPedido"
        :key="entrada.id"
        :nombre="entrada.nombre"
        :tel="entrada.tel"
        :email="entrada.email"
        :sabores="entrada.sabores"
        :adornos="entrada.adornos"
        :precio="entrada.precio"
        :pastel="entrada.pastel"
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

<style >
    table {
        margin: 2em auto;
        border: 2px solid;
        border-collapse: collapse;  
    }
    th {
        padding: 0.5em 1em;
        background-color: #9D5977;
        color: #F5ECE1;
        border: 2px solid #9D5977;
    }

    .tabla {
        margin: 2em auto;
    }

    caption {
        font-size: x-large;
        font-weight: 600;
        margin-bottom: 0.5em;
    }
   
</style>
