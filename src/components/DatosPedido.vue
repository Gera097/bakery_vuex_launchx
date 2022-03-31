<template>
        <div>
            <form v-on:submit.prevent="agregarEntrada">
            <h2>Mi Pedido</h2>
            <h3>Mis Datos: </h3>
            <label>Nombre: <input type="text" v-model="cambiar_nombre_cliente"></label>
            <br>
            <label>Teléfono: <input type="tel" v-model="cambiar_tel_cliente"></label>
            <br>
            <label>Correo Electrónico :<input type="email" v-model="cambiar_email_cliente"></label>
            <br>
            <h3>Mi pastel: </h3>
            <CombinarSabores/>
            <CombinarAdornos/>
            <p>Descripción general del pastel</p>
            <p>Sabores elegidos: {{$store.state.saborElegido.sabores}}</p>
            <p>Adornos elegidos: {{$store.state.adornoElegido.adornos}}</p>
            <button id="realizar-pedido">Realizar Pedido</button>
            </form>
        </div>
</template>

<script>

    import CombinarSabores from "../components/CombinarSabores.vue";
    import CombinarAdornos from '@/components/CombinarAdornos.vue';

    let idEntrada = 1;

    export default {
        name: 'DatosPedido',
        components: {
            CombinarSabores,
            CombinarAdornos
        },
        computed: {
            cambiar_nombre_cliente: {
                get(){
                    return this.$store.state.infoCliente.nombre;
                },
                set(nombre) {
                    this.$store.commit('cambiar_nombreCliente', nombre)
                }
            },
            cambiar_tel_cliente: {
                get(){
                    return this.$store.state.infoCliente.tel;
                },
                set(tel) {
                    this.$store.commit('cambiar_telCliente', tel)
                }
            },
            cambiar_email_cliente: {
                get(){
                    return this.$store.state.infoCliente.email;
                },
                set(email) {
                    this.$store.commit('cambiar_emailCliente', email)
                }
            },
            agregarEntrada() {
                const datos_pedido = {
                    id: idEntrada++,
                    nombre: this.$store.state.infoCliente.nombre,
                    tel: this.$store.state.infoCliente.tel,
                    email: this.$store.state.infoCliente.email,
                }
                this.$store.commit('agregar_pedido', datos_pedido)   
            }
         }
    }
</script>

<style>
</style>