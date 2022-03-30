<template>
<p>Nombre: {{$store.state.infoCliente.nombre}}</p>
            <p>celular: {{$store.state.infoCliente.tel}}</p>
            <p>correo electrónico: {{$store.state.infoCliente.email}}</p>
</template>

<script>
    export default {
        name: 'pedidos'
    }
</script>

<style>
</style>
