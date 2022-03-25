<template>
        <div>
            <h2>Mi Pedido</h2>
            <h3>Mis Datos: </h3>
            <label>Nombre: <input type="text" name="nombre"></label>
            <br>
            <label>Teléfono: <input type="tel" name="tel"></label>
            <br>
            <label>Correo Electrónico :<input type="email" name="email"></label>
            <br>
            <h3>Mi pastel: </h3>
            <p>Descripción general del pastel</p>
            <p>Selección de sabores y adornos</p>
        </div>
</template>

<script>
    export default {
        name: 'DatosPedido'
    }
</script>

<style>
</style>