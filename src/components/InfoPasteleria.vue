<template>
    <section>
        <h2>Contacto</h2>
        <div class="container">
            <div class="dir">
                <h3>Dirección:</h3>
                <p>Calle "El bosque", colonia "Norte", Salamanca, Gto.</p>
            </div>
            <div class="tel">
                <h3>Teléfono:</h3>
                <p>6484872</p>
            </div>
            <div class="horario">
                <h3>Horario de atención:</h3>
                <p>Lunes a Viernes de 8:00 a 17:00 <br>
                Sábados y Domingos de 8:00 a 13:00
                </p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'InfoPasteleria'
    }
</script>

<style scoped>

    section {
        margin-left: auto;
        margin-right: auto;
        max-width: 825px;
    }
    .container {
        display: grid;
        justify-content: center;
        align-content: center;
        border: solid;
        border-radius: 1em;
        background-color: #9D5977;
        color: #F5ECE1;
        grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 30%));
    }
</style>